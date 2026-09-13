import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";

import heroImage from "./IMG_0660.jpeg";

import fadeImage from "./IMG_0671.jpeg";
import modernFadeImage from "./IMG_0672.jpeg";
import mulletImage from "./IMG_0673.jpeg";
import midlineImage from "./IMG_0674.jpeg";
import wolfImage from "./IMG_0675.jpeg";
import modCutImage from "./IMG_0677.jpeg";

import fullBeardImage from "./IMG_0681.jpeg";
import fadeBeardImage from "./IMG_0682.jpeg";
import goateeBeardImage from "./IMG_0683.jpeg";
import cleanShaveImage from "./IMG_0684.jpeg";

const WHATSAPP_NUMBER = "919310151087";

const services = [
  {
    title: "Haircut",
    price: "₹399",
    description: "Precision cuts crafted for a sharp, modern look.",
    image:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Beard Trim",
    price: "₹249",
    description: "Clean lines and perfect shape for a stronger presence.",
    image:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Hair Styling",
    price: "₹299",
    description: "Modern styling designed around your personality.",
    image:
      "https://images.unsplash.com/photo-1599351431202-1e0f0d1a7e8e?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Hair Wash",
    price: "₹199",
    description:
      "Refresh, cleanse and prepare your hair for the perfect finish.",
    image:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Premium Care",
    price: "₹699",
    description:
      "A complete grooming experience using premium products.",
    image:
      "https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?auto=format&fit=crop&w=900&q=85",
  },
];

const gallery = [
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1512690459411-b9245aed614b?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=85",
];

const reviews = [
  {
    name: "Arjun",
    text:
      "Best haircut I've had in a long time. The attention to detail is insane.",
  },
  {
    name: "Rahul",
    text:
      "Clean space, great vibe and the barber actually understands the style you want.",
  },
  {
    name: "Karan",
    text:
      "Premium experience without the unnecessary attitude. Definitely coming back.",
  },
];

const haircutStyles = [
  {
    number: "01",
    name: "Fade",
    price: "₹200",
    description:
      "Clean, classic and timeless. A sharp fade designed for a fresh everyday look.",
    image: fadeImage,
  },
  {
    number: "02",
    name: "Modern Fade",
    price: "₹300",
    description:
      "A sharper contemporary fade with texture, movement and a modern finish.",
    image: modernFadeImage,
  },
  {
    number: "03",
    name: "Mullet",
    price: "₹400",
    description:
      "Retro inspired with a modern execution. Bold, expressive and made to stand out.",
    image: mulletImage,
  },
  {
    number: "04",
    name: "Midline",
    price: "₹350",
    description:
      "Balanced, clean and effortlessly stylish. A modern everyday hairstyle.",
    image: midlineImage,
  },
  {
    number: "05",
    name: "Wolf",
    price: "₹500",
    description:
      "Textured layers, natural volume and a bold edge. Made for trendsetters.",
    image: wolfImage,
  },
  {
    number: "06",
    name: "Mod Cut",
    price: "₹450",
    description:
      "A modern classic with clean lines and natural texture. Simple yet sharp.",
    image: modCutImage,
  },
];

