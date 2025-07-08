import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Gallery.css';
import './App.css'; // for navbar styling
import Modal from 'react-modal';
import logo from './images/logo.png'; // if you use imported image
import img1 from './images/img1.jpeg';
import img2 from './images/img2.jpeg';
import img3 from './images/img3.jpeg';
import img4 from './images/img4.jpeg';
import img5 from './images/img5.jpg';
import img6 from './images/img6.jpg';
import img7 from './images/img7.jpg';
import img8 from './images/img8.jpg';
import img9 from './images/img9.jpg';
import img10 from './images/img10.jpg';
import img11 from './images/img11.jpg';
import img13 from './images/img13.jpg';
import img14 from './images/img14.jpg';
import img15 from './images/img15.jpg';
import img16 from './images/img16.jpg';
import img17 from './images/img17.jpg';
import img18 from './images/img18.jpg';
import img19 from './images/img19.jpg';
import img20 from './images/img20.jpg';
import img21 from './images/img21.jpg';


// image imports ...
const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img13, img14, img15, img16, img17, img18, img19, img20, img21];Modal.setAppElement('#root');

function GalleryPage() {
  const [index, setIndex] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const timerRef = useRef(null);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + images.length) % images.length);
  const selectImage = (i) => setIndex(i);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    timerRef.current = setInterval(nextSlide, 4000);
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <>
      {/* ✅ Navbar */}
      <header>
        <div className="container">
          <a href="/">
            <img src={logo} alt="Brightinc Logo" className="logo" />
          </a>
          <button className="nav-toggle" onClick={() => setIsNavOpen(!isNavOpen)}>
            &#9776;
          </button>
          <nav className={isNavOpen ? 'open' : ''}>
            <ul>
              <li><a href="/" onClick={() => setIsNavOpen(false)}>Home</a></li>
              <li><a href="/#about" onClick={() => setIsNavOpen(false)}>About Us</a></li>
              <li><a href="/#clients" onClick={() => setIsNavOpen(false)}>Clients</a></li>
              <li><a href="/#careers" onClick={() => setIsNavOpen(false)}>Careers</a></li>
              <li><a href="/#gallery-preview" onClick={() => setIsNavOpen(false)}>Gallery</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* ✅ Gallery */}
      <div className="gallery-container">
        <div className="slider" onMouseEnter={() => clearInterval(timerRef.current)} onMouseLeave={() => timerRef.current = setInterval(nextSlide, 4000)}>
          <button className="arrow left" onClick={prevSlide}>❮</button>
          <img src={images[index]} alt={`Slide ${index + 1}`} className="slider-image" onClick={openModal} />
          <button className="arrow right" onClick={nextSlide}>❯</button>
        </div>

        <div className="thumbnails">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Thumbnail ${i + 1}`}
              className={`thumbnail ${i === index ? 'active' : ''}`}
              onClick={() => selectImage(i)}
            />
          ))}
        </div>
      </div>

    </>
  );
}

export default GalleryPage;
