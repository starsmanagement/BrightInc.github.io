import React, { useState } from 'react';
import Modal from 'react-modal';
import './Gallery.css';

const images = [
  { id: 1, src: '/images/g1.jpg', alt: 'Image 1' },
  { id: 2, src: '/images/t_logo.png', alt: 'Image 2' },
  { id: 3, src: 'https://via.placeholder.com/300?text=3', alt: 'Image 3' },
  { id: 4, src: 'https://via.placeholder.com/300?text=4', alt: 'Image 4' },
];

Modal.setAppElement('#root');

function Gallery() {
  const [showGallery, setShowGallery] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="gallery-wrapper">
      {!showGallery ? (
        <button className="show-gallery-btn" onClick={() => setShowGallery(true)}>
          View Gallery
        </button>
      ) : (
        <div className="gallery">
          {images.map((img) => (
            <img
              key={img.id}
              src={img.src}
              alt={img.alt}
              className="gallery-image"
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      )}

      <Modal
        isOpen={!!selectedImage}
        onRequestClose={() => setSelectedImage(null)}
        contentLabel="Image Modal"
        className="modal"
        overlayClassName="overlay"
      >
        {selectedImage && (
          <div>
            <img src={selectedImage.src} alt={selectedImage.alt} className="modal-image" />
            <button onClick={() => setSelectedImage(null)} className="close-button">Close</button>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default Gallery;