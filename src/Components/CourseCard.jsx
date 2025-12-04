export default function CourseCard({
  title,
  text,
  weeks,
  duration,
  tags,
  bg
}) {
  return (
    <div className="course-card" style={{ backgroundColor: bg }}>
      <h3>{title}</h3>
      <p className="course-text">{text}</p>

      <p className="course-info">
        Həftədə dərs sayı: {weeks} <br />
        Müddət: {duration}
      </p>

      <div className="course-tags">
        {tags.map((tag, i) => (
          <span key={i} className="tag">{tag}</span>
        ))}
      </div>

    </div>
  );
}
