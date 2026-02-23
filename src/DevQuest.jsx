import { useState, useEffect } from "react";
import { COURSES, getModules, getTotalLessons } from "./data/modules";
import { DIFFICULTY_CONFIG } from "./data/difficulty";
import Confetti from "./components/Confetti";
import XPBurst from "./components/XPBurst";
import Hearts from "./components/Hearts";
import ProgressRing from "./components/ProgressRing";
import LessonView from "./LessonView";
import DifficultyModal from "./components/DifficultyModal";
import CourseSelector from "./components/CourseSelector";

// Persistent storage helpers
const STORAGE_KEY = "devquest-state";

const loadLocal = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
};

const saveLocal = (state) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch { /* ignore */ }
};

const loadFirestore = async (uid) => {
  const { getFirestore, doc, getDoc } = await import("firebase/firestore");
  const { app } = await import("./firebase");
  const db = getFirestore(app);
  const snap = await getDoc(doc(db, "users", uid));
  return snap.exists() ? snap.data().progress : null;
};

const saveFirestore = async (uid, state) => {
  const { getFirestore, doc, setDoc } = await import("firebase/firestore");
  const { app } = await import("./firebase");
  const db = getFirestore(app);
  await setDoc(doc(db, "users", uid), { progress: state }, { merge: true });
};

// Migration: prefix old keys with "fullstack:"
const migrateCompletedLessons = (lessons) => {
  return lessons.map(key => {
    if (key.includes(":")) return key; // already migrated
    return `fullstack:${key}`;
  });
};

const DEFAULT_STATE = {
  xp: 0,
  streak: 0,
  lastActiveDate: null,
  hearts: 5,
  completedLessons: [],
  currentModule: 0,
  level: 1,
  achievements: [],
};

