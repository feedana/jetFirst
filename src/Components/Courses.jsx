import coursesData from "./coursesdata.js";
import CourseCard from "./CourseCard";

export default function Courses() {
  return (
    <section className="courses">
      <h2 className="courses-title">Tədris Sahələri</h2>
      <p className="courses-subtitle">
        JET Academy-də tədris sahələri müasir əmək bazarının tələblərinə uyğun formalaşdırılıb.
        Hər bir sahə real layihələrə və inkişaf imkanlarına əsaslanır.
      </p>

      <div className="courses-grid">
        {coursesData.map((course, i) => (
          <CourseCard key={i} {...course} />
        ))}
      </div>
    </section>
  );
}
