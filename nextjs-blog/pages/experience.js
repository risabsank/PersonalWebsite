import Link from 'next/link';
import ExperienceCard from '../pages/ExperienceCard.js'; // Adjust path as necessary

export default function Experience() {
    return (
        <div style={{ position: 'relative' }}>
            <Link href="/navigation">
                <img
                    src="/images/back.png"
                    alt="Back Icon"
                    style={{
                        position: 'absolute',
                        top: '20px',
                        left: '20px',
                        width: '50px',
                        height: '50px',
                        cursor: 'pointer',
                        zIndex: 1000,
                    }}
                />
            </Link>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '80px 20px 20px' }}>
                <ExperienceCard
                    frontContent={
                        <div style={{ display: 'flex', flexDirection: 'column', padding: '10px' }}>
                            <img
                                src="/images/verizon.webp"
                                alt="Verizon"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    borderRadius: '10px' // Add rounded corners here
                                }}
                            />
                            <h2 style={{ margin: '10px 0 0 0', color: '#333' }}>Verizon</h2>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9em', color: '#666' }}>
                                <span>Cybersecurity Intern</span>
                                <span><i>Jun. 2024 - Aug. 2024</i></span>
                            </div>
                            <div className="hover-message" style={hoverMessageStyle}>
                                Tap to learn more
                            </div>
                        </div>
                    }
                    backContent={
                        <div style={{ color: '#fff', padding: '10px', textAlign: 'left', lineHeight: '1.5', fontSize: '0.95em' }}>
                            Description:
                            <ul style={{ paddingLeft: '20px', marginTop: '5px' }}>
                                <li>Streamlined the retrieval of server/system health data, centralizing information for monitoring</li>
                                <li>Developed a user-friendly UI and temporarily stored server health data in a database</li>
                            </ul>
                            <i>Tools Used: FastAPI, REST API, PostgreSQL, Piccolo, JavaScript, Python</i>
                        </div>
                    }
                />
                <ExperienceCard
                    frontContent={
                        <div style={{ display: 'flex', flexDirection: 'column', padding: '10px' }}>
                            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}> {/* Center the image */}
                                <img
                                    src="/images/mercury.svg"
                                    alt="Mercury"
                                    style={{
                                        width: '100%', // Adjust to fit container width
                                        height: 'auto',
                                        objectFit: 'cover',
                                        borderRadius: '10px' // Rounded corners
                                    }}
                                />
                            </div>
                            <div style={{ textAlign: 'left', width: '100%' }}> {/* Left-align text */}
                                <h2 style={{ margin: '10px 0 0 0', color: '#333' }}>Mercury Alert AI</h2>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9em', color: '#666' }}>
                                    <span>SWE Intern</span>
                                    <span><i>Sep. 2023 - Mar. 2024</i></span>
                                </div>
                            </div>
                        </div>
                    }
                    backContent={
                        <div style={{ color: '#fff', padding: '10px', textAlign: 'left', lineHeight: '1.5', fontSize: '0.95em' }}>
                            Description:
                            <ul style={{ paddingLeft: '20px', marginTop: '5px' }}>
                                <li>Implemented heat map and synthetic data generation to uncover failure cases and blindspots for models</li>
                                <li>Improved device accuracy by implementing of k-fold cross validation to enhance testing metrics</li>
                            </ul>
                            <i>Tools Used: AWS Cloud Tools, AWS Lambda, Python, DynamoDB, AWS Sagemaker, SQL</i>
                        </div>
                    }
                />
                <ExperienceCard
                    frontContent={
                        <div style={{ display: 'flex', flexDirection: 'column', padding: '10px' }}>
                            <img
                                src="/images/tr-letter-logo.webp"
                                alt="Triton Robotics"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    borderRadius: '10px', // Add rounded corners here
                                    paddingBottom: '50px', // Increase padding for more space
                                    paddingTop: '50px'
                                }}
                            />
                            <h2 style={{ margin: '10px 0 0 0', color: '#333' }}>Triton Robotics</h2>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9em', color: '#666' }}>
                                <span>Embedded Engineer</span>
                                <span><i>Sep. 2023 - Present</i></span>
                            </div>
                        </div>
                    }
                    backContent={
                        <div style={{ color: '#fff', padding: '10px', textAlign: 'left', lineHeight: '1.5', fontSize: '0.95em' }}>
                            Description:
                            <ul style={{ paddingLeft: '20px', marginTop: '5px' }}>
                                <li>Created an optimized class for the robot chassis subsystem, complete with documentation for easy use</li>
                                <li>Calculated wheel speeds, added angular offset for accurate heading, tuned PID with a feed-forward</li>
                            </ul>
                            <i>Tools Used: C++, Linux, Mbed Tools, Python</i>
                        </div>
                    }
                />
                <ExperienceCard
                    frontContent={
                        <div style={{ display: 'flex', flexDirection: 'column', padding: '10px' }}>
                            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}> {/* Center the image */}
                                <img
                                    src="/images/citmit.png"
                                    alt="Mercury"
                                    style={{
                                        width: '100%', // Adjust to fit container width
                                        height: 'auto',
                                        objectFit: 'cover',
                                        borderRadius: '10px', // Add rounded corners here
                                        paddingBottom: '35px', // Increase padding for more space
                                        paddingTop: '35px'
                                    }}
                                />
                            </div>
                            <div style={{ textAlign: 'left', width: '100%' }}> {/* Left-align text */}
                                <h2 style={{ margin: '10px 0 0 0', color: '#333' }}>CITMIT AI</h2>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9em', color: '#666' }}>
                                    <span>Front End/AI Developer</span>
                                    <span><i>Jun. 2023 - Mar. 2024</i></span>
                                </div>
                            </div>
                        </div>
                    }
                    backContent={
                        <div style={{ color: '#fff', padding: '10px', textAlign: 'left', lineHeight: '1.5', fontSize: '0.95em' }}>
                            Description:
                            <ul style={{ paddingLeft: '20px', marginTop: '5px' }}>
                                <li>Designed the UI/UX for the website, focusing on the calendar, dashboard, seup paages</li>
                                <li>Built a convolutional neural network to verify redlining diagrams against construction codes</li>
                            </ul>
                            <i>Tools Used: Python, React.js, JavaScript, HTML/CSS</i>
                        </div>
                    }
                />
                <ExperienceCard
                    frontContent={
                        <div style={{ display: 'flex', flexDirection: 'column', padding: '10px' }}>
                            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}> {/* Center the image */}
                                <img
                                    src="/images/esb-lab.png"
                                    alt="Mercury"
                                    style={{
                                        width: '90%', // Adjust to fit container width
                                        height: '90%',
                                        objectFit: 'cover',
                                        borderRadius: '10px', // Add rounded corners here
                                    }}
                                />
                            </div>
                            <div style={{ textAlign: 'left', width: '100%' }}> {/* Left-align text */}
                                <h2 style={{ margin: '10px 0 0 0', color: '#333' }}>ESB AI Lab</h2>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9em', color: '#666' }}>
                                    <span>Research Assistant</span>
                                    <span><i>Apr. 2024 - Present</i></span>
                                </div>
                            </div>
                        </div>
                    }
                    backContent={
                        <div style={{ color: '#fff', padding: '10px', textAlign: 'left', lineHeight: '1.5', fontSize: '0.95em' }}>
                            Description:
                            <ul style={{ paddingLeft: '20px', marginTop: '5px' }}>
                                <li>Optimized data loader by using generic variables to differentiate files with the same name</li>
                                <li>Implemented autonomous drone path navigation by sending signals to PX4 using MAVLink API</li>
                            </ul>
                            <i>Tools Used: Python, TensorFlow, C++, JSON</i>
                        </div>
                    }
                />
                <ExperienceCard
                    frontContent={
                        <div style={{ display: 'flex', flexDirection: 'column', padding: '10px' }}>
                            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}> {/* Center the image */}
                                <img
                                    src="/images/erl.png"
                                    alt="Mercury"
                                    style={{
                                        width: '93%', // Adjust to fit container width
                                        height: '93%',
                                        objectFit: 'cover',
                                        borderRadius: '10px', // Add rounded corners here
                                    }}
                                />
                            </div>
                            <div style={{ textAlign: 'left', width: '100%' }}> {/* Left-align text */}
                                <h2 style={{ margin: '10px 0 0 0', color: '#333' }}>Existential Robotics Lab</h2>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9em', color: '#666' }}>
                                    <span>Research Assistant</span>
                                    <span><i>Sep. 2023 - Present</i></span>
                                </div>
                            </div>
                        </div>
                    }
                    backContent={
                        <div style={{ color: '#fff', padding: '10px', textAlign: 'left', lineHeight: '1.5', fontSize: '0.95em' }}>
                            Description:
                            <ul style={{ paddingLeft: '20px', marginTop: '5px' }}>
                                <li>
                                    Developed a trajectory and lidar scanning system to enhance robot navigation</li>
                                <li>Implemented probabilistic roadmaps to boost the performance of pathfinding algorithms</li>
                            </ul>
                            <i>Tools Used: Python, PyBullet</i>
                        </div>
                    }
                />
            </div>
        </div>
    );
}

const hoverMessageStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: '0',
    transition: 'opacity 0.3s ease',
};

// CSS for hover
const cardHoverEffect = `
    .hover-message:hover {
        opacity: 1; // Show message when card is hovered
    }
`;