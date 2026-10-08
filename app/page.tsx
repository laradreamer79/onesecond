"use client";

import { useRef, useState } from "react";
import cityExperiences from "./data/city-experiences.json";

const experiences = [
  {
    title: "موعد الغروب",
    place: "ساحل أمالفي، إيطاليا",
    category: "مذاقات محلية",
    duration: "٣ ساعات",
    price: "٨٦ $",
    rating: "٤٫٩٨",
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1000&q=85",
    description:
      "اكتشف وصفات عائلية في التلال المطلة على بوسيتانو، ثم استمتع بغداء هادئ تحت أشجار الليمون.",
  },
  {
    title: "دروب الطوقي",
    place: "لشبونة، البرتغال",
    category: "حياة أهل المكان",
    duration: "ساعتان ونصف",
    price: "٥٤ $",
    rating: "٤٫٩٦",
    image:
      "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1000&q=85",
    description:
      "اركب أول ترام مع أحد أبناء لشبونة، وتوقف لتذوق الباستيل الدافئ وسماع الحكايات في أزقة ألفاما القديمة.",
  },
  {
    title: "بين النجوم",
    place: "باروس، اليونان",
    category: "في الهواء الطلق",
    duration: "٤ ساعات",
    price: "١١٢ $",
    rating: "٥٫٠٠",
    image:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=85",
    description:
      "انطلق بقارب شراعي صغير نحو خلجان خفية ومياه صافية، بصحبة ربان محلي يعرف البحر جيدًا.",
  },
  {
    title: "محقق الصحراء",
    place: "مراكش، المغرب",
    category: "حِرف وتعلّم",
    duration: "ساعتان",
    price: "٦٨ $",
    rating: "٤٫٩٥",
    image:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1000&q=85",
    description:
      "اقضِ ظهيرة هادئة في ورشة فخار من الحي، وتعرّف على أسرار الدولاب بينما تحتسي الشاي بالنعناع.",
  },
  {
    title: "دروب",
    place: "فاس، المغرب",
    category: "حياة أهل المكان",
    duration: "٣ ساعات",
    price: "٥٩ $",
    rating: "٤٫٩٧",
    image:
      "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=1000&q=85",
    description:
      "تجوّل في دروب المدينة القديمة بصحبة دليل محلي، وتعرّف على الحرفيين والحكايات التي تحفظ ذاكرة المكان.",
  },
  {
    title: "رحلة الضباب والغروب",
    place: "ماديرا، البرتغال",
    category: "في الهواء الطلق",
    duration: "٥ ساعات",
    price: "٩٤ $",
    rating: "٤٫٩٩",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=85",
    description:
      "اتبع مسارات ليفادا القديمة بين الغابات والقمم، مع توقفات صغيرة يختارها مرشد يعرف الجزيرة جيدًا.",
  },
  {
    title: "العبير الجبلي",
    place: "الطائف، السعودية",
    category: "في الهواء الطلق",
    duration: "يوم واحد",
    price: "١٬٧٥٨ ر.س",
    rating: "جديد",
    image: "https://media.zid.store/cdn-cgi/image/fit=scale-down,width=500,height=500/https://media.zid.store/363e0d99-c213-4b25-93d5-969bc8ed3239/ef05e738-4efb-4074-826e-b0b153f76e55.png",
    description: "من حافة الغيم والقمم الشاهقة، اكتشف مدينة الطائف كما لم تعهدها من قبل، واستمتع بجوها البارد وروحها الحجازية الأصيلة، في رحلة يوم واحد، تُعيد لك هدوءك وصفاء ذهنك.",
  },
  {
    title: "رحلة الأصدقاء",
    place: "أبها، السعودية",
    category: "في الهواء الطلق",
    duration: "٣ أيام وليلتان",
    price: "٧٬١٩٦ ر.س",
    rating: "جديد",
    image: "https://media.zid.store/cdn-cgi/image/fit=scale-down,width=500,height=500/https://media.zid.store/363e0d99-c213-4b25-93d5-969bc8ed3239/cd990293-6ca9-4647-ab7f-9075b0d2724e.png",
    description: "اهرب من حرارة الصيف إلى الأجواء الباردة، واستمتع بقمم عسير الغارقة في الضباب، في رحلة اقتصادية صُنعت خصيصًا من أجلك، على مدار 3 أيام وليلتين بمدينة أبها، ساحرة الجنوب.",
  },
];

