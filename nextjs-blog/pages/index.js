import { useState } from 'react';
import Link from 'next/link';

const slides = [
  { title: 'Hello!', content: "Tap to continue." },
  { title: 'My name is Risab Sankar!', content: 'Tap to continue.' },
  { title: 'Consider this a digital introduction!', content: 'Tap to continue.' },
];

const navigationLinks = [
  { text: 'About', url: '/about' },
  { text: 'Experience', url: '/experience' },
  { text: 'Projects', url: '/hobbies' },
  { text: 'Hobbies', url: '/page4' },
];

export default function Home() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [showNavigation, setShowNavigation] = useState(false);

  const handleSlideClick = () => {
    if (currentSlideIndex < slides.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    } else {
      setShowNavigation(true);
    }
  };

  return (
    <div
      id="slide"
      onClick={handleSlideClick}
      style={{
        cursor: 'pointer',
        height: '100vh',
        width: '100%',
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundImage: 'url(/images/notbackground.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        position: 'relative',
      }}
    >
      {showNavigation && (
        <>
          <Link href="/">
            <img
              src="/images/back.png"
              alt="Back Icon"
              style={{
                position: 'absolute',
                top: '10px',
                left: '10px',
                width: '50px',
                height: '50px',
                cursor: 'pointer',
                zIndex: 1000,
              }}
            />
          </Link>

          <div className="list-container" style={{ display: 'block' }}>
            {navigationLinks.map((link, index) => (
              <h1
                key={index}
                className="list-item"
                style={{
                  cursor: 'pointer',
                  transform: 'translateX(100%)',  // Start off-screen
                  animation: `slide-in 0.5s ease forwards ${index * 0.1}s`, // Slide-in effect with delay
                }}
                onClick={() => (window.location.href = link.url)}
              >
                {link.text}
              </h1>
            ))}
          </div>
        </>
      )}

      {!showNavigation && (
        <div className="content">
          <h1 style={{ fontSize: '3rem', margin: 0, paddingBottom: '20px' }}>
            {slides[currentSlideIndex].title}
          </h1>
          <p style={{ fontSize: '1.2rem', margin: 0 }}>
            {slides[currentSlideIndex].content}
          </p>
        </div>
      )}

      <style jsx>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);  // Start off-screen (right)
          }
          to {
            transform: translateX(0);     // End at normal position (center)
          }
        }

        .list-item {
          margin: 35px 0;  // Space between navigation links
        }
      `}</style>
    </div>
  );
}