import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import heroImage from "./hero.jpg";

const WHATSAPP_NUMBER = "91XXXXXXXXXX";

const services = [
  {
    number: "01",
    name: "Classic Cut",
    description: "Clean, timeless and perfectly structured.",
    time: "30 MIN",
    price: "₹400",
  },
  {
    number: "02",
    name: "Low Fade",
    description: "Subtle fade with a clean modern finish.",
    time: "40 MIN",
    price: "₹500",
  },
  {
    number: "03",
    name: "Mid Fade",
    description: "Balanced fade designed for everyday style.",
    time: "40 MIN",
    price: "₹500",
  },
  {
    number: "04",
    name: "High Fade",
    description: "Sharp, bold and high-contrast finish.",
    time: "45 MIN",
    price: "₹550",
  },
  {
    number: "05",
    name: "Skin Fade",
    description: "Ultra-clean skin fade with precision detailing.",
    time: "50 MIN",
    price: "₹600",
  },
  {
    number: "06",
    name: "Taper",
    description: "Natural taper for a refined modern look.",
    time: "40 MIN",
    price: "₹500",
  },
  {
    number: "07",
    name: "Textured Crop",
    description: "Modern texture with effortless movement.",
    time: "45 MIN",
    price: "₹550",
  },
  {
    number: "08",
    name: "French Crop",
    description: "Sharp fringe with a contemporary silhouette.",
    time: "45 MIN",
    price: "₹550",
  },
  {
    number: "09",
    name: "Buzz Cut",
    description: "Minimal, masculine and extremely clean.",
    time: "25 MIN",
    price: "₹350",
  },
  {
    number: "10",
    name: "Scissor Cut",
    description: "Detailed scissor work tailored to your face.",
    time: "45 MIN",
    price: "₹550",
  },
  {
    number: "11",
    name: "Quiff",
    description: "Volume, structure and a premium finish.",
    time: "45 MIN",
    price: "₹600",
  },
  {
    number: "12",
    name: "Long Hair Styling",
    description: "Shape and styling for longer men's hair.",
    time: "50 MIN",
    price: "₹650",
  },
];

const styles = [
  {
    name: "THE TAPER",
    category: "TAPER",
    image:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "THE FADE",
    category: "FADE",
    image:
      "https://images.unsplash.com/photo-1599351431202-1e0f0d4c0f8d?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "TEXTURED",
    category: "TEXTURED",
    image:
      "https://images.unsplash.com/photo-1622286346003-c0f2f7c6d7c5?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "CLASSIC",
    category: "CLASSIC",
    image:
      "https://images.unsplash.com/photo-1622288432450-277d0fef5ed6?auto=format&fit=crop&w=900&q=85",
  },
];

