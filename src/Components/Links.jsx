export default function Links() {
  const links = [
    "Ana Səhifə",
    "Haqqımızda",
    "Tədris Sahələri",
    "Kampaniyalar",
    "Faydalı",
    "Əlaqə",
  ];

  return (
    <ul className="nav-links">
      {links.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}