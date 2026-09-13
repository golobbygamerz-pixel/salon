import { useState, type FormEvent } from "react";

import { motion } from "framer-motion";

import heroImage from "./IMG_0660.jpeg";

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

    description: "Refresh, cleanse and prepare your hair for the perfect finish.",

    image:

      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=85",

  },

  {

    title: "Premium Care",

    price: "₹699",

    description: "A complete grooming experience using premium products.",

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

    text: "Best haircut I've had in a long time. The attention to detail is insane.",

  },

  {

    name: "Rahul",

    text: "Clean space, great vibe and the barber actually understands the style you want.",

  },

  {

    name: "Karan",

    text: "Premium experience without the unnecessary attitude. Definitely coming back.",

  },

];

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  const [date, setDate] = useState("");

  const [time, setTime] = useState("");

  const [selectedService, setSelectedService] = useState("Haircut");

  const scrollTo = (id: string) => {

    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

    setMenuOpen(false);

  };

  const bookAppointment = (e?: FormEvent) => {

    e?.preventDefault();

    const message =

      `*NEW APPOINTMENT REQUEST*\n\n` +

      `Service: ${selectedService}\n` +

      `Date: ${date || "Not selected"}\n` +

      `Time: ${time || "Not selected"}\n\n` +

      `I would like to book an appointment.`;

    window.open(

      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,

      "_blank"

    );

  };

  return (

    <main>

      {/* NAVBAR */}

      <header className="navbar">

        <div className="nav-inner">

          <button className="logo" onClick={() => scrollTo("home")}>

            THE CUT

            <span>MEN'S HAIR ARTIST</span>

          </button>

          <nav className={menuOpen ? "nav-links open" : "nav-links"}>

            <button onClick={() => scrollTo("home")}>Home</button>

            <button onClick={() => scrollTo("services")}>Services</button>

            <button onClick={() => scrollTo("about")}>About</button>

            <button onClick={() => scrollTo("gallery")}>Gallery</button>

            <button onClick={() => scrollTo("contact")}>Contact</button>

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

        <img className="hero-bg" src={heroImage} alt="Men's haircut" />

        <div className="hero-overlay" />

        <div className="hero-content">

          <motion.div

            className="hero-copy"

            initial={{ opacity: 0, y: 30 }}

            animate={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.8 }}

          >

            <p className="eyebrow">MORE THAN A HAIRCUT</p>

            <h1>

              Premium Cuts,

              <br />

              <span>Modern Style.</span>

            </h1>

            <p className="hero-description">

              Expert haircuts, clean fades, and personalized grooming —

              designed for the modern man.

            </p>

            <div className="hero-features">

              <div>

                <strong>✂</strong>

                <span>Expert<br />Barbers</span>

              </div>

              <div>

                <strong>☆</strong>

                <span>Premium<br />Products</span>

              </div>

              <div>

                <strong>✓</strong>

                <span>Clean &<br />Safe</span>

              </div>

            </div>

          </motion.div>

          {/* GLASS BOOKING CARD */}

          <motion.div

            className="booking-glass"

            initial={{ opacity: 0, x: 50 }}

            animate={{ opacity: 1, x: 0 }}

            transition={{ duration: 0.8, delay: 0.2 }}

          >

            <div className="glass-top">

              <p className="eyebrow">BOOK APPOINTMENT</p>

              <button onClick={() => scrollTo("home")}>×</button>

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

                onChange={(e) => setDate(e.target.value)}

              />

              <b>›</b>

            </div>

            <div className="glass-field">

              <span>◷</span>

              <input

                type="time"

                value={time}

                onChange={(e) => setTime(e.target.value)}

              />

              <b>›</b>

            </div>

            <button className="glass-book" onClick={() => bookAppointment()}>

              Book Now

              <span>→</span>

            </button>

          </motion.div>

        </div>

      </section>

      {/* SERVICES */}

      <section id="services" className="section services-section">

        <div className="section-heading">

          <div>

            <p className="eyebrow">OUR SERVICES</p>

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

              initial={{ opacity: 0, y: 30 }}

              whileInView={{ opacity: 1, y: 0 }}

              viewport={{ once: true }}

              transition={{ delay: index * 0.08 }}

              onClick={() => setSelectedService(service.title)}

            >

              <div className="service-image">

                <img src={service.image} alt={service.title} />

              </div>

              <div className="service-info">

                <div>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                </div>

                <div className="service-bottom">

                  <strong>{service.price}</strong>

                  <button>→</button>

                </div>

              </div>

            </motion.article>

          ))}

        </div>

      </section>

      {/* ABOUT */}

      <section id="about" className="statement-section">

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

            We're not just cutting hair, we're building confidence.

            Step in, relax, and let our experts take care of the rest.

          </p>

          <button className="outline-button" onClick={() => scrollTo("booking")}>

            Book Your Experience →

          </button>

        </div>

      </section>

      {/* GALLERY */}

      <section id="gallery" className="section gallery-section">

        <div className="section-heading">

          <div>

            <p className="eyebrow">SELECTED WORK</p>

            <h2>Crafted With Precision.</h2>

          </div>

        </div>

        <div className="gallery-grid">

          {gallery.map((image, index) => (

            <motion.div

              className={`gallery-item gallery-${index + 1}`}

              key={image}

              initial={{ opacity: 0 }}

              whileInView={{ opacity: 1 }}

              viewport={{ once: true }}

            >

              <img src={image} alt="Barber work" />

            </motion.div>

          ))}

        </div>

      </section>

      {/* REVIEWS */}

      <section className="section reviews-section">

        <div className="reviews-title">

          <p className="eyebrow">CLIENT WORDS</p>

          <h2>Don't Just Take<br />Our Word For It.</h2>

        </div>

        <div className="reviews-grid">

          {reviews.map((review) => (

            <div className="review-card" key={review.name}>

              <div className="stars">★★★★★</div>

              <p>"{review.text}"</p>

              <span>— {review.name}</span>

            </div>

          ))}

        </div>

      </section>

      {/* BOOKING */}

      <section id="booking" className="booking-section">

        <div className="booking-wrapper">

          <div>

            <p className="eyebrow">READY FOR A CHANGE?</p>

            <h2>

              Your Best Look

              <br />

              Starts Here.

            </h2>

            <p>

              Choose your service, select a convenient time and

              we'll take care of the rest.

            </p>

          </div>

          <form className="booking-form" onSubmit={bookAppointment}>

            <label>Select Service</label>

            <select

              value={selectedService}

              onChange={(e) => setSelectedService(e.target.value)}

            >

              {services.map((service) => (

                <option key={service.title}>{service.title}</option>

              ))}

            </select>

            <label>Date</label>

            <input

              type="date"

              value={date}

              onChange={(e) => setDate(e.target.value)}

            />

            <label>Time</label>

            <input

              type="time"

              value={time}

              onChange={(e) => setTime(e.target.value)}

            />

            <button type="submit">

              Continue on WhatsApp →

            </button>

          </form>

        </div>

      </section>

      {/* CONTACT */}

      <section id="contact" className="contact-section">

        <div>

          <p className="eyebrow">VISIT THE CUT</p>

          <h2>Good Hair.<br />Better Days.</h2>

        </div>

        <div className="contact-info">

          <div>

            <span>LOCATION</span>

            <p>Your City, India</p>

          </div>

          <div>

            <span>OPENING HOURS</span>

            <p>MON — SAT · 10AM — 9PM</p>

          </div>

          <div>

            <span>CONTACT</span>

            <p>WhatsApp for appointments</p>

          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer>

        <div className="footer-logo">

          THE CUT

          <span>MEN'S HAIR ARTIST</span>

        </div>

        <div className="footer-links">

          <button onClick={() => scrollTo("home")}>Home</button>

          <button onClick={() => scrollTo("services")}>Services</button>

          <button onClick={() => scrollTo("about")}>About</button>

          <button onClick={() => scrollTo("gallery")}>Gallery</button>

          <button onClick={() => scrollTo("contact")}>Contact</button>

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

export default App;