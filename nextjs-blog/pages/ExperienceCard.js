import { useState } from 'react';
import styles from '../styles/FlippableCard.module.css'; // Adjust path as necessary

export default function ExperienceCard({ frontContent, backContent }) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className={`${styles.card} ${styles.margin}`}>
            <div
                className={`${styles.inner} ${isFlipped ? styles.flipped : ''}`}
                onClick={() => setIsFlipped(!isFlipped)}
            >
                <div className={`${styles.face} ${styles.front}`}>
                    {frontContent}
                </div>
                <div className={`${styles.face} ${styles.back}`}>
                    {backContent}
                </div>
            </div>
        </div>
    );
}