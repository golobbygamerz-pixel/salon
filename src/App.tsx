import { useEffect, useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

import classicPermImage from "./IMG_0685.jpeg";
import koreanPermImage from "./IMG_0686.jpeg";
import texturedPermImage from "./IMG_0687.jpeg";
import looseWavePermImage from "./IMG_0688.jpeg";
import spiralPermImage from "./IMG_0689.jpeg";
import modernPermImage from "./IMG_0690.jpeg";

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
    title: "Perms",
    price: "₹999",
    description:
      "Modern texture and natural-looking curls designed for your style.",
    image: classicPermImage,
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

const permStyles = [
  {
    number: "01",
    name: "Classic Perm",
    price: "₹999",
    description:
      "Classic defined curls with natural volume for a timeless textured finish.",
    image: classicPermImage,
  },
  {
    number: "02",
    name: "Korean Perm",
    price: "₹1199",
    description:
      "Soft Korean-inspired waves with effortless movement and a clean modern finish.",
    image: koreanPermImage,
  },
  {
    number: "03",
    name: "Textured Perm",
    price: "₹1099",
    description:
      "Rich texture and controlled curls designed for volume, movement and definition.",
    image: texturedPermImage,
  },
  {
    number: "04",
    name: "Loose Wave Perm",
    price: "₹999",
    description:
      "Relaxed loose waves for a natural, effortless look with soft movement.",
    image: looseWavePermImage,
  },
  {
    number: "05",
    name: "Spiral Perm",
    price: "₹1299",
    description:
      "Defined spiral curls with bold texture and maximum personality.",
    image: spiralPermImage,
  },
  {
    number: "06",
    name: "Modern Perm",
    price: "₹1199",
    description:
      "A contemporary perm with balanced curls, texture and a fashion-forward finish.",
    image: modernPermImage,
  },
];

type Service = (typeof services)[number];

type ModalView =
  | "summary"
  | "add-service"
  | "haircut"
  | "beard"
  | "perm";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [selectedService, setSelectedService] = useState("Haircut");

  const [currentPage, setCurrentPage] = useState<
    "home" | "haircuts" | "beards" | "perms"
  >("home");

  const [selectedHaircut, setSelectedHaircut] = useState("");
  const [selectedBeard, setSelectedBeard] = useState("");
  const [selectedPerm, setSelectedPerm] = useState("");

  const [serviceModalOpen, setServiceModalOpen] = useState(false);
  const [modalService, setModalService] = useState<Service | null>(null);
  const [modalStyle, setModalStyle] = useState("");
  const [modalView, setModalView] = useState<ModalView>("summary");

  const selectedHaircutData = haircutStyles.find(
    (style) => style.name === selectedHaircut
  );

  const selectedBeardData = beardStyles.find(
    (style) => style.name === selectedBeard
  );

  const selectedPermData = permStyles.find(
    (style) => style.name === selectedPerm
  );

  useEffect(() => {
    document.body.style.overflow = serviceModalOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [serviceModalOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setServiceModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const scrollTo = (id: string) => {
    setCurrentPage("home");

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 50);

    setMenuOpen(false);
  };

  const openHaircuts = () => {
    setServiceModalOpen(false);
    setCurrentPage("haircuts");
    setMenuOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const openBeards = () => {
    setServiceModalOpen(false);
    setCurrentPage("beards");
    setMenuOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const openPerms = () => {
    setServiceModalOpen(false);
    setCurrentPage("perms");
    setMenuOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const goHome = () => {
    setServiceModalOpen(false);
    setCurrentPage("home");

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 50);
  };

  /*
   * IMPORTANT:
   * Selecting a new service no longer clears the other services.
   * This allows Haircut + Beard + Perm together.
   */
  const openStyleModal = (
    serviceTitle: string,
    styleName: string
  ) => {
    const service = services.find(
      (item) => item.title === serviceTitle
    );

    if (!service) return;

    setSelectedService(serviceTitle);

    if (serviceTitle === "Haircut") {
      setSelectedHaircut(styleName);
    }

    if (serviceTitle === "Beard Trim") {
      setSelectedBeard(styleName);
    }

    if (serviceTitle === "Perms") {
      setSelectedPerm(styleName);
    }

    setModalService(service);
    setModalStyle(styleName);
    setModalView("summary");
    setServiceModalOpen(true);
  };

  const selectHaircut = (style: string) => {
    openStyleModal("Haircut", style);
  };

  const selectBeard = (style: string) => {
    openStyleModal("Beard Trim", style);
  };

  const selectPerm = (style: string) => {
    openStyleModal("Perms", style);
  };

  /*
   * Used by the normal booking form.
   * It now preserves multiple services.
   */
  const handleServiceChange = (service: string) => {
    setSelectedService(service);

    if (service === "Haircut") {
      setModalService(
        services.find((item) => item.title === "Haircut") || null
      );
      setModalStyle(selectedHaircut);
    }

    if (service === "Beard Trim") {
      setModalService(
        services.find((item) => item.title === "Beard Trim") || null
      );
      setModalStyle(selectedBeard);
    }

    if (service === "Perms") {
      setModalService(
        services.find((item) => item.title === "Perms") || null
      );
      setModalStyle(selectedPerm);
    }
  };

  /*
   * Opens the booking modal while preserving
   * whatever services are already selected.
   */
  const openBookingModal = () => {
    let service: Service | null = null;
    let style = "";

    if (selectedHaircut) {
      service =
        services.find((item) => item.title === "Haircut") || null;
      style = selectedHaircut;
    } else if (selectedBeard) {
      service =
        services.find((item) => item.title === "Beard Trim") || null;
      style = selectedBeard;
    } else if (selectedPerm) {
      service =
        services.find((item) => item.title === "Perms") || null;
      style = selectedPerm;
    }

    setModalService(service);
    setModalStyle(style);
    setModalView("summary");
    setServiceModalOpen(true);
  };

  /*
   * Kept for the existing service pages.
   * Instead of jumping to the booking section,
   * it now opens the multi-service modal.
   */
  const continueToBooking = () => {
    openBookingModal();
  };

  /*
   * Builds the complete WhatsApp appointment.
   */
  const bookAppointment = (e?: FormEvent) => {
    e?.preventDefault();

    const selectedServices: string[] = [];

    if (selectedHaircutData) {
      selectedServices.push(
        `• Haircut — ${selectedHaircutData.name} — ${selectedHaircutData.price}`
      );
    }

    if (selectedBeardData) {
      selectedServices.push(
        `• Beard Trim — ${selectedBeardData.name} — ${selectedBeardData.price}`
      );
    }

    if (selectedPermData) {
      selectedServices.push(
        `• Perms — ${selectedPermData.name} — ${selectedPermData.price}`
      );
    }

    if (selectedServices.length === 0) {
      alert("Please select at least one service.");
      return;
    }

    if (!date || !time) {
      alert("Please select your preferred date and time.");
      return;
    }

    const total =
      (selectedHaircutData
        ? Number(selectedHaircutData.price.replace(/[^\d]/g, ""))
        : 0) +
      (selectedBeardData
        ? Number(selectedBeardData.price.replace(/[^\d]/g, ""))
        : 0) +
      (selectedPermData
        ? Number(selectedPermData.price.replace(/[^\d]/g, ""))
        : 0);

    const message =
      `*NEW APPOINTMENT REQUEST*\n\n` +
      `SERVICES:\n` +
      `${selectedServices.join("\n")}\n\n` +
      `TOTAL: ₹${total}\n\n` +
      `Date: ${date}\n` +
      `Time: ${time}\n\n` +
      `I would like to book an appointment.`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  };

  const homePage = (
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
            onClick={openBookingModal}
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
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
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
              personalized grooming — designed
              for the modern man.
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
            initial={{
              opacity: 0,
              x: 50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
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
                onClick={openBookingModal}
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
              onClick={openBookingModal}
            >
              Choose Services
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

            <h2>
              Premium Grooming Services
            </h2>
          </div>

          <div className="heading-note">
            <span />
            Tailored for your style
          </div>
        </div>

        <div className="services-grid">
          {services.map(
            (service, index) => (
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
                    return;
                  }

                  if (service.title === "Beard Trim") {
                    openBeards();
                    return;
                  }

                  if (service.title === "Perms") {
                    openPerms();
                    return;
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
                    <strong>{service.price}</strong>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();

                        if (
                          service.title === "Haircut"
                        ) {
                          openHaircuts();
                          return;
                        }

                        if (
                          service.title === "Beard Trim"
                        ) {
                          openBeards();
                          return;
                        }

                        if (
                          service.title === "Perms"
                        ) {
                          openPerms();
                          return;
                        }
                      }}
                    >
                      →
                    </button>
                  </div>
                </div>
              </motion.article>
            )
          )}
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
          <p className="eyebrow">
            THE CUT
          </p>

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
            onClick={openBookingModal}
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
          {gallery.map(
            (image, index) => (
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
            )
          )}
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
          {reviews.map(
            (review) => (
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
            )
          )}
        </div>
      </section>

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
                  {services.map(
                    (service) => (
                      <option
                        key={service.title}
                      >
                        {service.title}
                      </option>
                    )
                  )}
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

            {selectedPerm && (
              <div className="booking-field-group">
                <label>
                  SELECTED PERM
                </label>

                <div className="selected-haircut-card">
                  <div className="selected-haircut-icon">
                    ✦
                  </div>

                  <div className="selected-haircut-info">
                    <strong>
                      {selectedPerm}
                    </strong>

                    <span>
                      PERM STYLE
                    </span>
                  </div>

                  <strong className="selected-haircut-price">
                    {selectedPermData?.price}
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
            <span>
              LOCATION
            </span>

            <p>
              Your City, India
            </p>
          </div>

          <div>
            <span>
              OPENING HOURS
            </span>

            <p>
              MON — SAT · 10AM — 9PM
            </p>
          </div>

          <div>
            <span>
              CONTACT
            </span>

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
        </div>

        <div className="socials">
          <span>◎</span>
          <span>◉</span>
          <span>𝕏</span>
        </div>
      </footer>
    </main>
  );

  const pageContent =
    currentPage === "haircuts" ? (
      <HaircutsPage
        selectedHaircut={selectedHaircut}
        onBack={goHome}
        onSelect={selectHaircut}
        onBook={continueToBooking}
      />
    ) : currentPage === "beards" ? (
      <BeardsPage
        selectedBeard={selectedBeard}
        onBack={goHome}
        onSelect={selectBeard}
        onBook={continueToBooking}
      />
    ) : currentPage === "perms" ? (
      <PermsPage
        selectedPerm={selectedPerm}
        onBack={goHome}
        onSelect={selectPerm}
        onBook={continueToBooking}
      />
    ) : (
      homePage
    );

  return (
    <>
      {pageContent}

      <ServiceModal
        open={serviceModalOpen}
        service={modalService}
        styleName={modalStyle}
        view={modalView}
        selectedHaircut={selectedHaircut}
        selectedBeard={selectedBeard}
        selectedPerm={selectedPerm}
        selectedHaircutData={selectedHaircutData}
        selectedBeardData={selectedBeardData}
        selectedPermData={selectedPermData}
        date={date}
        time={time}
        setDate={setDate}
        setTime={setTime}
        onClose={() =>
          setServiceModalOpen(false)
        }
        onViewChange={setModalView}
        onSelectHaircut={(style) => {
          setSelectedHaircut(style);
          setModalStyle(style);
          setModalService(
            services.find(
              (item) => item.title === "Haircut"
            ) || null
          );
          setModalView("summary");
        }}
        onSelectBeard={(style) => {
          setSelectedBeard(style);
          setModalStyle(style);
          setModalService(
            services.find(
              (item) => item.title === "Beard Trim"
            ) || null
          );
          setModalView("summary");
        }}
        onSelectPerm={(style) => {
          setSelectedPerm(style);
          setModalStyle(style);
          setModalService(
            services.find(
              (item) => item.title === "Perms"
            ) || null
          );
          setModalView("summary");
        }}
        onBook={() => bookAppointment()}
      />
    </>
  );
}

/* =====================================================
   MULTI-SERVICE BOOKING MODAL
===================================================== */

function ServiceModal({
  open,
  service,
  styleName,
  view,
  selectedHaircut,
  selectedBeard,
  selectedPerm,
  selectedHaircutData,
  selectedBeardData,
  selectedPermData,
  date,
  time,
  setDate,
  setTime,
  onClose,
  onViewChange,
  onSelectHaircut,
  onSelectBeard,
  onSelectPerm,
  onBook,
}: {
  open: boolean;
  service: Service | null;
  styleName: string;

  view: ModalView;

  selectedHaircut: string;
  selectedBeard: string;
  selectedPerm: string;

  selectedHaircutData:
    | (typeof haircutStyles)[number]
    | undefined;

  selectedBeardData:
    | (typeof beardStyles)[number]
    | undefined;

  selectedPermData:
    | (typeof permStyles)[number]
    | undefined;

  date: string;
  time: string;

  setDate: (value: string) => void;
  setTime: (value: string) => void;

  onClose: () => void;
  onViewChange: (view: ModalView) => void;

  onSelectHaircut: (style: string) => void;
  onSelectBeard: (style: string) => void;
  onSelectPerm: (style: string) => void;

  onBook: () => void;
}) {
  const total =
    (selectedHaircutData
      ? Number(
          selectedHaircutData.price.replace(
            /[^\d]/g,
            ""
          )
        )
      : 0) +
    (selectedBeardData
      ? Number(
          selectedBeardData.price.replace(
            /[^\d]/g,
            ""
          )
        )
      : 0) +
    (selectedPermData
      ? Number(
          selectedPermData.price.replace(
            /[^\d]/g,
            ""
          )
        )
      : 0);

  const hasServices =
    Boolean(
      selectedHaircut ||
        selectedBeard ||
        selectedPerm
    );

  const styleList =
    view === "haircut"
      ? haircutStyles
      : view === "beard"
      ? beardStyles
      : permStyles;

  const categoryName =
    view === "haircut"
      ? "HAIRCUT"
      : view === "beard"
      ? "BEARD TRIM"
      : "PERMS";

  const chooseStyle = (
    styleName: string
  ) => {
    if (view === "haircut") {
      onSelectHaircut(styleName);
    }

    if (view === "beard") {
      onSelectBeard(styleName);
    }

    if (view === "perm") {
      onSelectPerm(styleName);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="service-modal-backdrop"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          onMouseDown={(e) => {
            if (
              e.target === e.currentTarget
            ) {
              onClose();
            }
          }}
        >
          <motion.div
            className="service-modal"
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.97,
            }}
            transition={{
              duration: 0.28,
              ease: "easeOut",
            }}
            style={{
              maxHeight: "92vh",
              overflowY: "auto",
              width: "min(680px, 94vw)",
            }}
          >
            <button
              className="service-modal-close"
              onClick={onClose}
              aria-label="Close"
            >
              ×
            </button>

            {/* =========================================
                TOP IMAGE
            ========================================= */}
            <div
              className="service-modal-image"
              style={{
                height:
                  view === "summary"
                    ? "190px"
                    : "120px",
              }}
            >
              <img
                src={
                  service?.image ||
                  heroImage
                }
                alt="Selected service"
              />

              <div className="service-modal-image-overlay" />

              <span className="service-modal-icon">
                ✦
              </span>
            </div>

            <div className="service-modal-content">
              {/* =========================================
                  SUMMARY VIEW
              ========================================= */}
              {view === "summary" && (
                <>
                  <p className="service-modal-kicker">
                    YOUR APPOINTMENT
                  </p>

                  <h2 className="service-modal-title">
                    Your Services
                  </h2>

                  <p
                    className="service-modal-description"
                    style={{
                      marginBottom: "18px",
                    }}
                  >
                    Choose more services or continue
                    with your current selection.
                  </p>

                  {/* YOUR SERVICES */}
                  <div
                    style={{
                      border:
                        "1px solid rgba(255,255,255,0.12)",
                      borderRadius: "16px",
                      padding: "16px",
                      marginBottom: "16px",
                      background:
                        "rgba(255,255,255,0.035)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent:
                          "space-between",
                        alignItems: "center",
                        marginBottom: "12px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "11px",
                          letterSpacing:
                            "0.16em",
                          fontWeight: 700,
                          opacity: 0.6,
                        }}
                      >
                        YOUR SERVICES
                      </span>

                      <span
                        style={{
                          fontSize: "11px",
                          opacity: 0.5,
                        }}
                      >
                        {[
                          selectedHaircut,
                          selectedBeard,
                          selectedPerm,
                        ].filter(Boolean).length}{" "}
                        SELECTED
                      </span>
                    </div>

                    {!hasServices && (
                      <div
                        style={{
                          padding: "18px 0",
                          textAlign: "center",
                          opacity: 0.55,
                          fontSize: "13px",
                        }}
                      >
                        No service selected yet.
                      </div>
                    )}

                    {selectedHaircutData && (
                      <SummaryServiceRow
                        category="HAIRCUT"
                        name={
                          selectedHaircutData.name
                        }
                        price={
                          selectedHaircutData.price
                        }
                      />
                    )}

                    {selectedBeardData && (
                      <SummaryServiceRow
                        category="BEARD TRIM"
                        name={
                          selectedBeardData.name
                        }
                        price={
                          selectedBeardData.price
                        }
                      />
                    )}

                    {selectedPermData && (
                      <SummaryServiceRow
                        category="PERMS"
                        name={
                          selectedPermData.name
                        }
                        price={
                          selectedPermData.price
                        }
                      />
                    )}

                    {hasServices && (
                      <div
                        style={{
                          marginTop: "14px",
                          paddingTop: "14px",
                          borderTop:
                            "1px solid rgba(255,255,255,0.1)",
                          display: "flex",
                          justifyContent:
                            "space-between",
                          alignItems: "center",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "12px",
                            letterSpacing:
                              "0.12em",
                            fontWeight: 700,
                            opacity: 0.65,
                          }}
                        >
                          TOTAL
                        </span>

                        <strong
                          style={{
                            fontSize: "22px",
                          }}
                        >
                          ₹{total}
                        </strong>
                      </div>
                    )}
                  </div>

                  {/* ADD MORE SERVICE */}
                  {[
                    selectedHaircut,
                    selectedBeard,
                    selectedPerm,
                  ].filter(Boolean).length < 3 && (
                    <button
                      type="button"
                      onClick={() =>
                        onViewChange(
                          "add-service"
                        )
                      }
                      style={{
                        width: "100%",
                        border:
                          "1px solid rgba(255,255,255,0.18)",
                        background:
                          "rgba(255,255,255,0.05)",
                        color: "inherit",
                        padding: "15px 16px",
                        borderRadius: "12px",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent:
                          "space-between",
                        marginBottom: "18px",
                        fontSize: "12px",
                        fontWeight: 800,
                        letterSpacing:
                          "0.12em",
                      }}
                    >
                      <span>
                        + ADD MORE SERVICE
                      </span>

                      <span>
                        →
                      </span>
                    </button>
                  )}

                  {/* DATE */}
                  <div
                    style={{
                      marginBottom: "12px",
                    }}
                  >
                    <label
                      style={{
                        display: "block",
                        fontSize: "10px",
                        letterSpacing:
                          "0.15em",
                        opacity: 0.55,
                        marginBottom: "7px",
                        fontWeight: 700,
                      }}
                    >
                      PREFERRED DATE
                    </label>

                    <input
                      type="date"
                      value={date}
                      onChange={(e) =>
                        setDate(e.target.value)
                      }
                      style={{
                        width: "100%",
                        boxSizing:
                          "border-box",
                        background:
                          "rgba(255,255,255,0.05)",
                        color: "inherit",
                        border:
                          "1px solid rgba(255,255,255,0.12)",
                        borderRadius: "10px",
                        padding:
                          "13px 14px",
                        outline: "none",
                      }}
                    />
                  </div>

                  {/* TIME */}
                  <div
                    style={{
                      marginBottom: "18px",
                    }}
                  >
                    <label
                      style={{
                        display: "block",
                        fontSize: "10px",
                        letterSpacing:
                          "0.15em",
                        opacity: 0.55,
                        marginBottom: "7px",
                        fontWeight: 700,
                      }}
                    >
                      PREFERRED TIME
                    </label>

                    <input
                      type="time"
                      value={time}
                      onChange={(e) =>
                        setTime(e.target.value)
                      }
                      style={{
                        width: "100%",
                        boxSizing:
                          "border-box",
                        background:
                          "rgba(255,255,255,0.05)",
                        color: "inherit",
                        border:
                          "1px solid rgba(255,255,255,0.12)",
                        borderRadius: "10px",
                        padding:
                          "13px 14px",
                        outline: "none",
                      }}
                    />
                  </div>

                  {/* BOOK */}
                  <button
                    type="button"
                    className="service-modal-primary"
                    onClick={onBook}
                    disabled={!hasServices}
                    style={{
                      width: "100%",
                      opacity: hasServices
                        ? 1
                        : 0.45,
                    }}
                  >
                    BOOK THESE SERVICES
                    <span>
                      →
                    </span>
                  </button>

                  <p className="service-modal-note">
                    Your complete service selection
                    will be sent directly to WhatsApp.
                  </p>
                </>
              )}

              {/* =========================================
                  ADD SERVICE VIEW
              ========================================= */}
              {view === "add-service" && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      onViewChange(
                        "summary"
                      )
                    }
                    style={{
                      background: "none",
                      border: "none",
                      color: "inherit",
                      opacity: 0.6,
                      cursor: "pointer",
                      padding: "0",
                      marginBottom: "14px",
                      fontSize: "11px",
                      letterSpacing:
                        "0.12em",
                      fontWeight: 700,
                    }}
                  >
                    ← BACK TO YOUR SERVICES
                  </button>

                  <p className="service-modal-kicker">
                    ADD TO APPOINTMENT
                  </p>

                  <h2 className="service-modal-title">
                    Add More Service
                  </h2>

                  <p className="service-modal-description">
                    Select another grooming service.
                    Your existing selections will stay.
                  </p>

                  <div
                    style={{
                      display: "grid",
                      gap: "10px",
                      marginTop: "20px",
                    }}
                  >
                    {!selectedHaircut && (
                      <button
                        type="button"
                        onClick={() =>
                          onViewChange(
                            "haircut"
                          )
                        }
                        style={{
                          width: "100%",
                          textAlign: "left",
                          padding: "18px",
                          borderRadius: "14px",
                          border:
                            "1px solid rgba(255,255,255,0.13)",
                          background:
                            "rgba(255,255,255,0.04)",
                          color: "inherit",
                          cursor: "pointer",
                          display: "flex",
                          justifyContent:
                            "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div>
                          <div
                            style={{
                              fontSize:
                                "12px",
                              fontWeight: 800,
                              letterSpacing:
                                "0.12em",
                            }}
                          >
                            HAIRCUT
                          </div>

                          <div
                            style={{
                              fontSize:
                                "12px",
                              opacity: 0.5,
                              marginTop:
                                "5px",
                            }}
                          >
                            Choose your haircut style
                          </div>
                        </div>

                        <span>→</span>
                      </button>
                    )}

                    {!selectedBeard && (
                      <button
                        type="button"
                        onClick={() =>
                          onViewChange(
                            "beard"
                          )
                        }
                        style={{
                          width: "100%",
                          textAlign: "left",
                          padding: "18px",
                          borderRadius: "14px",
                          border:
                            "1px solid rgba(255,255,255,0.13)",
                          background:
                            "rgba(255,255,255,0.04)",
                          color: "inherit",
                          cursor: "pointer",
                          display: "flex",
                          justifyContent:
                            "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div>
                          <div
                            style={{
                              fontSize:
                                "12px",
                              fontWeight: 800,
                              letterSpacing:
                                "0.12em",
                            }}
                          >
                            BEARD TRIM
                          </div>

                          <div
                            style={{
                              fontSize:
                                "12px",
                              opacity: 0.5,
                              marginTop:
                                "5px",
                            }}
                          >
                            Choose your beard style
                          </div>
                        </div>

                        <span>→</span>
                      </button>
                    )}

                    {!selectedPerm && (
                      <button
                        type="button"
                        onClick={() =>
                          onViewChange(
                            "perm"
                          )
                        }
                        style={{
                          width: "100%",
                          textAlign: "left",
                          padding: "18px",
                          borderRadius: "14px",
                          border:
                            "1px solid rgba(255,255,255,0.13)",
                          background:
                            "rgba(255,255,255,0.04)",
                          color: "inherit",
                          cursor: "pointer",
                          display: "flex",
                          justifyContent:
                            "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div>
                          <div
                            style={{
                              fontSize:
                                "12px",
                              fontWeight: 800,
                              letterSpacing:
                                "0.12em",
                            }}
                          >
                            PERMS
                          </div>

                          <div
                            style={{
                              fontSize:
                                "12px",
                              opacity: 0.5,
                              marginTop:
                                "5px",
                            }}
                          >
                            Choose your perm style
                          </div>
                        </div>

                        <span>→</span>
                      </button>
                    )}
                  </div>

                  {/* Already added */}
                  {(selectedHaircut ||
                    selectedBeard ||
                    selectedPerm) && (
                    <div
                      style={{
                        marginTop: "18px",
                        paddingTop: "15px",
                        borderTop:
                          "1px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "10px",
                          opacity: 0.45,
                          letterSpacing:
                            "0.14em",
                        }}
                      >
                        ALREADY ADDED
                      </span>

                      <div
                        style={{
                          marginTop: "8px",
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "7px",
                        }}
                      >
                        {selectedHaircut && (
                          <span
                            style={{
                              border:
                                "1px solid rgba(255,255,255,0.12)",
                              borderRadius:
                                "100px",
                              padding:
                                "7px 10px",
                              fontSize:
                                "10px",
                            }}
                          >
                            HAIRCUT ·{" "}
                            {selectedHaircut}
                          </span>
                        )}

                        {selectedBeard && (
                          <span
                            style={{
                              border:
                                "1px solid rgba(255,255,255,0.12)",
                              borderRadius:
                                "100px",
                              padding:
                                "7px 10px",
                              fontSize:
                                "10px",
                            }}
                          >
                            BEARD ·{" "}
                            {selectedBeard}
                          </span>
                        )}

                        {selectedPerm && (
                          <span
                            style={{
                              border:
                                "1px solid rgba(255,255,255,0.12)",
                              borderRadius:
                                "100px",
                              padding:
                                "7px 10px",
                              fontSize:
                                "10px",
                            }}
                          >
                            PERM ·{" "}
                            {selectedPerm}
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </>
              )}

              {/* =========================================
                  STYLE SELECTION VIEW
              ========================================= */}
              {(view === "haircut" ||
                view === "beard" ||
                view === "perm") && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      onViewChange(
                        "add-service"
                      )
                    }
                    style={{
                      background: "none",
                      border: "none",
                      color: "inherit",
                      opacity: 0.6,
                      cursor: "pointer",
                      padding: "0",
                      marginBottom: "14px",
                      fontSize: "11px",
                      letterSpacing:
                        "0.12em",
                      fontWeight: 700,
                    }}
                  >
                    ← BACK TO SERVICES
                  </button>

                  <p className="service-modal-kicker">
                    {categoryName}
                  </p>

                  <h2 className="service-modal-title">
                    Choose Your Style
                  </h2>

                  <p className="service-modal-description">
                    Select a style to add it to
                    your appointment.
                  </p>

                  <div
                    style={{
                      display: "grid",
                      gap: "9px",
                      marginTop: "18px",
                    }}
                  >
                    {styleList.map(
                      (style) => {
                        const isSelected =
                          style.name ===
                          (view === "haircut"
                            ? selectedHaircut
                            : view === "beard"
                            ? selectedBeard
                            : selectedPerm);

                        return (
                          <button
                            key={style.name}
                            type="button"
                            onClick={() =>
                              chooseStyle(
                                style.name
                              )
                            }
                            style={{
                              display:
                                "flex",
                              alignItems:
                                "center",
                              gap: "12px",
                              width: "100%",
                              padding:
                                "10px",
                              borderRadius:
                                "13px",
                              border: isSelected
                                ? "1px solid rgba(255,255,255,0.7)"
                                : "1px solid rgba(255,255,255,0.1)",
                              background:
                                isSelected
                                  ? "rgba(255,255,255,0.1)"
                                  : "rgba(255,255,255,0.035)",
                              color:
                                "inherit",
                              cursor:
                                "pointer",
                              textAlign:
                                "left",
                            }}
                          >
                            <img
                              src={style.image}
                              alt={style.name}
                              style={{
                                width:
                                  "58px",
                                height:
                                  "58px",
                                objectFit:
                                  "cover",
                                borderRadius:
                                  "9px",
                                flexShrink: 0,
                              }}
                            />

                            <div
                              style={{
                                flex: 1,
                                minWidth: 0,
                              }}
                            >
                              <div
                                style={{
                                  fontSize:
                                    "12px",
                                  fontWeight:
                                    800,
                                }}
                              >
                                {style.name}
                              </div>

                              <div
                                style={{
                                  fontSize:
                                    "10px",
                                  opacity:
                                    0.45,
                                  marginTop:
                                    "4px",
                                  letterSpacing:
                                    "0.08em",
                                }}
                              >
                                {categoryName}
                              </div>
                            </div>

                            <strong
                              style={{
                                fontSize:
                                  "13px",
                              }}
                            >
                              {style.price}
                            </strong>

                            <span
                              style={{
                                width:
                                  "25px",
                                height:
                                  "25px",
                                borderRadius:
                                  "50%",
                                border:
                                  "1px solid rgba(255,255,255,0.18)",
                                display:
                                  "grid",
                                placeItems:
                                  "center",
                                fontSize:
                                  "11px",
                              }}
                            >
                              {isSelected
                                ? "✓"
                                : "→"}
                            </span>
                          </button>
                        );
                      }
                    )}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* =====================================================
   SUMMARY SERVICE ROW
===================================================== */

function SummaryServiceRow({
  category,
  name,
  price,
}: {
  category: string;
  name: string;
  price: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "12px",
        padding: "11px 0",
        borderBottom:
          "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <div
        style={{
          minWidth: 0,
          flex: 1,
        }}
      >
        <div
          style={{
            fontSize: "9px",
            letterSpacing: "0.13em",
            opacity: 0.45,
            marginBottom: "4px",
            fontWeight: 700,
          }}
        >
          {category}
        </div>

        <strong
          style={{
            fontSize: "14px",
          }}
        >
          {name}
        </strong>
      </div>

      <strong
        style={{
          fontSize: "13px",
          whiteSpace: "nowrap",
        }}
      >
        {price}
      </strong>
    </div>
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
          {haircutStyles.map(
            (style) => {
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

                    <h3>
                      {style.name}
                    </h3>

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
                  </div>
                </motion.article>
              );
            }
          )}
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
          {beardStyles.map(
            (style) => {
              const isSelected =
                selectedBeard ===
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
                      BEARD /{" "}
                      {style.number}
                    </p>

                    <h3>
                      {style.name}
                    </h3>

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
                  </div>
                </motion.article>
              );
            }
          )}
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

/* =====================================================
   PERMS PAGE
===================================================== */

function PermsPage({
  selectedPerm,
  onBack,
  onSelect,
  onBook,
}: {
  selectedPerm: string;
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
            Perms
            <br />
            <em>Find Your Texture.</em>
          </h1>

          <p className="haircuts-hero-text">
            From soft Korean waves to defined
            spiral curls, choose a perm style
            designed around your hair and
            personality.
          </p>
        </div>

        <div className="haircuts-hero-side">
          <span />

          <p>
            Texture,
            <br />
            redefined.
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
              <em>PERM.</em>
            </h2>
          </div>

          <p>
            Choose the perm style you want.
            Your selection will be added to
            your appointment request.
          </p>
        </div>

        <div className="haircut-grid">
          {permStyles.map(
            (style) => {
              const isSelected =
                selectedPerm ===
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
                      PERM /{" "}
                      {style.number}
                    </p>

                    <h3>
                      {style.name}
                    </h3>

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
                  </div>
                </motion.article>
              );
            }
          )}
        </div>
      </section>

      {selectedPerm && (
        <section className="selected-style-bar">
          <div>
            <span>
              YOUR SELECTED PERM
            </span>

            <strong>
              {selectedPerm}
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