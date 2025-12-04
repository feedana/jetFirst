export default function Difference() {
  const items = [
    {
      id: 1,
      title: "Müasir və Daim Yenilənən Tədris Proqramı",
      text: "Proqramlarımız əmək bazarının tələblərinə uyğun olaraq mütəmadi yenilənir və ən son texnologiyaları əhatə edir."
    },
    {
      id: 2,
      title: "Real Layihələr və Gündəlik Tapşırıqlar",
      text: "Hər bir kursumuz praktiki tapşırıqlar və real iş mühitində tələb olunan və ya işlənən layihələrlə zənginləşdirilmişdir."
    },
    {
      id: 3,
      title: "Yüksək Təcrübəli və Professional Təlimçilər",
      text: "Sektor təcrübəsinə malik mütəxəssislər biliklərini paylaşaraq tələbələrin karyera inkişafına dəstək olurlar."
    },
    {
      id: 4,
      title: "Rahat Ofis Mühiti və Müasir Avadanlıqlarla Təminat",
      text: "Tədris prosesini daha səmərəli və məhsuldar edən rahat öyrənmə mühiti və texniki avadanlıqlar təqdim edirik."
    },
    {
      id: 5,
      title: "Sərfəli Qiy­mətə Yüksək Səviyyəli Tədris",
      text: "Keyfiyyətli tədrisi hər kəs üçün əlçatan etmək məqsədilə münasib qiymət siyasəti tətbiq edirik."
    },
    {
      id: 6,
      title: "Rahat Yerdə Yerləşən Ofis",
      text: "Şəhərin mərkəzində yerləşən ofisimiz nəqliyyat baxımından tələbələr üçün rahatlıq yaradır."
    }
  ];

  return (
    <section className="difference">
      <h2>Fərqimiz Nədir?</h2>
      <p className="difference-sub">
        Bizi digər kurslardan fərqləndirən əsas məqamlar ilə tanış ola bilərsiniz
      </p>

      <div className="difference-grid">
        {items.map((item) => (
          <div key={item.id} className="diff-box">
            <div className="diff-number">{item.id}</div>

            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
