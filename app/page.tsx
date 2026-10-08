"use client";

import { useState } from "react";
import Image from "next/image";
import cityExperiences from "./data/city-experiences.json";

type Experience = (typeof cityExperiences)[number]["experiences"][number] & { video?: string; bookingUrl?: string };
const experiences: Experience[] = [
  {
    title: "ركوب الخيل",
    place: "الرياض، السعودية",
    category: "في الهواء الطلق",
    duration: "تُحدد عند الحجز",
    price: "عند الطلب",
    rating: "مقترحة",
    suggested: true,
    image: "https://images.pexels.com/videos/8624885/adult-agriculture-animal-cavalry-8624885.jpeg?auto=compress&w=800",
    video: "https://videos.pexels.com/video-files/8624885/8624885-hd_1920_1080_30fps.mp4",
    description: "تجربة مقترحة لركوب الخيل في الهواء الطلق والاستمتاع بأجواء الطبيعة. تُحدد المدة والسعر عند الاستفسار عن الحجز.",
  },
  {
    title: "رحلة دراجات",
    place: "الرياض، السعودية",
    category: "في الهواء الطلق",
    duration: "تُحدد عند الحجز",
    price: "عند الطلب",
    rating: "مقترحة",
    suggested: true,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=85",
    video: "https://videos.pexels.com/video-files/5789981/5789981-hd_1920_1080_30fps.mp4",
    description: "تجربة مقترحة لرحلة دراجات في الهواء الطلق، تجمع الحركة والاستكشاف والاستمتاع بالطبيعة. تُحدد المدة والسعر عند الاستفسار عن الحجز.",
  },
  ...cityExperiences.flatMap((city) => city.experiences),
];

const activityFilters = [
  { label: "خيل", pattern: /خيل|فروسية/ },
  { label: "دراجات", pattern: /دراجات/ },
  { label: "الجبل", pattern: /جبل|جبال|قمم|قمة|هايكنج|مرتفعات/ },
  { label: "المخيم", pattern: /مخيم|تخييم|صحرا|الصحراء/ },
  { label: "يوغا", pattern: /يوغا|يوجا/ },
  { label: "البجي", pattern: /بجي|باجي|buggy/i },
  { label: "الطبيعة", pattern: /طبيع|غابات|ريف|شاطئ|البحر|مزارع|قطاف/ },
];
const categories = ["كل التجارب", ...activityFilters.map((filter) => filter.label)];
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
  ...cityExperiences.filter((city) => ["asir", "taif", "al-bahah", "jazan"].includes(city.id)).map((city) => ({
    title: city.city,
    image: city.experiences[0]?.image ?? "",
  })),
];

export default function Home() {
  const [category, setCategory] = useState("كل التجارب");
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup" | null>(null);
  const [authMessage, setAuthMessage] = useState("");

  const openAuth = (mode: "login" | "signup") => {
    setMenuOpen(false);
    setAuthMessage("");
    setAuthMode(mode);
  };

  const activeFilter = activityFilters.find((filter) => filter.label === category);
  const filteredExperiences = experiences.filter((experience) =>
    !activeFilter || activeFilter.pattern.test(`${experience.title} ${experience.description}`)
  );

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
          <a className="wordmark" href="#top" aria-label="ون سكند، الصفحة الرئيسية">
            <Image className="brand-logo" src="/1seclogo.jpeg" alt="ون سكند" width={56} height={56} preload />
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
            اكتشف التجارب
          </a>
        </div>

        <div className="hero-index"><span>٠١</span> / ٠٤</div>
      </section>

      <section className="discovery section-wrap" id="experiences">
        <div className="section-heading">
          <div>
            <h2>حكايات، لا محطات عابرة.</h2>
          </div>
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
        </div>

        {filteredExperiences.length > 0 ? (
          <div className="experience-carousel-wrap">
          <div className="experience-grid" aria-label="تجارب مقترحة">
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
                    {experience.video && (
                      <video className="experience-video" src={experience.video} poster={experience.image} autoPlay muted loop playsInline preload="metadata" aria-hidden="true" />
                    )}
                    <span className="experience-details">
                      <span className="experience-place">{experience.place}</span>
                      <span className="experience-title">{experience.title}</span>
                      <span className="experience-meta">{experience.duration} <span>·</span> {experience.suggested ? `السعر ${experience.price}` : `ابتداءً من ${experience.price} للشخص`}</span>
                      <span className="experience-rating"><span aria-hidden="true">★</span> {experience.rating}</span>
                    </span>
                  </span>
                </button>
              </article>
            ))}
          </div>
          </div>
        ) : (
          <div className="empty-state">
            <p>لم نعثر على تجارب مطابقة.</p>
            <button type="button" onClick={() => setCategory("كل التجارب")}>
              إزالة عوامل التصفية
            </button>
          </div>
        )}
      </section>

      <section className="destinations-section" id="destinations">
        <div className="destinations-heading section-wrap">
          <h2>وين ودّك تكون؟</h2>
          <p>اختر وجهتك واكتشف تجارب الرياض، جدة، ينبع، العلا، عسير، الطائف، الباحة وجازان</p>
        </div>
        <div className="destination-track" aria-label="وجهات التجارب السياحية">
          {destinations.map((destination) => (
            <a
              className="destination-card"
              key={destination.title}
              href={`#city-${cityExperiences.find((city) => city.city === destination.title)?.id}`}
              aria-label={`اكتشف ${destination.title}`}
            >
              <div
                className="destination-card-image"
                role="img"
                aria-label={destination.title}
                style={{ backgroundImage: `url("${destination.image}")` }}
              />
              <div className="destination-card-copy">
                <h3>{destination.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </section>

      <div className="city-sections">
        {cityExperiences.map((city) => (
          <section className="city-section" id={`city-${city.id}`} key={city.id} aria-labelledby={`city-heading-${city.id}`}>
            <div className="section-heading city-heading">
              <div>
                <p className="eyebrow dark-eyebrow">اكتشف المدينة</p>
                <h2 id={`city-heading-${city.id}`}>{city.city}</h2>
              </div>
            </div>
            <div className="city-experience-grid">
              {city.experiences.map((experience) => (
                <article className="city-experience-card" key={experience.title}>
                  <div className="city-experience-image" style={{ backgroundImage: `url("${experience.image}")` }} />
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
            <a className="wordmark footer-wordmark" href="#top"><Image className="brand-logo" src="/1seclogo.jpeg" alt="ون سكند" width={56} height={56} /></a>
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
            <a href="mailto:hello@elsewhere.travel">hello@elsewhere.travel</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© مكان آخر. كل رحلة تبدأ بحكاية.</p>
          <a href="#top">العودة للأعلى</a>
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
                <a href={selectedExperience.bookingUrl ?? "mailto:hello@elsewhere.travel?subject=Plan%20an%20experience"}>{selectedExperience.bookingUrl ? "التفاصيل والحجز" : "استفسر عن المواعيد"}</a>
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
              <Image className="brand-logo" src="/1seclogo.jpeg" alt="ون سكند" width={56} height={56} />
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
