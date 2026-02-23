export default function CourseSelector({ courses, completedLessons, onSelect }) {
  const getCourseProgress = (courseId, modules) => {
    let total = 0;
    let done = 0;
    modules.forEach((mod, mIdx) => {
      mod.lessons.forEach((_, lIdx) => {
        total++;
        const key = `${courseId}:${mIdx}-${lIdx}`;
        if (completedLessons.includes(key)) done++;
      });
    });
    return { done, total, pct: total ? Math.round((done / total) * 100) : 0 };
  };

  const courseList = Object.values(courses);

  return (
    <div style={{ minHeight: "100vh", background: "#131F24", fontFamily: "'Nunito', sans-serif", padding: "0 0 60px" }}>
      <div style={{
        background: "linear-gradient(180deg, #1a2f38 0%, #131F24 100%)",
        padding: "40px 20px 32px", textAlign: "center",
      }}>
        <div style={{ fontSize: "2rem", marginBottom: 8 }}>{"\u{1F5A5}\uFE0F"}</div>
        <div style={{ fontWeight: 900, fontSize: "1.6rem", color: "#58CC02", letterSpacing: "-0.02em" }}>DevQuest</div>
        <div style={{ color: "#A0A0A0", fontSize: "0.95rem", fontWeight: 600, marginTop: 4 }}>Choose your learning path</div>
      </div>

      <div style={{ maxWidth: 560, margin: "32px auto 0", padding: "0 20px" }}>
        {courseList.map((course) => {
          const { done, total, pct } = getCourseProgress(course.id, course.modules);
          return (
            <button
              key={course.id}
              onClick={() => onSelect(course.id)}
              style={{
                width: "100%", display: "block", textAlign: "left",
                background: `${course.color}0A`, border: `1px solid ${course.color}33`,
                borderRadius: 20, padding: "24px", marginBottom: 16,
                cursor: "pointer", transition: "all 0.2s",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = `${course.color}18`;
                e.currentTarget.style.borderColor = `${course.color}66`;
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = `0 8px 30px ${course.color}22`;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = `${course.color}0A`;
                e.currentTarget.style.borderColor = `${course.color}33`;
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{
                  width: 60, height: 60, borderRadius: 16, display: "flex",
                  alignItems: "center", justifyContent: "center",
                  background: `${course.color}22`, fontSize: "2rem", flexShrink: 0,
                }}>
                  {course.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ color: "#fff", fontWeight: 900, fontSize: "1.15rem" }}>{course.title}</div>
                  <div style={{ color: "#A0A0A0", fontSize: "0.85rem", fontWeight: 600, marginTop: 2 }}>{course.desc}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 10 }}>
                    <div style={{ flex: 1, height: 6, background: "rgba(255,255,255,0.08)", borderRadius: 99 }}>
                      <div style={{
                        height: "100%", background: course.color, borderRadius: 99,
                        width: `${pct}%`, transition: "width 0.3s",
                      }} />
                    </div>
                    <span style={{ color: course.color, fontWeight: 800, fontSize: "0.8rem", minWidth: 45, textAlign: "right" }}>
                      {done}/{total}
                    </span>
                  </div>
                </div>
                <span style={{ color: course.color, fontSize: "1.4rem", fontWeight: 900 }}>{"\u203A"}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
