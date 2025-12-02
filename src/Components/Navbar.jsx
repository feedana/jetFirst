
import Links from "./Links";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left"><img src="https://jetacademy.az/_next/image?url=%2Flogos%2Fjetlogo.png&w=3840&q=75" alt="" srcset="" /></div>

      <Links />

      <button className="nav-btn">Zəng sifarişi</button>
    </nav>
  );
}