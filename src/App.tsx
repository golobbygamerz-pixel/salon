import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";

import heroImage from "./IMG_0660.jpeg";

import fadeImage from "./IMG_0671.jpeg";
import modernFadeImage from "./IMG_0672.jpeg";
import mulletImage from "./IMG_0673.jpeg";
import midlineImage from "./IMG_0674.jpeg";
import wolfImage from "./IMG_0675.jpeg";
import modCutImage from "./IMG_0677.jpeg";

const WHATSAPP_NUMBER = "91XXXXXXXXXX";

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
    description:
      "Clean, classic and timeless. A sharp fade designed for a fresh everyday look.",
    image: fadeImage,
  },
  {
    number: "02",
    name: "Modern Fade",
    description:
      "A sharper contemporary fade with texture, movement and a modern finish.",
    image: modernFadeImage,
  },
  {
    number: "03",
    name: "Mullet",
    description:
      "Retro inspired with a modern execution. Bold, expressive and made to stand out.",
    image: mulletImage,
  },
  {
    number: "04",
    name: "Midline",
    description:
      "Balanced, clean and effortlessly stylish. A modern everyday hairstyle.",
    image: midlineImage,
  },
  {
    number: "05",
    name: "Wolf",
    description:
      "Textured layers, natural volume and a bold edge. Made for trendsetters.",
    image: wolfImage,
  },
  {
    number: "06",
    name: "Mod Cut",
    description:
      "A modern classic with clean lines and natural texture. Simple yet sharp.",
    image: modCutImage,
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [selectedService, setSelectedService] = useState("Haircut");

  const [currentPage, setCurrentPage] = useState<
    "home" | "haircuts"
  >("home");

  const [selectedHaircut, setSelectedHaircut] = useState("");

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
    setSelectedService("Haircut");
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

    const message =
      `*NEW APPOINTMENT REQUEST*\n\n` +
      `Service: ${selectedService}\n` +
      `Haircut Style: ${
        selectedHaircut || "Not selected"
      }\n` +
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

  /*
   * HAIRCUT PAGE
   */
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

  return (
    <main>
      {/* NAVBAR */}

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

      {/* HERO */}

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

          {/* GLASS BOOKING CARD */}

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

      {/* SERVICES */}

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

      {/* ABOUT */}

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

      {/* GALLERY */}

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

      {/* REVIEWS */}

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

      {/* BOOKING */}

      <section
        id="booking"
        className="booking-section"
      >
        <div className="booking-wrapper">
          <div>
            <p className="eyebrow">
              READY FOR A CHANGE?
            </p>

            <h2>
              Your Best Look
              <br />
              Starts Here.
            </h2>

            <p>
              Choose your service, select a
              convenient time and we'll take
              care of the rest.
            </p>
          </div>

          <form
            className="booking-form"
            onSubmit={bookAppointment}
          >
            <label>Select Service</label>

            <select
              value={selectedService}
              onChange={(e) =>
                setSelectedService(
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

            {/* SELECTED HAIRCUT */}

            {selectedHaircut && (
              <>
                <label>
                  Selected Haircut
                </label>

                <div
                  className="selected-haircut-input"
                  style={{
                    padding: "14px 16px",
                    border: "1px solid rgba(255,255,255,0.15)",
                    background:
                      "rgba(255,255,255,0.04)",
                    color: "#fff",
                    marginBottom: "18px",
                  }}
                >
                  {selectedHaircut}
                </div>
              </>
            )}

            <label>Date</label>

            <input
              type="date"
              value={date}
              onChange={(e) =>
                setDate(e.target.value)
              }
            />

            <label>Time</label>

            <input
              type="time"
              value={time}
              onChange={(e) =>
                setTime(e.target.value)
              }
            />

            <button type="submit">
              Continue on WhatsApp →
            </button>
          </form>
        </div>
      </section>

      {/* CONTACT */}

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

      {/* FOOTER */}

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

      {/* NAV */}

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

      {/* HERO */}

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

      {/* SELECTION */}

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
              selectedHaircut ===
              style.name;

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
                    HAIRCUT /{" "}
                    {style.number}
                  </p>

                  <h3>{style.name}</h3>

                  <p className="haircut-description">
                    {style.description}
                  </p>

                  <button
                    className="haircut-select"
                    onClick={() =>
                      onSelect(
                        style.name
                      )
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
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* SELECTED STYLE */}

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

      {/* BOTTOM CTA */}

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

      {/* FOOTER */}

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