const reviews = [
  {
    quote:
      "Best haircut I've had in a long time. The attention to detail is seriously different.",
    name: "ARJUN M.",
    role: "CLIENT",
  },
  {
    quote:
      "Finally found someone who actually understands what hairstyle suits my face.",
    name: "KARAN S.",
    role: "CLIENT",
  },
  {
    quote:
      "Clean work, great consultation and an amazing finish. Definitely coming back.",
    name: "ROHAN K.",
    role: "CLIENT",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Skin Fade");

  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    notes: "",
  });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  const handleBooking = (e: FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.date || !form.time) {
      alert("Please fill in your name, phone, date and time.");
      return;
    }

    const message = `
BOOKING REQUEST — THE CUT

Name: ${form.name}
Phone: ${form.phone}
Service: ${selectedService}
Date: ${form.date}
Time: ${form.time}
Notes: ${form.notes || "None"}

Please confirm my appointment.
    `.trim();

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div className="site">
      {/* NAVIGATION */}
      <header className="navbar">
        <div
          className="logo"
          onClick={() => scrollTo("home")}
        >
          THE<span>CUT</span>
        </div>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <button onClick={() => scrollTo("home")}>
            HOME
          </button>

          <button onClick={() => scrollTo("about")}>
            ABOUT
          </button>

          <button onClick={() => scrollTo("services")}>
            SERVICES
          </button>

          <button onClick={() => scrollTo("work")}>
            WORK
          </button>

          <button onClick={() => scrollTo("reviews")}>
            REVIEWS
          </button>
        </nav>

        <button
          className="nav-book"
          onClick={() => scrollTo("booking")}
        >
          BOOK APPOINTMENT
        </button>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          <span></span>
          <span></span>
        </button>
      </header>

      {/* HERO */}
      <main id="home">
        <section className="hero">
          <div className="hero-image">
            <img
              src={heroImage}
              alt="Men's haircut"
            />
          </div>

          <div className="hero-overlay"></div>

          <div className="hero-content">
            <motion.p
              className="eyebrow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              MEN'S HAIR ARTIST · PRECISION · STYLE
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
            >
              THE ART
              <br />
              OF THE
              <br />
              <em>PERFECT CUT.</em>
            </motion.h1>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
              }}
            >
              Precision men's grooming built around
              your face, your style and your identity.
            </motion.p>

            <div className="hero-actions">
              <button
                className="primary-button"
                onClick={() => scrollTo("booking")}
              >
                BOOK APPOINTMENT
                <span>↗</span>
              </button>

              <button
                className="text-button"
                onClick={() => scrollTo("work")}
              >
                VIEW MY WORK
              </button>
            </div>
          </div>

          <div className="hero-bottom">
            <span>SCROLL TO EXPLORE</span>
            <div className="scroll-line"></div>
          </div>
        </section>

        {/* INTRO */}
        <section
          className="intro section"
          id="about"
        >
          <div className="section-label">
            <span>01</span>
            ABOUT THE ARTIST
          </div>

          <div className="intro-grid">
            <div>
              <h2>
                MORE THAN A
                <br />
                <em>HAIRCUT.</em>
              </h2>
            </div>

            <div className="intro-text">
              <p className="large-text">
                Your haircut is part of how you present
                yourself. It should feel personal,
                intentional and completely you.
              </p>

              <p>
                Every cut starts with understanding your
                face shape, hair texture and personal style.
                From classic cuts to modern fades, every
                detail is finished by hand.
              </p>

              <button
                className="line-button"
                onClick={() => scrollTo("services")}
              >
                EXPLORE SERVICES <span>→</span>
              </button>
            </div>
          </div>

          <div className="stats">
            <div>
              <strong>5+</strong>
              <span>YEARS EXPERIENCE</span>
            </div>

            <div>
              <strong>1K+</strong>
              <span>CUTS COMPLETED</span>
            </div>

            <div>
              <strong>100%</strong>
              <span>PERSONALIZED</span>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section
          className="services section-dark"
          id="services"
        >
          <div className="section-label light">
            <span>02</span>
            SERVICES
          </div>

          <div className="services-heading">
            <h2>
              BUILT FOR
              <br />
              <em>YOUR STYLE.</em>
            </h2>

            <p>
              From timeless classics to modern fades,
              every service is tailored to you.
            </p>
          </div>

          <div className="service-list">
            {services.map((service) => (
              <div
                className="service-row"
                key={service.number}
                onClick={() =>
                  setSelectedService(service.name)
                }
              >
                <span className="service-number">
                  {service.number}
                </span>

                <div className="service-main">
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                </div>

                <div className="service-meta">
                  <span>{service.time}</span>
                  <strong>{service.price}</strong>
                </div>

                <span className="service-arrow">
                  ↗
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* WORK */}
        <section
          className="work section"
          id="work"
        >
          <div className="section-label">
            <span>03</span>
            SELECTED WORK
          </div>

          <div className="work-heading">
            <h2>
              FIND YOUR
              <br />
              <em>STYLE.</em>
            </h2>

            <p>
              A selection of modern men's cuts,
              refined for different faces and personalities.
            </p>
          </div>

          <div className="gallery">
            {styles.map((style, index) => (
              <motion.article
                className={`gallery-card card-${index}`}
                key={style.name}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
              >
                <img
                  src={style.image}
                  alt={style.name}
                />

                <div className="gallery-overlay">
                  <span>{style.category}</span>

                  <h3>{style.name}</h3>

                  <span className="gallery-arrow">
                    ↗
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* SIGNATURE STYLES */}
        <section className="signature section-dark">
          <div className="section-label light">
            <span>04</span>
            SIGNATURE STYLES
          </div>

          <div className="signature-content">
            <div className="signature-item active">
              <span>01</span>

              <h3>THE TAPER</h3>

              <p>
                Clean sides. Natural finish.
                Perfect for everyday style.
              </p>
            </div>

            <div className="signature-item">
              <span>02</span>

              <h3>SKIN FADE</h3>

              <p>
                Maximum contrast with
                razor-sharp detailing.
              </p>
            </div>

            <div className="signature-item">
              <span>03</span>

              <h3>TEXTURED CROP</h3>

              <p>
                Contemporary texture with
                effortless movement.
              </p>
            </div>

            <div className="signature-item">
              <span>04</span>

              <h3>CLASSIC</h3>

              <p>
                Timeless shape with
                modern precision.
              </p>
            </div>
          </div>
        </section>

        {/* WHY */}
        <section className="why section">
          <div className="section-label">
            <span>05</span>
            THE DIFFERENCE
          </div>

          <div className="why-grid">
            <h2>
              DETAILS
              <br />
              <em>MATTER.</em>
            </h2>

            <div className="why-list">
              <div>
                <span>01</span>

                <h3>PRECISION</h3>

                <p>
                  Every line, fade and transition
                  is finished with intention.
                </p>
              </div>

              <div>
                <span>02</span>

                <h3>PERSONAL</h3>

                <p>
                  Your haircut is designed around
                  your face and individual style.
                </p>
              </div>

              <div>
                <span>03</span>

                <h3>DETAIL</h3>

                <p>
                  Clean finishing, sharp edges
                  and attention to the smallest details.
                </p>
              </div>

              <div>
                <span>04</span>

                <h3>MODERN</h3>

                <p>
                  Contemporary styles without
                  losing timeless craftsmanship.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section
          className="reviews section-dark"
          id="reviews"
        >
          <div className="section-label light">
            <span>06</span>
            CLIENT REVIEWS
          </div>

          <h2>
            HEAR IT FROM
            <br />
            <em>THE CLIENTS.</em>
          </h2>

          <div className="review-grid">
            {reviews.map((review) => (
              <article
                className="review-card"
                key={review.name}
              >
                <div className="stars">
                  ★★★★★
                </div>

                <p>
                  “{review.quote}”
                </p>

                <div className="review-author">
                  <strong>{review.name}</strong>

                  <span>{review.role}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* BOOKING */}
        <section
          className="booking section"
          id="booking"
        >
          <div className="section-label">
            <span>07</span>
            BOOK YOUR CUT
          </div>

          <div className="booking-grid">
            <div className="booking-intro">
              <h2>
                YOUR NEXT
                <br />
                CUT STARTS
                <br />
                <em>HERE.</em>
              </h2>

              <p>
                Select your service, choose your preferred
                time and send your request directly on
                WhatsApp.
              </p>

              <div className="booking-note">
                <span>01</span>

                <div>
                  <strong>WHATSAPP BOOKING</strong>

                  <p>
                    Your appointment request will be
                    sent directly to the barber.
                  </p>
                </div>
              </div>
            </div>

            <form
              className="booking-form"
              onSubmit={handleBooking}
            >
              <div className="form-group">
                <label>YOUR NAME</label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      name: e.target.value,
                    })
                  }
                />
              </div>

              <div className="form-group">
                <label>PHONE NUMBER</label>

                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={form.phone}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      phone: e.target.value,
                    })
                  }
                />
              </div>

              <div className="form-group">
                <label>SERVICE</label>

                <select
                  value={selectedService}
                  onChange={(e) =>
                    setSelectedService(e.target.value)
                  }
                >
                  {services.map((service) => (
                    <option
                      key={service.name}
                      value={service.name}
                    >
                      {service.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>DATE</label>

                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        date: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="form-group">
                  <label>TIME</label>

                  <input
                    type="time"
                    value={form.time}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        time: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <div className="form-group">
                <label>ANYTHING ELSE?</label>

                <textarea
                  placeholder="Tell me anything I should know..."
                  value={form.notes}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      notes: e.target.value,
                    })
                  }
                />
              </div>

              <button
                className="submit-button"
                type="submit"
              >
                CONFIRM VIA WHATSAPP
                <span>↗</span>
              </button>
            </form>
          </div>
        </section>

        {/* LOCATION */}
        <section className="location section-dark">
          <div className="location-grid">
            <div>
              <div className="section-label light">
                <span>08</span>
                FIND ME
              </div>

              <h2>
                COME GET
                <br />
                <em>SHARP.</em>
              </h2>
            </div>

            <div className="location-info">
              <div>
                <span>LOCATION</span>

                <p>
                  Your Salon Name
                  <br />
                  Your City, India
                </p>
              </div>

              <div>
                <span>OPENING HOURS</span>

                <p>
                  MON — SAT
                  <br />
                  10:00 AM — 9:00 PM
                </p>
              </div>

              <div>
                <span>CONTACT</span>

                <p>
                  WhatsApp
                  <br />
                  +91 XXXXX XXXXX
                </p>
              </div>

              <button className="map-button">
                OPEN GOOGLE MAPS ↗
              </button>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="final-cta">
          <div className="final-image">
            <img
              src={heroImage}
              alt="Men's barber style"
            />
          </div>

          <div className="final-overlay"></div>

          <div className="final-content">
            <span>READY FOR A CHANGE?</span>

            <h2>
              MAKE YOUR
              <br />
              <em>MOVE.</em>
            </h2>

            <button
              className="primary-button"
              onClick={() => scrollTo("booking")}
            >
              BOOK YOUR CUT
              <span>↗</span>
            </button>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-logo">
            THE<span>CUT</span>
          </div>

          <p>
            MEN'S HAIR ARTIST
            <br />
            PRECISION · STYLE · IDENTITY
          </p>

          <div className="footer-links">
            <button
              onClick={() => scrollTo("home")}
            >
              HOME
            </button>

            <button
              onClick={() => scrollTo("services")}
            >
              SERVICES
            </button>

            <button
              onClick={() => scrollTo("work")}
            >
              WORK
            </button>

            <button
              onClick={() => scrollTo("booking")}
            >
              BOOK
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © 2026 THE CUT. ALL RIGHTS RESERVED.
          </span>

          <span>
            BUILT FOR MEN WHO CARE ABOUT THEIR STYLE.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;