export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left"><img src="https://jetacademy.az/_next/image?url=%2Flogos%2Fjetlogo.png&w=3840&q=75" alt="" srcset="" /></div>

      <ul className="nav-links">
        <li>Ana Səhifə</li>
        <li>Haqqımızda</li>
        <li>Tədris Sahələri</li>
        <li>Kampaniyalar</li>
        <li>Faydalı</li>
        <li>Əlaqə</li>
      </ul>
      <button className="lang-btn">AZ</button>
      <button className="nav-btn">☎️ Zəng sifarişi</button>

    </nav>
  );
}