// Main App
export default function DevQuest({ uid, userEmail, onLogout }) {
  const [state, setState] = useState(DEFAULT_STATE);
  const [loaded, setLoaded] = useState(false);
  const [view, setView] = useState("home");
  const [activeCourse, setActiveCourse] = useState(null);
  const [activeLesson, setActiveLesson] = useState(null);
  const [activeModuleIdx, setActiveModuleIdx] = useState(null);
  const [confetti, setConfetti] = useState(false);
  const [xpBurst, setXpBurst] = useState({ visible: false, amount: 0 });
  const [expandedModule, setExpandedModule] = useState(null);
  const [pendingLesson, setPendingLesson] = useState(null);

  useEffect(() => {
    const init = async () => {
      let saved = null;
      if (uid) {
        try { saved = await loadFirestore(uid); } catch { /* fall through */ }
      }
      if (!saved) saved = loadLocal();
      if (saved) {
        const today = new Date().toDateString();
        const last = saved.lastActiveDate;
        const yesterday = new Date(Date.now() - 86400000).toDateString();
        if (last === today) { /* same day */ }
        else if (last === yesterday) { saved.streak += 1; saved.lastActiveDate = today; }
        else { saved.streak = 1; saved.lastActiveDate = today; }
        if (last !== today) saved.hearts = 5;
        // Migration: tag existing completions as beginner
        if (!saved._difficultyMigrated && saved.completedLessons?.length) {
          const extra = [];
          for (const key of saved.completedLessons) {
            if (!key.includes("-", key.indexOf("-") + 1)) {
              const bKey = `${key}-beginner`;
              if (!saved.completedLessons.includes(bKey)) extra.push(bKey);
            }
          }
          if (extra.length) saved.completedLessons = [...saved.completedLessons, ...extra];
          saved._difficultyMigrated = true;
        }
        // Migration: prefix old keys with "fullstack:"
        if (!saved._courseMigrated && saved.completedLessons?.length) {
          saved.completedLessons = migrateCompletedLessons(saved.completedLessons);
          saved._courseMigrated = true;
        }
        // Remove gems from old state if present
        delete saved.gems;
        setState(saved);
      } else {
        setState(s => ({ ...s, streak: 1, lastActiveDate: new Date().toDateString() }));
      }
      setLoaded(true);
    };
    init();
  }, [uid]);

  useEffect(() => {
    if (!loaded) return;
    saveLocal(state);
    if (uid) saveFirestore(uid, state).catch(() => {});
  }, [state, loaded, uid]);

  const modules = activeCourse ? getModules(activeCourse) : [];
  const totalLessons = activeCourse ? getTotalLessons(activeCourse) : 0;

  const getLessonKey = (mIdx, lIdx) => `${activeCourse}:${mIdx}-${lIdx}`;
  const getDifficultyKey = (mIdx, lIdx, diff) => `${activeCourse}:${mIdx}-${lIdx}-${diff}`;
  const isLessonComplete = (mIdx, lIdx) => state.completedLessons.includes(getLessonKey(mIdx, lIdx));
  const isModuleComplete = (mIdx) => modules[mIdx]?.lessons.every((_, lIdx) => isLessonComplete(mIdx, lIdx));
  const isModuleUnlocked = (mIdx) => mIdx === 0 || isModuleComplete(mIdx - 1);
  const getCompletedDifficulties = (mIdx, lIdx) =>
    ["beginner", "average", "advanced"].filter(d => state.completedLessons.includes(getDifficultyKey(mIdx, lIdx, d)));

  const completedCount = activeCourse
    ? state.completedLessons.filter(k => {
        if (!k.startsWith(`${activeCourse}:`)) return false;
        const rest = k.slice(activeCourse.length + 1);
        const parts = rest.split("-");
        return parts.length === 2;
      }).length
    : 0;
  const overallProgress = totalLessons ? Math.round((completedCount / totalLessons) * 100) : 0;
  const level = Math.floor(state.xp / 100) + 1;

  const startLesson = (mIdx, lIdx) => {
    if (!isModuleUnlocked(mIdx)) return;
    if (state.hearts <= 0) return;
    setPendingLesson({ mIdx, lIdx });
  };

  const confirmDifficulty = (difficulty) => {
    if (!pendingLesson) return;
    setActiveModuleIdx(pendingLesson.mIdx);
    setActiveLesson({ ...pendingLesson, difficulty });
    setPendingLesson(null);
    setView("lesson");
  };

  const completeLesson = (xpEarned, perfect) => {
    const baseKey = getLessonKey(activeLesson.mIdx, activeLesson.lIdx);
    const diffKey = getDifficultyKey(activeLesson.mIdx, activeLesson.lIdx, activeLesson.difficulty);
    const config = DIFFICULTY_CONFIG[activeLesson.difficulty] || DIFFICULTY_CONFIG.beginner;
    setState(prev => {
      let newCompleted = [...prev.completedLessons];
      if (!newCompleted.includes(baseKey)) newCompleted.push(baseKey);
      if (!newCompleted.includes(diffKey)) newCompleted.push(diffKey);
      const bonusXp = perfect ? config.perfectBonus : 0;
      return { ...prev, xp: prev.xp + xpEarned + bonusXp, completedLessons: newCompleted };
    });
    setXpBurst({ visible: true, amount: xpEarned });
    setTimeout(() => setXpBurst({ visible: false, amount: 0 }), 1300);
    if (perfect) { setConfetti(true); setTimeout(() => setConfetti(false), 2500); }
    setView("home");
    setActiveLesson(null);
  };

  const loseHeart = () => {
    setState(prev => ({ ...prev, hearts: Math.max(0, prev.hearts - 1) }));
  };

  const selectCourse = (courseId) => {
    setActiveCourse(courseId);
    setExpandedModule(null);
  };

  const backToCourses = () => {
    setActiveCourse(null);
    setExpandedModule(null);
  };

  if (!loaded) return (
    <div style={{ minHeight: "100vh", background: "#131F24", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ color: "#58CC02", fontSize: "2rem", fontWeight: 900, fontFamily: "'Nunito', sans-serif", animation: "pulse 1.5s infinite" }}>
        Loading DevQuest...
      </div>
    </div>
  );

  if (view === "lesson" && activeLesson) {
    const mod = modules[activeLesson.mIdx];
    const lesson = mod.lessons[activeLesson.lIdx];
    return (
      <>
        <Confetti active={confetti} />
        <XPBurst {...xpBurst} />
        <LessonView lesson={lesson} moduleColor={mod.color} hearts={state.hearts}
          difficulty={activeLesson.difficulty || "beginner"}
          onComplete={completeLesson} onLoseHeart={loseHeart} />
      </>
    );
  }

  if (view === "profile") {
    const courseEntries = Object.values(COURSES);
    return (
      <div style={{ minHeight: "100vh", background: "#131F24", fontFamily: "'Nunito', sans-serif", padding: "0 0 100px" }}>
        <div style={{ background: "linear-gradient(180deg, #1a2f38 0%, #131F24 100%)", padding: "40px 20px 32px", textAlign: "center", position: "relative" }}>
          <button onClick={() => setView("home")} style={{
            position: "absolute", top: 16, left: 16, background: "none", border: "none", color: "#89E219", fontSize: "1.1rem", fontWeight: 800, cursor: "pointer", fontFamily: "'Nunito', sans-serif",
          }}>{"\u2190"} Back</button>
          <div style={{
            width: 80, height: 80, borderRadius: "50%", background: "linear-gradient(135deg, #58CC02, #89E219)",
            display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px",
            fontSize: "2rem", fontWeight: 900, color: "#131F24", boxShadow: "0 0 30px rgba(88,204,2,0.3)",
          }}>{level}</div>
          <div style={{ fontSize: "1.5rem", fontWeight: 900, color: "#fff" }}>Level {level}</div>
          <div style={{ color: "#89E219", fontWeight: 700 }}>Developer</div>
          {userEmail && (
            <div style={{ color: "#A0A0A0", fontSize: "0.8rem", fontWeight: 600, marginTop: 8 }}>{userEmail}</div>
          )}
          {onLogout && (
            <button onClick={onLogout} style={{
              marginTop: 12, padding: "8px 24px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.15)",
              background: "rgba(255,255,255,0.05)", color: "#FF4B4B", fontSize: "0.85rem",
              fontWeight: 700, cursor: "pointer", fontFamily: "'Nunito', sans-serif",
            }}>Sign Out</button>
          )}
        </div>
        <div style={{ maxWidth: 480, margin: "0 auto", padding: "24px 20px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 32 }}>
            {[
              { label: "Total XP", value: state.xp, icon: "\u26A1", color: "#FFC800" },
              { label: "Streak", value: `${state.streak} day${state.streak !== 1 ? "s" : ""}`, icon: "\u{1F525}", color: "#FF9600" },
            ].map(s => (
              <div key={s.label} style={{
                background: "rgba(255,255,255,0.05)", borderRadius: 16, padding: "16px 12px", textAlign: "center",
                border: "1px solid rgba(255,255,255,0.08)",
              }}>
                <div style={{ fontSize: "1.5rem", marginBottom: 4 }}>{s.icon}</div>
                <div style={{ fontSize: "1.2rem", fontWeight: 900, color: s.color }}>{s.value}</div>
                <div style={{ fontSize: "0.75rem", color: "#A0A0A0", fontWeight: 700 }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Per-course progress */}
          {courseEntries.map(course => {
            const cModules = course.modules;
            let cTotal = 0;
            let cDone = 0;
            cModules.forEach((mod, mIdx) => {
              mod.lessons.forEach((_, lIdx) => {
                cTotal++;
                if (state.completedLessons.includes(`${course.id}:${mIdx}-${lIdx}`)) cDone++;
              });
            });
            const cPct = cTotal ? Math.round((cDone / cTotal) * 100) : 0;
            return (
              <div key={course.id} style={{ marginBottom: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                  <span style={{ fontSize: "1.2rem" }}>{course.icon}</span>
                  <span style={{ color: "#fff", fontWeight: 800, fontSize: "1rem" }}>{course.title}</span>
                  <span style={{ color: course.color, fontWeight: 800, fontSize: "0.85rem", marginLeft: "auto" }}>{cPct}%</span>
                </div>
                {cModules.map((m, i) => {
                  const done = m.lessons.filter((_, li) =>
                    state.completedLessons.includes(`${course.id}:${i}-${li}`)
                  ).length;
                  const pct = Math.round((done / m.lessons.length) * 100);
                  return (
                    <div key={m.id} style={{
                      display: "flex", alignItems: "center", gap: 12, padding: "8px 0",
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                    }}>
                      <span style={{ fontSize: "1rem" }}>{m.icon}</span>
                      <div style={{ flex: 1 }}>
                        <div style={{ color: "#E5E5E5", fontWeight: 700, fontSize: "0.85rem" }}>{m.title}</div>
                        <div style={{ height: 4, background: "rgba(255,255,255,0.1)", borderRadius: 99, marginTop: 3 }}>
                          <div style={{ height: "100%", background: m.color, borderRadius: 99, width: `${pct}%`, transition: "width 0.3s" }} />
                        </div>
                      </div>
                      <span style={{ color: m.color, fontWeight: 800, fontSize: "0.8rem" }}>{done}/{m.lessons.length}</span>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // COURSE SELECTOR
  if (!activeCourse) {
    return (
      <>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body { background: #131F24; }
        `}</style>
        <CourseSelector
          courses={COURSES}
          completedLessons={state.completedLessons}
          onSelect={selectCourse}
        />
      </>
    );
  }

  const courseData = COURSES[activeCourse];

  // HOME VIEW (within a course)
  return (
    <div style={{ minHeight: "100vh", background: "#131F24", fontFamily: "'Nunito', sans-serif", paddingBottom: 80 }}>
      <Confetti active={confetti} />
      <XPBurst {...xpBurst} />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes confettiFall { 0% { transform: translateY(0) rotate(0deg); opacity: 1; } 100% { transform: translateY(100vh) rotate(720deg); opacity: 0; } }
        @keyframes xpBurst { 0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); } 30% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); } 100% { opacity: 0; transform: translate(-50%, -80%) scale(1); } }
        @keyframes slideIn { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes shakeX { 0%,100% { transform: translateX(0); } 20% { transform: translateX(-8px); } 40% { transform: translateX(8px); } 60% { transform: translateX(-4px); } 80% { transform: translateX(4px); } }
        @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.5; } }
        @keyframes bob { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
        @keyframes glow { 0%,100% { box-shadow: 0 0 15px rgba(88,204,2,0.2); } 50% { box-shadow: 0 0 30px rgba(88,204,2,0.5); } }
        body { background: #131F24; }
      `}</style>

      {/* Header */}
      <div style={{
        background: "linear-gradient(180deg, #1a2f38 0%, #131F24 100%)",
        padding: "20px 20px 24px", position: "sticky", top: 0, zIndex: 100,
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <button onClick={backToCourses} style={{
                background: "none", border: "none", color: "#89E219", fontSize: "1.1rem",
                fontWeight: 800, cursor: "pointer", fontFamily: "'Nunito', sans-serif", padding: 0,
              }}>{"\u2190"}</button>
              <span style={{ fontSize: "1.3rem" }}>{courseData.icon}</span>
              <span style={{ fontWeight: 900, fontSize: "1.1rem", color: courseData.color, letterSpacing: "-0.02em" }}>{courseData.title}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <span style={{ fontSize: "1.1rem" }}>{"\u{1F525}"}</span>
                <span style={{ color: "#FF9600", fontWeight: 800, fontSize: "0.95rem" }}>{state.streak}</span>
              </div>
              <Hearts count={state.hearts} />
              <button onClick={() => setView("profile")} style={{
                width: 36, height: 36, borderRadius: "50%", border: "2px solid #58CC02",
                background: "rgba(88,204,2,0.15)", color: "#58CC02", fontWeight: 900,
                fontSize: "0.85rem", cursor: "pointer", fontFamily: "'Nunito', sans-serif",
              }}>{level}</button>
            </div>
          </div>
          {/* XP bar */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ flex: 1, height: 10, background: "rgba(255,255,255,0.08)", borderRadius: 99 }}>
              <div style={{
                height: "100%", borderRadius: 99, background: `linear-gradient(90deg, ${courseData.color}, ${courseData.color}CC)`,
                width: `${state.xp % 100}%`, transition: "width 0.5s ease",
                boxShadow: `0 0 10px ${courseData.color}44`,
              }} />
            </div>
            <span style={{ color: courseData.color, fontWeight: 800, fontSize: "0.8rem", minWidth: 50, textAlign: "right" }}>
              {state.xp % 100}/100
            </span>
          </div>
        </div>
      </div>

      {/* Overall progress */}
      <div style={{ maxWidth: 560, margin: "24px auto 0", padding: "0 20px" }}>
        <div style={{
          background: "rgba(255,255,255,0.04)", borderRadius: 20, padding: "20px 24px",
          border: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", gap: 20,
          marginBottom: 32,
        }}>
          <ProgressRing progress={overallProgress} size={60} stroke={5} />
          <div>
            <div style={{ color: "#fff", fontWeight: 800, fontSize: "1.1rem" }}>{overallProgress}% Complete</div>
            <div style={{ color: "#A0A0A0", fontSize: "0.85rem", fontWeight: 600 }}>
              {completedCount} of {totalLessons} lessons finished
            </div>
          </div>
          <div style={{ marginLeft: "auto", color: "#FFC800", fontWeight: 900, fontSize: "1.3rem" }}>
            {"\u26A1"}{state.xp}
          </div>
        </div>

        {/* Module path */}
        <div style={{ position: "relative" }}>
          {/* Connecting line */}
          <div style={{
            position: "absolute", left: 35, top: 40, bottom: 40, width: 3,
            background: "rgba(255,255,255,0.06)", borderRadius: 99, zIndex: 0,
          }} />

          {modules.map((mod, mIdx) => {
            const unlocked = isModuleUnlocked(mIdx);
            const complete = isModuleComplete(mIdx);
            const doneLessons = mod.lessons.filter((_, li) => isLessonComplete(mIdx, li)).length;
            const pct = Math.round((doneLessons / mod.lessons.length) * 100);
            const isExpanded = expandedModule === mIdx;
            const isNext = unlocked && !complete;

            return (
              <div key={mod.id} style={{ position: "relative", zIndex: 1, marginBottom: 8 }}>
                {/* Module button */}
                <button
                  onClick={() => unlocked ? setExpandedModule(isExpanded ? null : mIdx) : null}
                  style={{
                    width: "100%", display: "flex", alignItems: "center", gap: 16,
                    padding: "14px 16px", borderRadius: 16, cursor: unlocked ? "pointer" : "default",
                    background: isExpanded ? `${mod.color}15` : "rgba(255,255,255,0.03)",
                    border: isExpanded ? `1px solid ${mod.color}44` : "1px solid rgba(255,255,255,0.05)",
                    transition: "all 0.2s", textAlign: "left",
                    opacity: unlocked ? 1 : 0.4,
                    animation: isNext ? "glow 2s infinite" : "none",
                  }}
                >
                  <div style={{
                    width: 48, height: 48, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.5rem", flexShrink: 0, position: "relative",
                    background: complete ? mod.color : `${mod.color}22`,
                    border: `3px solid ${complete ? mod.color : unlocked ? `${mod.color}88` : "rgba(255,255,255,0.1)"}`,
                    boxShadow: isNext ? `0 0 20px ${mod.color}44` : "none",
                  }}>
                    {complete ? "\u2713" : unlocked ? mod.icon : "\u{1F512}"}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      color: unlocked ? "#fff" : "#666", fontWeight: 800, fontSize: "1rem",
                      fontFamily: "'Nunito', sans-serif",
                    }}>
                      <span style={{ color: mod.color, fontWeight: 900 }}>{mod.id}.</span> {mod.title}
                    </div>
                    <div style={{ color: unlocked ? "#A0A0A0" : "#444", fontSize: "0.8rem", fontWeight: 600 }}>
                      {mod.desc} {"\u2022"} {mod.lessons.length} lesson{mod.lessons.length > 1 ? "s" : ""}
                    </div>
                    {unlocked && (
                      <div style={{ height: 4, background: "rgba(255,255,255,0.08)", borderRadius: 99, marginTop: 6 }}>
                        <div style={{ height: "100%", background: mod.color, borderRadius: 99, width: `${pct}%`, transition: "width 0.3s" }} />
                      </div>
                    )}
                  </div>
                  {unlocked && (
                    <span style={{
                      color: mod.color, fontSize: "1.2rem", fontWeight: 900,
                      transform: isExpanded ? "rotate(180deg)" : "rotate(0)",
                      transition: "transform 0.2s",
                    }}>{"\u25BC"}</span>
                  )}
                </button>

                {/* Expanded lessons */}
                {isExpanded && (
                  <div style={{ padding: "8px 0 8px 36px", animation: "slideIn 0.2s ease" }}>
                    {mod.lessons.map((lesson, lIdx) => {
                      const lComplete = isLessonComplete(mIdx, lIdx);
                      return (
                        <button
                          key={lIdx}
                          onClick={() => startLesson(mIdx, lIdx)}
                          disabled={state.hearts <= 0}
                          style={{
                            width: "100%", display: "flex", alignItems: "center", gap: 12,
                            padding: "12px 16px", borderRadius: 12,
                            background: lComplete ? `${mod.color}10` : "rgba(255,255,255,0.02)",
                            border: `1px solid ${lComplete ? `${mod.color}33` : "rgba(255,255,255,0.05)"}`,
                            cursor: state.hearts > 0 ? "pointer" : "not-allowed",
                            marginBottom: 6, textAlign: "left", transition: "all 0.15s",
                            opacity: state.hearts > 0 ? 1 : 0.5,
                          }}
                        >
                          <div style={{
                            width: 32, height: 32, borderRadius: "50%", flexShrink: 0,
                            display: "flex", alignItems: "center", justifyContent: "center",
                            background: lComplete ? mod.color : "rgba(255,255,255,0.08)",
                            color: lComplete ? "#fff" : "#A0A0A0", fontSize: "0.8rem", fontWeight: 900,
                          }}>
                            {lComplete ? "\u2713" : lIdx + 1}
                          </div>
                          <div style={{ flex: 1 }}>
                            <div style={{ color: "#E5E5E5", fontWeight: 700, fontSize: "0.9rem", fontFamily: "'Nunito', sans-serif" }}>
                              {lesson.title}
                            </div>
                            <div style={{ color: "#777", fontSize: "0.75rem", fontWeight: 600 }}>
                              3 questions {"\u2022"} per difficulty
                            </div>
                          </div>
                          <span style={{ color: lComplete ? "#58CC02" : mod.color, fontSize: "0.85rem", fontWeight: 800 }}>
                            {lComplete ? "REDO" : "START"}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Difficulty Modal */}
        {pendingLesson && (
          <DifficultyModal
            lessonTitle={modules[pendingLesson.mIdx].lessons[pendingLesson.lIdx].title}
            completedDifficulties={getCompletedDifficulties(pendingLesson.mIdx, pendingLesson.lIdx)}
            onSelect={confirmDifficulty}
            onClose={() => setPendingLesson(null)}
          />
        )}

        {/* Hearts warning */}
        {state.hearts <= 0 && (
          <div style={{
            background: "#FF4B4B18", border: "1px solid #FF4B4B44", borderRadius: 16,
            padding: "20px", textAlign: "center", marginTop: 24, animation: "slideIn 0.3s ease",
          }}>
            <div style={{ fontSize: "2rem", marginBottom: 8 }}>{"\u{1F494}"}</div>
            <div style={{ color: "#FF4B4B", fontWeight: 800, fontSize: "1.1rem", marginBottom: 4 }}>No hearts left!</div>
            <div style={{ color: "#A0A0A0", fontSize: "0.85rem" }}>Hearts refill tomorrow. Review your notes in the meantime!</div>
          </div>
        )}
      </div>
    </div>
  );
}
