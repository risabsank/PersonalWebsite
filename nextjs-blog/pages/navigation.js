import { useState } from 'react';
import Link from 'next/link';

const navigationLinks = [
    { text: 'About', url: '/about' },
    { text: 'Experience', url: '/experience' },
    { text: 'Projects', url: '/page3' },
    { text: 'Hobbies', url: '/hobbies' },
];

export default function NavigationPage() {
    const [showNavigation, setShowNavigation] = useState(true);

    return (
        <div
            style={{
                height: '100vh',
                width: '100%',
                backgroundColor: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center', // Center align text
                backgroundImage: 'url(/images/notbackground.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                position: 'relative',
            }}
        >
            {/* Back Icon */}
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

            {/* Navigation Links with Slide-in Effect */}
            {showNavigation && (
                <div className="list-container" style={{ display: 'block' }}>
                    {navigationLinks.map((link, index) => (
                        <h1
                            key={index}
                            className="list-item"
                            style={{
                                cursor: 'pointer',
                                transform: 'translateX(100%)',  // Initial off-screen (right)
                                animation: `slide-in 0.5s ease forwards ${index * 0.1}s`, // Delay based on index
                            }}
                            onClick={() => (window.location.href = link.url)}
                        >
                            {link.text}
                        </h1>
                    ))}
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
          margin: 35px 0;  // Adds space between links
        }
      `}</style>
        </div>
    );
}