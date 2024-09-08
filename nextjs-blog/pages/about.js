import Link from 'next/link';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        padding: '20px',
        marginTop: '45px',
    },
    column: {
        flex: '1',
        margin: '10px',
    },
    card: {
        backgroundColor: '#ffffff',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '15px',
        textAlign: 'left',
    },
    profileImage: {
        borderRadius: '10px',
        width: '100%',
    },
    blockquote: {
        fontStyle: 'italic',
        borderLeft: '2px solid #ddd',
        paddingLeft: '15px',
        margin: '0',
        lineHeight: '1.5',
    },
    footer: {
        textAlign: 'right',
        fontSize: '0.9em',
        color: '#555',
        marginTop: '10px',
    },
    coursework: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
    },
    courseworkTag: {
        backgroundColor: '#f0f0f0',
        borderRadius: '5px',
        padding: '5px 10px',
    },
    backIcon: {
        position: 'absolute',
        top: '10px',
        left: '10px',
        width: '50px',
        height: '50px',
        cursor: 'pointer',
        zIndex: 1000,
    },
    cardContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    },
    text: {
        lineHeight: '1.5',
    },
    paragraph: {
        marginBottom: '10px',
    },
};

export default function About() {
    return (
        <div>
            <Link href="/navigation">
                <img
                    src="/images/back.png"
                    alt="Back Icon"
                    style={styles.backIcon}
                />
            </Link>
            {/* Main content */}
            <div style={styles.container}>
                <div style={{ ...styles.column, maxWidth: '50%' }}>
                    <div style={styles.cardContainer}>
                        <div style={styles.card}>
                            <img
                                src="/images/profile.png"
                                alt="Profile Picture"
                                style={styles.profileImage}
                            />
                        </div>
                        <div style={styles.card}>
                            <blockquote style={styles.blockquote}>
                                <p>"When life gives you lemonade, make lemons. Life will be all like, 'Whaaaat?'"</p>
                                <footer style={styles.footer}>- Phil Dunphy, Modern Family</footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
                <div style={{ ...styles.column, maxWidth: '50%' }}>
                    <div style={styles.card}>
                        <div style={styles.cardContent}>
                            <h2>Risab Sankar</h2>
                            <p style={{ ...styles.text, ...styles.paragraph }}>
                                <strong>University of California, San Diego</strong>
                                <br />B.S. Computer Engineering (GPA: 3.75) <br />
                                Intend to Graduate in June/December 2025
                            </p>
                            <p style={{ ...styles.text, ...styles.paragraph }}><strong>Relevant Coursework</strong></p>
                            <div style={styles.coursework}>
                                {['Machine Learning', 'Linear Systems Fundamentals', 'Operating Systems', 'Circuit Components', 'Data Structures & Algorithms', 'Data Analysis & Visualization', 'Probability & Random Processes'].map((course, index) => (
                                    <span key={index} style={styles.courseworkTag}>{course}</span>
                                ))}
                            </div>
                            <p style={{ ...styles.text, ...styles.paragraph }}><strong>Honors</strong><br />Regents' Scholar at UC San Diego</p>
                            <p style={{ ...styles.text, ...styles.paragraph }}>
                                <strong>Updates</strong> <br />
                                Getting through college a day at a time. <br />
                                Constantly trying to learn something new.
                            </p>
                            <p style={{ ...styles.text, ...styles.paragraph }}>
                                <strong>Contact</strong><br />
                                Email: rsankar@ucsd.edu<br />
                                LinkedIn: <a href="https://www.linkedin.com/in/risab-sankar-9136541aa/">https://www.linkedin.com/in/risab-sankar-9136541aa/</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}