import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import "./ImageCarousel.css"

const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoSlidePaused, setIsAutoSlidePaused] = useState(false);

    // Function to handle next Image
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsAutoSlidePaused(true);
    };

    // Function to handle previous image
    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? images.length - 1 : prevIndex -1
    );
    setIsAutoSlidePaused(true);
    }

    // function to handle dot click
    const handleDotClick = (index) => {
        setCurrentIndex(index);
        setIsAutoSlidePaused(true);
    }

    // Auto slide functionality
    useEffect(() => {
        if(isAutoSlidePaused) return;
        
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 3000);

        return () => clearInterval(interval); // cleanup interval to unmount
    }, [isAutoSlidePaused, images.length]);

    // Reset auto-slide pause after user interaction
    useEffect(() => {
        if(isAutoSlidePaused) {
            const timeout = setTimeout(() => setIsAutoSlidePaused(false))
            return () => clearTimeout(timeout);
        }
    }, [isAutoSlidePaused]);

  return (
    <div className='carousel'>
        <div className="carousel-container">
            <img 
                src={images[currentIndex]} 
                alt={`carousel image ${currentIndex}`}
                className='carousel-image'
            />
            <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className='carousel-button prev-btn'
            >
                <FaChevronLeft />
            </button>
            <button
            onClick={handleNext}
            disabled={currentIndex === images.length - 1}
            className='carousel-button next-btn'
            >
                <FaChevronRight />
            </button>
        </div>

        {/* dot indicators */}
        <div className="dot-indicators">
            {images.map((_, index) => (
                <span
                key={index}
                onClick={() => handleDotClick(index)}
                className={`dot ${index === currentIndex ? "active" : ""}`}
                ></span>
            ))}
        </div>
    </div>
  );
};

export default ImageCarousel;