const beardStyles = [
  {
    number: "01",
    name: "Full Beard",
    price: "₹299",
    description:
      "A strong, full beard with clean edges and a naturally powerful finish.",
    image: fullBeardImage,
  },
  {
    number: "02",
    name: "Fade Beard",
    price: "₹349",
    description:
      "Sharp cheek lines with a smooth fade for a clean and modern beard profile.",
    image: fadeBeardImage,
  },
  {
    number: "03",
    name: "Goatee Beard",
    price: "₹249",
    description:
      "Defined moustache and chin detailing for a sharp, minimal and confident look.",
    image: goateeBeardImage,
  },
  {
    number: "04",
    name: "Clean Shave",
    price: "₹199",
    description:
      "A completely clean finish with smooth detailing for a fresh, refined look.",
    image: cleanShaveImage,
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [selectedService, setSelectedService] = useState("Haircut");

  const [currentPage, setCurrentPage] = useState<
    "home" | "haircuts" | "beards"
  >("home");

  const [selectedHaircut, setSelectedHaircut] = useState("");
  const [selectedBeard, setSelectedBeard] = useState("");

  const selectedHaircutData = haircutStyles.find(
    (style) => style.name === selectedHaircut
  );

  const selectedBeardData = beardStyles.find(
    (style) => style.name === selectedBeard
  );

  const scrollTo = (id: string) => {
    setCurrentPage("home");

    setTimeout(() => {
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: "smooth" });
    }, 50);

    setMenuOpen(false);
  };

  const openHaircuts = () => {
    setCurrentPage("haircuts");
    setMenuOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const openBeards = () => {
    setCurrentPage("beards");
    setMenuOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const goHome = () => {
    setCurrentPage("home");

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 50);
  };

  const selectHaircut = (style: string) => {
    setSelectedHaircut(style);
    setSelectedBeard("");
    setSelectedService("Haircut");
  };

  const selectBeard = (style: string) => {
    setSelectedBeard(style);
    setSelectedHaircut("");
    setSelectedService("Beard Trim");
  };

  const handleServiceChange = (service: string) => {
    setSelectedService(service);

    if (service !== "Haircut") {
      setSelectedHaircut("");
    }

    if (service !== "Beard Trim") {
      setSelectedBeard("");
    }
  };

  const continueToBooking = () => {
    setCurrentPage("home");

    setTimeout(() => {
      document
        .getElementById("booking")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const bookAppointment = (e?: FormEvent) => {
    e?.preventDefault();

    let message =
      `*NEW APPOINTMENT REQUEST*\n\n` +
      `Service: ${selectedService}\n`;

    if (selectedService === "Haircut") {
      message +=
        `Haircut Style: ${
          selectedHaircut || "Not selected"
        }\n`;

      if (selectedHaircutData) {
        message += `Price: ${selectedHaircutData.price}\n`;
      }
    }

    if (selectedService === "Beard Trim") {
      message +=
        `Beard Style: ${
          selectedBeard || "Not selected"
        }\n`;

      if (selectedBeardData) {
        message += `Price: ${selectedBeardData.price}\n`;
      }
    }

    message +=
      `Date: ${date || "Not selected"}\n` +
      `Time: ${time || "Not selected"}\n\n` +
      `I would like to book an appointment.`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  };

  if (currentPage === "haircuts") {
    return (
      <HaircutsPage
        selectedHaircut={selectedHaircut}
        onBack={goHome}
        onSelect={selectHaircut}
        onBook={continueToBooking}
      />
    );
  }

  if (currentPage === "beards") {
    return (
      <BeardsPage
        selectedBeard={selectedBeard}
        onBack={goHome}
        onSelect={selectBeard}
        onBook={continueToBooking}
      />
    );
  }

  return (
    <main>
      <header className="navbar">
        <div className="nav-inner">
          <button
            className="logo"
            onClick={() => scrollTo("home")}
          >
            THE CUT
            <span>MEN'S HAIR ARTIST</span>
          </button>

          <nav
            className={
              menuOpen ? "nav-links open" : "nav-links"
            }
          >
            <button onClick={() => scrollTo("home")}>
              Home
            </button>

            <button onClick={() => scrollTo("services")}>
              Services
            </button>

            <button onClick={() => scrollTo("about")}>
              About
            </button>

            <button onClick={() => scrollTo("gallery")}>
              Gallery
            </button>

            <button onClick={() => scrollTo("contact")}>
              Contact
            </button>
          </nav>

          <button
            className="nav-book"
            onClick={() => scrollTo("booking")}
          >
            <span>□</span>
            Book Appointment
          </button>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>
      </header>

      <section id="home" className="hero">
        <img
          className="hero-bg"
          src={heroImage}
          alt="Men's haircut"
        />

        <div className="hero-overlay" />

        <div className="hero-content">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="eyebrow">
              MORE THAN A HAIRCUT
            </p>

            <h1>
              Premium Cuts,
              <br />
              <span>Modern Style.</span>
            </h1>

            <p className="hero-description">
              Expert haircuts, clean fades, and
              personalized grooming — designed for
              the modern man.
            </p>

            <div className="hero-features">
              <div>
                <strong>✂</strong>
                <span>
                  Expert
                  <br />
                  Barbers
                </span>
              </div>

              <div>
                <strong>☆</strong>
                <span>
                  Premium
                  <br />
                  Products
                </span>
              </div>

              <div>
                <strong>✓</strong>
                <span>
                  Clean &
                  <br />
                  Safe
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="booking-glass"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
          >
            <div className="glass-top">
              <p className="eyebrow">
                BOOK APPOINTMENT
              </p>

              <button
                onClick={() => scrollTo("home")}
              >
                ×
              </button>
            </div>

            <h2>
              Your Next Look
              <br />
              Is Just a Click Away.
            </h2>

            <div className="glass-field">
              <span>□</span>

              <input
                type="date"
                value={date}
                onChange={(e) =>
                  setDate(e.target.value)
                }
              />

              <b>›</b>
            </div>

            <div className="glass-field">
              <span>◷</span>

              <input
                type="time"
                value={time}
                onChange={(e) =>
                  setTime(e.target.value)
                }
              />

              <b>›</b>
            </div>

            <button
              className="glass-book"
              onClick={() => bookAppointment()}
            >
              Book Now
              <span>→</span>
            </button>
          </motion.div>
        </div>
      </section>

      <section
        id="services"
        className="section services-section"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              OUR SERVICES
            </p>

            <h2>Premium Grooming Services</h2>
          </div>

          <div className="heading-note">
            <span />
            Tailored for your style
          </div>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.article
              className="service-card"
              key={service.title}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.08,
              }}
              onClick={() => {
                if (service.title === "Haircut") {
                  openHaircuts();
                } else if (
                  service.title === "Beard Trim"
                ) {
                  openBeards();
                } else {
                  setSelectedService(
                    service.title
                  );
                }
              }}
            >
              <div className="service-image">
                <img
                  src={service.image}
                  alt={service.title}
                />
              </div>

              <div className="service-info">
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>

                <div className="service-bottom">
                  <strong>
                    {service.price}
                  </strong>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();

                      if (
                        service.title ===
                        "Haircut"
                      ) {
                        openHaircuts();
                      } else if (
                        service.title ===
                        "Beard Trim"
                      ) {
                        openBeards();
                      } else {
                        setSelectedService(
                          service.title
                        );
                      }
                    }}
                  >
                    →
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section
        id="about"
        className="statement-section"
      >
        <div className="statement-image">
          <img
            src="https://images.unsplash.com/photo-1512690459411-b9245aed614b?auto=format&fit=crop&w=1600&q=85"
            alt="Barber shop"
          />
        </div>

        <div className="statement-content">
          <p className="eyebrow">THE CUT</p>

          <h2>
            Style Is a Form
            <br />
            of Self Respect.
          </h2>

          <p>
            We're not just cutting hair,
            we're building confidence.
            Step in, relax, and let our experts
            take care of the rest.
          </p>

          <button
            className="outline-button"
            onClick={() =>
              scrollTo("booking")
            }
          >
            Book Your Experience →
          </button>
        </div>
      </section>

      <section
        id="gallery"
        className="section gallery-section"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              SELECTED WORK
            </p>

            <h2>
              Crafted With Precision.
            </h2>
          </div>
        </div>

        <div className="gallery-grid">
          {gallery.map((image, index) => (
            <motion.div
              className={`gallery-item gallery-${
                index + 1
              }`}
              key={image}
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
            >
              <img
                src={image}
                alt="Barber work"
              />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section reviews-section">
        <div className="reviews-title">
          <p className="eyebrow">
            CLIENT WORDS
          </p>

          <h2>
            Don't Just Take
            <br />
            Our Word For It.
          </h2>
        </div>

        <div className="reviews-grid">
          {reviews.map((review) => (
            <div
              className="review-card"
              key={review.name}
            >
              <div className="stars">
                ★★★★★
              </div>

              <p>
                "{review.text}"
              </p>

              <span>
                — {review.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          PREMIUM BOOKING SECTION
      ===================================================== */}

      <section
        id="booking"
        className="booking-section"
      >
        <div className="booking-wrapper">

          <motion.div
            className="booking-copy"
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <div className="booking-copy-top">
              <span className="booking-index">
                01
              </span>

              <p className="eyebrow">
                READY FOR A CHANGE?
              </p>
            </div>

            <h2>
              Your Best Look
              <br />
              <em>Starts Here.</em>
            </h2>

            <p className="booking-description">
              Choose your service, select your
              preferred date and time, and send
              your request directly to us on
              WhatsApp.
            </p>

            <div className="booking-steps">

              <div className="booking-step">
                <span>01</span>
                <div>
                  <strong>
                    Choose your service
                  </strong>
                  <p>
                    Pick the grooming experience
                    that suits you.
                  </p>
                </div>
              </div>

              <div className="booking-step">
                <span>02</span>
                <div>
                  <strong>
                    Select your time
                  </strong>
                  <p>
                    Choose a date and convenient
                    appointment time.
                  </p>
                </div>
              </div>

              <div className="booking-step">
                <span>03</span>
                <div>
                  <strong>
                    Confirm on WhatsApp
                  </strong>
                  <p>
                    We'll confirm your appointment
                    personally.
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          <motion.form
            className="booking-form"
            onSubmit={bookAppointment}
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
          >

            <div className="booking-form-header">
              <div>
                <span>
                  APPOINTMENT REQUEST
                </span>

                <h3>
                  Book your visit
                </h3>
              </div>

              <div className="booking-status">
                <span />
                WHATSAPP
              </div>
            </div>

            <div className="booking-form-divider" />

            <div className="booking-field-group">
              <label>
                SELECT SERVICE
              </label>

              <div className="booking-input-shell">
                <span className="booking-field-icon">
                  ◇
                </span>

                <select
                  value={selectedService}
                  onChange={(e) =>
                    handleServiceChange(
                      e.target.value
                    )
                  }
                >
                  {services.map((service) => (
                    <option
                      key={service.title}
                    >
                      {service.title}
                    </option>
                  ))}
                </select>

                <span className="booking-field-arrow">
                  ↓
                </span>
              </div>
            </div>

            {selectedHaircut && (
              <div className="booking-field-group">
                <label>
                  SELECTED HAIRCUT
                </label>

                <div className="selected-haircut-card">

                  <div className="selected-haircut-icon">
                    ✦
                  </div>

                  <div className="selected-haircut-info">
                    <strong>
                      {selectedHaircut}
                    </strong>

                    <span>
                      HAIRCUT STYLE
                    </span>
                  </div>

                  <strong className="selected-haircut-price">
                    {selectedHaircutData?.price}
                  </strong>

                </div>
              </div>
            )}

            {selectedBeard && (
              <div className="booking-field-group">
                <label>
                  SELECTED BEARD
                </label>

                <div className="selected-haircut-card">

                  <div className="selected-haircut-icon">
                    ✦
                  </div>

                  <div className="selected-haircut-info">
                    <strong>
                      {selectedBeard}
                    </strong>

                    <span>
                      BEARD STYLE
                    </span>
                  </div>

                  <strong className="selected-haircut-price">
                    {selectedBeardData?.price}
                  </strong>

                </div>
              </div>
            )}

            <div className="booking-field-group">
              <label>
                PREFERRED DATE
              </label>

              <div className="booking-input-shell">
                <span className="booking-field-icon">
                  □
                </span>

                <input
                  type="date"
                  value={date}
                  onChange={(e) =>
                    setDate(e.target.value)
                  }
                />

                <span className="booking-field-arrow">
                  →
                </span>
              </div>
            </div>

            <div className="booking-field-group">
              <label>
                PREFERRED TIME
              </label>

              <div className="booking-input-shell">
                <span className="booking-field-icon">
                  ◷
                </span>

                <input
                  type="time"
                  value={time}
                  onChange={(e) =>
                    setTime(e.target.value)
                  }
                />

                <span className="booking-field-arrow">
                  →
                </span>
              </div>
            </div>

            <button
              className="booking-submit"
              type="submit"
            >
              <span>
                CONTINUE ON WHATSAPP
              </span>

              <strong>
                →
              </strong>
            </button>

            <p className="booking-form-note">
              Your appointment request will open
              directly in WhatsApp.
            </p>

          </motion.form>
        </div>
      </section>

      <section
        id="contact"
        className="contact-section"
      >
        <div>
          <p className="eyebrow">
            VISIT THE CUT
          </p>

          <h2>
            Good Hair.
            <br />
            Better Days.
          </h2>
        </div>

        <div className="contact-info">
          <div>
            <span>LOCATION</span>
            <p>Your City, India</p>
          </div>

          <div>
            <span>OPENING HOURS</span>
            <p>
              MON — SAT · 10AM — 9PM
            </p>
          </div>

          <div>
            <span>CONTACT</span>
            <p>
              WhatsApp for appointments
            </p>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-logo">
          THE CUT
          <span>
            MEN'S HAIR ARTIST
          </span>
        </div>

        <div className="footer-links">
          <button
            onClick={() =>
              scrollTo("home")
            }
          >
            Home
          </button>

          <button
            onClick={() =>
              scrollTo("services")
            }
          >
            Services
          </button>

          <button
            onClick={() =>
              scrollTo("about")
            }
          >
            About
          </button>

          <button
            onClick={() =>
              scrollTo("gallery")
            }
          >
            Gallery
          </button>

          <button
            onClick={() =>
              scrollTo("contact")
            }
          >
            Contact
          </button>
        </div>

        <div className="socials">
          <span>◎</span>
          <span>◉</span>
          <span>𝕏</span>
        </div>
      </footer>
    </main>
  );
}


/* =====================================================
   HAIRCUTS PAGE
===================================================== */

function HaircutsPage({
  selectedHaircut,
  onBack,
  onSelect,
  onBook,
}: {
  selectedHaircut: string;
  onBack: () => void;
  onSelect: (style: string) => void;
  onBook: () => void;
}) {
  return (
    <main className="haircuts-page">

      <header className="haircuts-nav">
        <button
          className="haircuts-logo"
          onClick={onBack}
        >
          THE<span>CUT</span>
        </button>

        <nav className="haircuts-nav-links">
          <button onClick={onBack}>
            HOME
          </button>

          <span>SERVICES</span>
          <span>ABOUT</span>
          <span>GALLERY</span>
          <span>CONTACT</span>
        </nav>

        <button
          className="haircuts-book"
          onClick={onBook}
        >
          BOOK APPOINTMENT
          <span>↗</span>
        </button>
      </header>

      <section className="haircuts-hero">
        <div className="haircuts-hero-content">
          <p className="haircuts-eyebrow">
            OUR SERVICES
          </p>

          <h1>
            Haircuts
            <br />
            <em>Find Your Style.</em>
          </h1>

          <p className="haircuts-hero-text">
            From clean fades to bold modern
            cuts, we craft hairstyles that match
            your personality, face shape and
            lifestyle.
          </p>
        </div>

        <div className="haircuts-hero-side">
          <span />
          <p>
            Not just a haircut,
            <br />
            it's a new you.
          </p>
        </div>
      </section>

      <section className="haircut-selection">
        <div className="haircut-section-heading">
          <div>
            <span>
              01 / CHOOSE YOUR LOOK
            </span>

            <h2>
              SELECT YOUR
              <br />
              <em>HAIRCUT.</em>
            </h2>
          </div>

          <p>
            Choose the hairstyle you want.
            Your selection will be added to
            your appointment request.
          </p>
        </div>

        <div className="haircut-grid">
          {haircutStyles.map((style) => {
            const isSelected =
              selectedHaircut === style.name;

            return (
              <motion.article
                className={`haircut-card ${
                  isSelected
                    ? "haircut-selected"
                    : ""
                }`}
                key={style.name}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                }}
              >
                <div className="haircut-image">
                  <img
                    src={style.image}
                    alt={style.name}
                  />

                  <div className="haircut-number">
                    {style.number}
                  </div>
                </div>

                <div className="haircut-info">

                  <p className="haircut-small">
                    HAIRCUT / {style.number}
                  </p>

                  <h3>{style.name}</h3>

                  <p className="haircut-description">
                    {style.description}
                  </p>

                  <div className="haircut-action-box">

                    <strong className="haircut-price">
                      {style.price}
                    </strong>

                    <button
                      className="haircut-select"
                      onClick={() =>
                        onSelect(style.name)
                      }
                    >
                      {isSelected
                        ? "SELECTED"
                        : "SELECT"}

                      <span>
                        {isSelected
                          ? "✓"
                          : "→"}
                      </span>
                    </button>

                  </div>

                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {selectedHaircut && (
        <section className="selected-style-bar">
          <div>
            <span>
              YOUR SELECTED STYLE
            </span>

            <strong>
              {selectedHaircut}
            </strong>
          </div>

          <button onClick={onBook}>
            CONTINUE TO BOOK
            <span>→</span>
          </button>
        </section>
      )}

      <section className="haircuts-bottom">
        <div>
          <span>
            READY FOR A CHANGE?
          </span>

          <h2>
            BOOK YOUR
            <br />
            <em>APPOINTMENT.</em>
          </h2>
        </div>

        <button onClick={onBook}>
          BOOK NOW
          <span>↗</span>
        </button>
      </section>

      <footer className="haircuts-footer">
        <div className="haircuts-footer-logo">
          THE<span>CUT</span>
        </div>

        <p>
          MEN'S HAIR ARTIST
          <br />
          PRECISION · STYLE · IDENTITY
        </p>

        <button onClick={onBack}>
          BACK TO HOME ↑
        </button>
      </footer>

    </main>
  );
}


/* =====================================================
   BEARDS PAGE
   Same premium glass design as Haircuts
===================================================== */

function BeardsPage({
  selectedBeard,
  onBack,
  onSelect,
  onBook,
}: {
  selectedBeard: string;
  onBack: () => void;
  onSelect: (style: string) => void;
  onBook: () => void;
}) {
  return (
    <main className="haircuts-page">

      <header className="haircuts-nav">
        <button
          className="haircuts-logo"
          onClick={onBack}
        >
          THE<span>CUT</span>
        </button>

        <nav className="haircuts-nav-links">
          <button onClick={onBack}>
            HOME
          </button>

          <span>SERVICES</span>
          <span>ABOUT</span>
          <span>GALLERY</span>
          <span>CONTACT</span>
        </nav>

        <button
          className="haircuts-book"
          onClick={onBook}
        >
          BOOK APPOINTMENT
          <span>↗</span>
        </button>
      </header>

      <section className="haircuts-hero">
        <div className="haircuts-hero-content">
          <p className="haircuts-eyebrow">
            OUR SERVICES
          </p>

          <h1>
            Beard Trim
            <br />
            <em>Find Your Style.</em>
          </h1>

          <p className="haircuts-hero-text">
            From a powerful full beard to a
            clean shave, choose the beard style
            that defines your look.
          </p>
        </div>

        <div className="haircuts-hero-side">
          <span />
          <p>
            Sharp lines,
            <br />
            stronger presence.
          </p>
        </div>
      </section>

      <section className="haircut-selection">
        <div className="haircut-section-heading">
          <div>
            <span>
              01 / CHOOSE YOUR LOOK
            </span>

            <h2>
              SELECT YOUR
              <br />
              <em>BEARD.</em>
            </h2>
          </div>

          <p>
            Choose the beard style you want.
            Your selection will be added to
            your appointment request.
          </p>
        </div>

        <div className="haircut-grid">
          {beardStyles.map((style) => {
            const isSelected =
              selectedBeard === style.name;

            return (
              <motion.article
                className={`haircut-card ${
                  isSelected
                    ? "haircut-selected"
                    : ""
                }`}
                key={style.name}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                }}
              >
                <div className="haircut-image">
                  <img
                    src={style.image}
                    alt={style.name}
                  />

                  <div className="haircut-number">
                    {style.number}
                  </div>
                </div>

                <div className="haircut-info">

                  <p className="haircut-small">
                    BEARD / {style.number}
                  </p>

                  <h3>{style.name}</h3>

                  <p className="haircut-description">
                    {style.description}
                  </p>

                  <div className="haircut-action-box">

                    <strong className="haircut-price">
                      {style.price}
                    </strong>

                    <button
                      className="haircut-select"
                      onClick={() =>
                        onSelect(style.name)
                      }
                    >
                      {isSelected
                        ? "SELECTED"
                        : "SELECT"}

                      <span>
                        {isSelected
                          ? "✓"
                          : "→"}
                      </span>
                    </button>

                  </div>

                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {selectedBeard && (
        <section className="selected-style-bar">
          <div>
            <span>
              YOUR SELECTED BEARD
            </span>

            <strong>
              {selectedBeard}
            </strong>
          </div>

          <button onClick={onBook}>
            CONTINUE TO BOOK
            <span>→</span>
          </button>
        </section>
      )}

      <section className="haircuts-bottom">
        <div>
          <span>
            READY FOR A CHANGE?
          </span>

          <h2>
            BOOK YOUR
            <br />
            <em>APPOINTMENT.</em>
          </h2>
        </div>

        <button onClick={onBook}>
          BOOK NOW
          <span>↗</span>
        </button>
      </section>

      <footer className="haircuts-footer">
        <div className="haircuts-footer-logo">
          THE<span>CUT</span>
        </div>

        <p>
          MEN'S HAIR ARTIST
          <br />
          PRECISION · STYLE · IDENTITY
        </p>

        <button onClick={onBack}>
          BACK TO HOME ↑
        </button>
      </footer>

    </main>
  );
}

export default App;