export default function Hero() {
return (
    <section className="hero">
        <div className="hero-text">
            <button className="create-btn"># yaratmağa başla</button>

            <h1>
                JET Academy-ə <span className="welcome">Xoş Gəlmisiniz!</span>
            </h1>

            <p>
                Burada texnologiya təhsili real praktiki bilik və bacarıqlarla birləşir.
                Fəaliyyətə başladığımız gündən etibarən əsas məqsədimiz yüksək keyfiyyətli,
                praktiki və karyera yönümlü təlim proqramları vasitəsilə növbəti nəsil IT
                mütəxəssislərini yetişdirməkdir.
            <br /><br />
                JET Academy-də biz inanırıq ki, texnologiya gələcəyin dilidir — və hər kəsin
                onu öyrənmək imkanı olmalıdır.Missiyamız IT təhsilini bütün yaş və təhsil səviyyələrindən olan insanlar üçün əlçatan, səmərəli və ilhamverici etməkdir.
            </p>

            <button className="education">Tədris sahələri </button>
        </div>

        <div className="hero-img">
            <img src="./images/jet.png" alt="img" />
        </div>
    </section>
);
}
