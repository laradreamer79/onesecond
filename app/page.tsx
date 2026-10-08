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

const categories = ["كل التجارب", "خيل", "دراجات", "الجبل", "المخيم", "يوغا", "البجي", "الطبيعة"];
const destinations = [
  {
    title: "الرياض",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/20/Riyadh_Skyline.jpg/960px-Riyadh_Skyline.jpg",
  },
  {
    title: "جدة",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Jpg_%D8%AC%D8%AF%D8%A9_%D8%A7%D9%84%D8%AA%D8%A7%D8%B1%D9%8A%D8%AE%D9%8A%D8%A9.jpg",
  },
  {
    title: "ينبع",
    image: "https://images.pexels.com/photos/8535139/pexels-photo-8535139.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "العلا",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f6/Elephant_rock%2C_Al-%27Ula_%282024%29.jpg/960px-Elephant_rock%2C_Al-%27Ula_%282024%29.jpg",
  },
  ...cityExperiences.filter((city) => ["asir", "taif", "al-bahah", "jazan"].includes(city.id)).map((city) => ({
    title: city.city,
    image: city.id === "taif"
      ? "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c7/الطائف_من_جبل_الهدى2.jpg/960px-الطائف_من_جبل_الهدى2.jpg"
      : city.id === "jazan"
        ? "https://images.pexels.com/photos/34444561/pexels-photo-34444561.jpeg?auto=compress&cs=tinysrgb&w=800"
        : city.id === "asir"
          ? "https://upload.wikimedia.org/wikipedia/commons/8/87/الحبلة_منطقة_عسير.jpg"
          : city.id === "al-bahah"
            ? "https://images.pexels.com/photos/18547390/pexels-photo-18547390.jpeg?auto=compress&cs=tinysrgb&w=800"
            : city.experiences[0]?.image ?? "",
  })),
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("كل التجارب");
  return (
    <main className="static-preview">
      <section className="hero" id="top">
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source
            src="https://cdn.pixabay.com/video/2024/01/23/197898-905833761_large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="hero-shade" />
        <header className="site-header">
          <span className="wordmark" aria-label="ون سكند، الصفحة الرئيسية">
            <Image className="brand-logo" src="/1seclogo.jpeg" alt="ون سكند" width={56} height={56} preload />
          </span>
          <nav className="main-nav" aria-label="التنقل الرئيسي">
            <span>الوجهات</span>
            <span>التجارب</span>
            <span>نبذة عنا</span>
          </nav>
          <div className="header-menu">
            <span className="menu-toggle" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
            </span>
          </div>
        </header>

        <div className="hero-content">
          <h1>غيّر جوّك.<br />وعِش التجربة.</h1>
          <span className="hero-cta">
            اكتشف التجارب
          </span>
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
          <div className="category-list" aria-label="أنواع التجارب">
            {categories.map((item) => (
              <button type="button" className={`category-button${item === selectedCategory ? " is-active" : ""}`} key={item} onClick={() => setSelectedCategory(item)} aria-pressed={item === selectedCategory}>
                {item}
              </button>
            ))}
          </div>
        </div>

          <div className="experience-carousel-wrap">
          <div className="experience-grid" aria-label="تجارب مقترحة">
            {experiences.map((experience, index) => (
              <article className="experience-card" key={experience.title}>
                <div className="experience-open">
                  <span
                    className={`experience-image image-${index + 1}`}
                    style={{ backgroundImage: `url("${experience.image}")` }}
                  >
                    {experience.video && (
                      <video className="experience-video" src={experience.video} poster={experience.image} autoPlay muted loop playsInline preload="metadata" aria-hidden="true" />
                    )}
                    <span className="experience-details">
                      <span className="experience-title">{experience.title}</span>
                    </span>
                  </span>
                </div>
              </article>
            ))}
          </div>
          </div>
      </section>

      <section className="destinations-section" id="destinations">
        <div className="destinations-heading section-wrap">
          <h2>وين بتكون مغامرتك الجاية؟</h2>
          <p>اختر وجهتك واكتشف تجارب الرياض، جدة، ينبع، العلا، عسير، الطائف، الباحة وجازان</p>
        </div>
        <div className="destination-track" aria-label="وجهات التجارب السياحية">
          {destinations.map((destination) => (
            <span
              className="destination-card"
              key={destination.title}
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
            </span>
          ))}
        </div>
      </section>

      <div className="city-sections">
        {cityExperiences.map((city) => (
          <section className="city-section" id={`city-${city.id}`} key={city.id} aria-labelledby={`city-heading-${city.id}`}>
            <div className="section-heading city-heading">
              <div>
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
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand" id="about">
            <span className="wordmark footer-wordmark"><Image className="brand-logo" src="/1seclogo.jpeg" alt="ون سكند" width={56} height={56} /></span>
            <p>تجارب محلية صغيرة، وذكريات كبيرة تأخذها معك.</p>
          </div>
          <nav className="footer-column" aria-label="استكشف الموقع">
            <h2>اكتشف</h2>
            <span>الوجهات</span>
            <span>كل التجارب</span>
          </nav>
          <nav className="footer-column" aria-label="تجارب الموسم">
            <h2>عِش اللحظة</h2>
            <span>ابدأ رحلتك</span>
          </nav>
          <div className="footer-column footer-contact">
            <h2>نخططها سوا؟</h2>
            <span>hello@elsewhere.travel</span>
          </div>
        </div>
        <div className="footer-bottom">
          <p>صورة عسير: <span>Fayza fafa (https://commons.wikimedia.org/wiki/File:الحبلة_منطقة_عسير.jpg)</span> · <span>CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/)</span> · اقتصاص للعرض</p>
          <p>صورة العلا: <span>وكالة الأنباء السعودية (واس) (https://commons.wikimedia.org/wiki/File:Elephant_rock,_Al-%27Ula_(2024).jpg)</span> · <span>CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/)</span> · اقتصاص للعرض</p>
          <p>صورة الطائف: <span>عباد ديرانية (https://commons.wikimedia.org/wiki/File:الطائف_من_جبل_الهدى2.jpg)</span> · <span>CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0/)</span> · اقتصاص للعرض</p>
          <p>صورة الرياض: <span>B.alotaby (https://commons.wikimedia.org/wiki/File:Riyadh_Skyline.jpg)</span> · <span>CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/)</span> · اقتصاص للعرض</p>
          <p>© مكان آخر. كل رحلة تبدأ بحكاية.</p>
          <span>العودة للأعلى</span>
        </div>
      </footer>

    </main>
  );
}
