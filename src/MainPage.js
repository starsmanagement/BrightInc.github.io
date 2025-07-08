// src/MainPage.js
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function MainPage() {
  const navigate = useNavigate();
  const [slideIndex, setSlideIndex] = useState(0);
  const [techSlideIndex, setTechSlideIndex] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const carouselRef = useRef(null);
  const techCarouselRef = useRef(null);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${slideIndex * 100}%)`;
    }
    if (techCarouselRef.current) {
      techCarouselRef.current.style.transform = `translateX(-${techSlideIndex * 100}%)`;
    }
  }, [slideIndex, techSlideIndex]);

  const moveSlide = (dir) => {
    const totalSlides = 4;
    setSlideIndex((prev) => (prev + dir + totalSlides) % totalSlides);
  };

  const moveTechSlide = (dir) => {
    const totalTechSlides = 3;
    setTechSlideIndex((prev) => (prev + dir + totalTechSlides) % totalTechSlides);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    alert('Form submitted!');
    e.target.reset();
  };


  return (
    <>
      <header>
        <div className="container">
          <a href="#home">
            <img src="images/logo.png" alt="Brightinc Logo" className="logo" />
          </a>
          <button className="nav-toggle" onClick={() => setIsNavOpen(!isNavOpen)}>
            &#9776;
          </button>
          <nav className={isNavOpen ? 'open' : ''}>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#clients">Clients</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#gallery-preview">Gallery</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="home" className="hero">
        <h1>Welcome To Bright INC</h1>
        <img src="/images/t_logo.png" alt="..." />
        <div className="hero-content">
          <h2>Connecting Talent with Opportunity</h2>
          <p>Your trusted Career partner for a smarter workforce.</p>
        </div>
        <div className="flex-container">
          <div className="flex-child mision">
            <h3>MISSION</h3>
            <p>By focusing on stringent standards of quality, training, and the use of advanced technology...</p>
          </div>
          <div className="flex-child vision">
            <h3>VISION</h3>
            <p>Our Vision is to become a seamless extension of our clients operations...</p>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <h2>About Us</h2>
          <div className="founder-card">
            <div className="founder-text">
              <h3>Founder: Ravi Shankar N</h3>
              <p>
                Academically, I completed my B.com in 2019. I come from humble background, where stability and structure were the norms. Naturally,
                after my graduation, everyone looked up to me, expecting that I would follow the same path. But deep down, I knew that wasn’t for me.

              </p> <br />
              <p>Worked as a amazon delivery excecuitve, but my dreams did not let me settle. Eventually i  moved to stars management and i decided to
                give it a shot</p>  <br />
              <p>I’ve always believed that true leadership isn’t learned through theory, seminars, or workshops. It comes from practical experience—from
                facing the real-world challenges, from failing and correcting yourself. That’s exactly what I did.
              </p> <br />
              <p>Today, I’ve reached a point where I can say: I am living my dream. I’m doing what I love, I’ve grown as a person, and I see a future
                where anything is possible.
              </p>              <div className='starss'>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <div className="what-wedo">
                <h3>What We Do</h3>
                <p>We provide unparalleled growth opportunities to fresh graduates and post graduates through our systematic
                  mentoring and career growth structure.
                  The state-of-the-art growth structure and the development process of each individual has helped us create
                  innumerable success stories over the years.</p>
                <p>
                  While providing opportunities to youngsters is our key asset, Bright Inc also services
                  its clients by taking their products and
                  services directly to the ultimate consumer through its dedicated teams. This combines the information of
                  an advertisement with the reassurance
                  of word-of-mouth recommendations and customer service that we feel is second to none. It also provides
                  immense exposure to our business associates
                  of the real-time environment.
                </p>                <div class="t2">
                  <h4>For our clients, we provide a simple and effective marketing strategy</h4>
                  <p><i className="fa-solid fa-circle-check"></i> &nbsp;We provide a professional, dedicated sales and marketing team for their campaigns
                    We create exposure of their product or service whilst maximizing the impact with a cost effective method</p>
                  <h4>For the consumer, we provide quality and convenience</h4>
                  <p><i className="fa-solid fa-circle-check"></i> &nbsp; Quality products and services conveniently accessed and tailored to their individual needs and wants
                    Unrivalled levels of customer service, providing customer satisfaction</p>
                  <h4>For our people, we provide unlimited career opportunities</h4>
                  <p><i className="fa-solid fa-circle-check"></i> &nbsp;Structured ongoing training and continual support through a network currently spanning over 21 countries
                    Promotions determined by measured achievements</p>
                </div>
              </div>
            </div>
            <div className="founder-img">
              <img src="images/Ravi.jpeg" alt="Ravi Shankar N" />
            </div>
          </div>
        </div>
      </section>

      <div className="client" id="clients">
        <section className="client-section container">
          <h2>Our Top Banking & Insurance Clients</h2>
          <div className="carousel-container">
            <div className="carousel">
              <div className="carousel-track" ref={carouselRef}>
                <div className="carousel-slide"><img src="images/aubank.jpg" alt="aubank Bank" /></div>
                <div className="carousel-slide"><img src="images/HDFC.jpg" alt="HDFC Bank" /></div>
                <div className="carousel-slide"><img src="images/indusind-bank.png" alt="IndusInd Bank" /></div>
                <div className="carousel-slide"><img src="images/icic.jpg" alt="icic Bank" /></div>
              </div>
              <div className="carousel-nav">
                <button onClick={() => moveSlide(-1)}>&#10094;</button>
                <button onClick={() => moveSlide(1)}>&#10095;</button>
              </div>
            </div>
          </div>
        </section>

        <section className="client-section container">
          <h2>Our Top Technology Clients</h2>
          <div className="carousel-container">
            <div className="carousel">
              <div className="carousel-track" ref={techCarouselRef}>
                <div className="carousel-slide"><img src="images/google360.png" alt="Google" /></div>
                <div className="carousel-slide"><img src="images/Bharti_AXA_logo.png" alt="Bharti AXA" /></div>
                <div className="carousel-slide"><img src="images/webdesign.png" alt="webdesign" /></div>
              </div>
              <div className="carousel-nav">
                <button onClick={() => moveTechSlide(-1)}>&#10094;</button>
                <button onClick={() => moveTechSlide(1)}>&#10095;</button>
              </div>
            </div>
          </div>
        </section>

      </div>

      <section id="careers">
        <div className="container">
          <h2>Careers</h2>
          <div className="career-row">
            <div className="career-description">
              <p>
                The career opportunities available to grow are tremendous with a massive brand exposure. In retrospect to
                the ever progressing demands and the spending power of the consumer, there is always a huge demand for
                better professionals to create brand exposure in a target specific market.
              </p>
              <p>
                In a unique business like ours, one truly gets exposed to the potential of being successful. With guaranteed
                promotion based on performance and achievement, we help you to achieve your targets with efficient training
                programs from time to time. We invest in our people to maximize their potential to develop their attitude,
                energy and ability.
              </p>
              <p>
                The ultimate opportunity extends to all involved to eventually grow into the ability of running their own
                individual companies. If you are looking for a challenge and a real business opportunity, you’ve come to the
                right place. We are an ambitious and successful growing team which is constantly looking for new people to
                work with us.
              </p>            </div>
            <div className="career-promo">
              <h3>Five Levels of Promotions</h3>
              <ul className="promotion-levels">
                <li><i className="fas fa-plus"></i> BUSINESS ASSOCIATE</li>
                <li><i className="fas fa-plus"></i> HRD TRAINER</li>
                <li><i className="fas fa-plus"></i> EXECUTIVE CREW LEADER</li>
                <li><i className="fas fa-plus"></i> ASSISTANT MANAGER</li>
                <li><i className="fas fa-plus"></i> SBU HEAD</li>
              </ul>
            </div>
          </div>

          <div className="container">
            <p>Take a glimpse of our vibrant team culture and past events.</p>
            <div className="gallery-grid">
              <img src="images/HRD TRAINER.png" alt="TRAINER" />
              <img src="images/CREW LEADER.png" alt="CREW" />
              <img src="images/Certification.png" alt="Certification" />
              <img src="images/ASSTOWNER.png" alt="ASSTOWNER" />
              <img src="images/OWNER.png" alt="OWNER" />
            </div>
          </div>
        </div>
      </section>

      <section id="gallery-preview" className="gallery-preview">
        <div className="container">
          <h2>Gallery</h2>
          <p>Take a glimpse of our vibrant team culture and past events.</p>
          <div className="gallery-grid">
            <img src="images/g9.jpg" alt="Event 1" />
            <img src="images/g2.jpeg" alt="Event 2" />
            <img src="images/g3.jpeg" alt="Event 3" />
          </div>
          <a href="#" className="view-more" onClick={() => navigate("/Gallery")} >View Full Gallery</a>
        </div>
      </section>

      {/* 
  <Router>
    <Routes>
      <Route path="/" element={
        <>
        </>
      } />
      <Route path="/gallery" element={<GalleryPage />} />
    </Routes>
  </Router> */}


      <footer>
        <div className="footer-container">
          <div className="footer-column">
            <h3>Upcoming Events</h3>
          </div>

          <div className="footer-column">
            <h3>Contact us</h3>
            <p><i className="fas fa-map-marker-alt"></i> Bright Inc #301, 3rd Floor, Shanthi Nagar, Bengaluru 560027.</p>
            <p><i className="fas fa-phone-alt"></i> 7349088787</p>
            <p><i className="fas fa-envelope"></i> brightinchr@gmail.com</p>
          </div>

          <div className="footer-column">
            <h3>Contact Form</h3>
            <form onSubmit={handleSubmit} className="footer-form">
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>

        <a
          href="https://wa.me/7349088787"
          className="whatsapp-float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="images/whatsapp.png" alt="Chat on WhatsApp" />
        </a>


        <div className="footer-bottom">
          <p>Copyrights © 2025 All Rights Reserved.</p>
          <p>Developed by <a href="#home">Santosh</a>.</p>
        </div>
      </footer>

    </>
  );
}

export default MainPage;