const categories = ["كل التجارب", "مذاقات محلية", "في الهواء الطلق", "حياة أهل المكان", "حِرف وتعلّم"];
const destinations = [
  {
    title: "الرياض",
    image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "جدة",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "ينبع",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "العلا",
    image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1000&q=85",
  },
];
type Experience = (typeof experiences)[number] & { bookingUrl?: string; suggested?: boolean };

export default function Home() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("كل التجارب");
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup" | null>(null);
  const [authMessage, setAuthMessage] = useState("");
  const carouselRef = useRef<HTMLDivElement>(null);

  const openAuth = (mode: "login" | "signup") => {
    setMenuOpen(false);
    setAuthMessage("");
    setAuthMode(mode);
  };

  const filteredExperiences = experiences.filter((experience) => {
    const matchesCategory = category === "كل التجارب" || experience.category === category;
    const searchText = `${experience.title} ${experience.place} ${experience.category}`.toLowerCase();
    return matchesCategory && searchText.includes(query.trim().toLowerCase());
  });

  return (
    <main>
      <section className="hero" id="top">
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=2400&q=90"
          aria-hidden="true"
        >
          <source
            src="https://cdn.pixabay.com/video/2024/01/23/197898-905833761_large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="hero-shade" />
        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="مكان آخر، الصفحة الرئيسية">
            مكان آخر<span className="wordmark-dot">.</span>
          </a>
          <nav className="main-nav" aria-label="التنقل الرئيسي">
            <a href="#destinations">الوجهات</a>
            <a href="#experiences">التجارب</a>
            <a href="#about">نبذة عنا</a>
          </nav>
          <div className="header-menu">
            <button
              className="menu-toggle"
              type="button"
              aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
              aria-expanded={menuOpen}
              aria-controls="site-menu-panel"
              onClick={() => setMenuOpen((isOpen) => !isOpen)}
            >
              {menuOpen ? (
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg>
              ) : (
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
              )}
            </button>
            {menuOpen && (
              <div className="menu-panel" id="site-menu-panel">
                <nav aria-label="روابط الموقع">
                  <a href="#destinations" onClick={() => setMenuOpen(false)}>الوجهات</a>
                  <a href="#experiences" onClick={() => setMenuOpen(false)}>التجارب</a>
                  <a href="#about" onClick={() => setMenuOpen(false)}>نبذة عنا</a>
                </nav>
                <div className="mobile-auth-actions">
                  <button type="button" onClick={() => openAuth("login")}>تسجيل الدخول</button>
                  <button type="button" onClick={() => openAuth("signup")}>إنشاء حساب</button>
                </div>
              </div>
            )}
          </div>
        </header>

        <div className="hero-content">
          <h1>غيّر جوّك.<br />وعِش التجربة.</h1>
          <a className="hero-cta" href="#experiences">
            اكتشف التجارب <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div className="hero-index"><span>٠١</span> / ٠٤</div>
      </section>

      <section className="discovery section-wrap" id="experiences">
        <div className="section-heading">
          <div>
            <p className="eyebrow dark-eyebrow">بداية الحكاية</p>
            <h2>حكايات، لا محطات عابرة.</h2>
          </div>
          <p className="section-intro">
            اكتشف المكان بصحبة من يعرفونه حق المعرفة.<br />عُد بذكريات تتجاوز الصور.
          </p>
        </div>

        <div className="discovery-tools">
          <div className="category-list" aria-label="تصفية التجارب حسب الفئة">
            {categories.map((item) => (
              <button
                className={`category-button${category === item ? " is-active" : ""}`}
                key={item}
                onClick={() => setCategory(item)}
                type="button"
                aria-pressed={category === item}
              >
                {item}
              </button>
            ))}
          </div>
          <label className="search-box">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="10.8" cy="10.8" r="6.8" />
              <path d="m16 16 4.2 4.2" />
            </svg>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="ابحث عن مكان أو تجربة"
              aria-label="ابحث عن التجارب"
            />
          </label>
        </div>

        {filteredExperiences.length > 0 ? (
          <div className="experience-carousel-wrap">
          <div className="experience-grid" ref={carouselRef} aria-label="تجارب مقترحة">
            {filteredExperiences.map((experience, index) => (
              <article className="experience-card" key={experience.title}>
                <button
                  className="experience-open"
                  type="button"
                  onClick={() => setSelectedExperience(experience)}
                  aria-label={`اكتشف ${experience.title} في ${experience.place}`}
                >
                  <span
                    className={`experience-image image-${index + 1}`}
                    style={{ backgroundImage: `url("${experience.image}")` }}
                  >
                    <span className="image-category">{experience.category}</span>
                    <span className="experience-details">
                      <span className="experience-place">{experience.place}</span>
                      <span className="experience-title">{experience.title}</span>
                      <span className="experience-meta">{experience.duration} <span>·</span> ابتداءً من {experience.price} للشخص</span>
                      <span className="experience-rating"><span aria-hidden="true">★</span> {experience.rating}</span>
                    </span>
                  </span>
                </button>
              </article>
            ))}
          </div>
          {filteredExperiences.length > 1 && (
            <button
              className="carousel-next"
              type="button"
              aria-label="عرض تجارب أخرى"
              onClick={() => carouselRef.current?.scrollBy({ left: -carouselRef.current.clientWidth * 0.75, behavior: "smooth" })}
            >
              <span aria-hidden="true">←</span>
            </button>
          )}
          </div>
        ) : (
          <div className="empty-state">
            <p>لم نعثر على تجارب مطابقة.</p>
            <button type="button" onClick={() => { setQuery(""); setCategory("كل التجارب"); }}>
              إزالة عوامل التصفية
            </button>
          </div>
        )}
      </section>

      <section className="destinations-section" id="destinations">
        <div className="destinations-heading section-wrap">
          <h2>وين ودّك تكون؟</h2>
          <p>الرياض، جدة، ينبع أو العلا — اختر مدينتك واكتشف أجواءها</p>
        </div>
        <div className="destination-track" aria-label="وجهات التجارب السياحية">
          {destinations.map((destination) => (
            <article className="destination-card" key={destination.title}>
              <div
                className="destination-card-image"
                role="img"
                aria-label={destination.title}
                style={{ backgroundImage: `url("${destination.image}")` }}
              />
              <div className="destination-card-copy">
                <h3>{destination.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="city-sections">
        {cityExperiences.map((city) => (
          <section className="city-section" id={`city-${city.id}`} key={city.id} aria-labelledby={`city-heading-${city.id}`}>
            <div className="section-heading city-heading">
              <div>
                <p className="eyebrow dark-eyebrow">اكتشف المدينة</p>
                <h2 id={`city-heading-${city.id}`}>تجارب {city.city}</h2>
              </div>
            </div>
            <div className="city-experience-grid">
              {city.experiences.map((experience) => (
                <article className="city-experience-card" key={experience.title}>
                  <div className="city-experience-image" style={{ backgroundImage: `url("${experience.image}")` }}>
                    <span className="image-category">{experience.suggested ? "تجربة مقترحة" : experience.category}</span>
                  </div>
                  <div className="city-experience-copy">
                    <p className="city-experience-place">{experience.place}</p>
                    <h3>{experience.title}</h3>
                    <p className="city-experience-description">{experience.description}</p>
                    <dl className="city-experience-facts">
                      <div><dt>المدة</dt><dd>{experience.duration}</dd></div>
                      <div><dt>السعر</dt><dd>{experience.price}</dd></div>
                    </dl>
                  </div>
                  <button className="city-card-open" type="button" onClick={() => setSelectedExperience(experience)} aria-label={`عرض تفاصيل ${experience.title} في ${experience.place}`} />
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand" id="about">
            <a className="wordmark footer-wordmark" href="#top">مكان آخر<span className="wordmark-dot">.</span></a>
            <p>تجارب محلية صغيرة، وذكريات كبيرة تأخذها معك.</p>
          </div>
          <nav className="footer-column" aria-label="استكشف الموقع">
            <h2>اكتشف</h2>
            <a href="#destinations">الوجهات</a>
            <a href="#experiences">كل التجارب</a>
          </nav>
          <nav className="footer-column" aria-label="تجارب الموسم">
            <h2>عِش اللحظة</h2>
            <a href="#top">ابدأ رحلتك</a>
          </nav>
          <div className="footer-column footer-contact">
            <h2>نخططها سوا؟</h2>
            <a href="mailto:hello@elsewhere.travel">hello@elsewhere.travel <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© مكان آخر. كل رحلة تبدأ بحكاية.</p>
          <a href="#top">العودة للأعلى <span aria-hidden="true">↑</span></a>
        </div>
      </footer>

      {selectedExperience && (
        <div className="dialog-backdrop" onClick={() => setSelectedExperience(null)}>
          <section
            className="experience-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="dialog-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div
              className="dialog-image"
              style={{ backgroundImage: `url("${selectedExperience.image}")` }}
            />
            <button
              className="dialog-close"
              type="button"
              aria-label="إغلاق تفاصيل التجربة"
              onClick={() => setSelectedExperience(null)}
            >
              ×
            </button>
            <div className="dialog-copy">
              <p className="eyebrow dark-eyebrow">{selectedExperience.place} · {selectedExperience.duration}</p>
              <h2 id="dialog-title">{selectedExperience.title}</h2>
              <p>{selectedExperience.description}</p>
              <div className="dialog-bottom">
                <span>{selectedExperience.suggested ? "السعر " : "ابتداءً من "}<strong>{selectedExperience.price}</strong></span>
                <a href={selectedExperience.bookingUrl ?? "mailto:hello@elsewhere.travel?subject=Plan%20an%20experience"}>{selectedExperience.bookingUrl ? "التفاصيل والحجز" : "استفسر عن المواعيد"} <span aria-hidden="true">↗</span></a>
              </div>
            </div>
          </section>
        </div>
      )}

      {authMode && (
        <div className="dialog-backdrop" onClick={() => setAuthMode(null)}>
          <section
            className="auth-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="auth-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="dialog-close"
              type="button"
              aria-label="إغلاق نافذة الحساب"
              onClick={() => setAuthMode(null)}
            >
              ×
            </button>
            <a className="wordmark auth-wordmark" href="#top" onClick={() => setAuthMode(null)}>
              مكان آخر<span className="wordmark-dot">.</span>
            </a>
            <h2 id="auth-title">{authMode === "login" ? "أهلًا بعودتك" : "انضم إلى مكان آخر"}</h2>
            <p className="auth-intro">{authMode === "login" ? "سجّل دخولك لمتابعة رحلاتك." : "أنشئ حسابًا وابدأ باكتشاف تجارب جديدة."}</p>
            <form onSubmit={(event) => { event.preventDefault(); setAuthMessage("خدمة الحسابات غير مفعّلة بعد."); }}>
              {authMode === "signup" && (
                <label>
                  الاسم
                  <input type="text" name="name" autoComplete="name" required />
                </label>
              )}
              <label>
                البريد الإلكتروني
                <input type="email" name="email" autoComplete="email" required />
              </label>
              <label>
                كلمة المرور
                <input type="password" name="password" autoComplete={authMode === "login" ? "current-password" : "new-password"} required />
              </label>
              {authMessage && <p className="auth-message" role="status">{authMessage}</p>}
              <button className="auth-submit" type="submit">
                {authMode === "login" ? "تسجيل الدخول" : "إنشاء حساب"}
              </button>
            </form>
            <button
              className="auth-switch"
              type="button"
              onClick={() => openAuth(authMode === "login" ? "signup" : "login")}
            >
              {authMode === "login" ? "ليس لديك حساب؟ أنشئ حسابًا" : "لديك حساب؟ سجّل الدخول"}
            </button>
          </section>
        </div>
      )}
    </main>
  );
}
