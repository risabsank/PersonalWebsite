import Link from 'next/link';

export default function Hobbies() {
    return (
        <div style={{ padding: '20px' }}>
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
                    }}
                />
            </Link>

            <h1 style={{ textAlign: 'center', marginTop: '70px', fontSize: '3em', color: '#333' }}>
                My Hobbies
            </h1>

            <div style={gridStyle}>
                <div style={hobbyGridItem('/images/steph-curry.jpg')}>
                    <span style={overlayTextStyle}><b>Basketball</b></span>
                </div>
                <div style={hobbyGridItem('/images/music.webp')}>
                    <span style={overlayTextStyle}><b>Music</b></span>
                </div>
                <div style={hobbyGridItem('/images/best-boat-movies.png')}>
                    <span style={overlayTextStyle}><b>Movies</b></span>
                </div>
                <div style={hobbyGridItem('/images/photo.jpg')}>
                    <span style={overlayTextStyle}><b>Photography</b></span>
                </div>
                {/* Add more hobby grid items here */}
            </div>
        </div>
    );
}

// Styles
const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    justifyContent: 'center', // Center grid items horizontally
    alignItems: 'center', // Center grid items vertically if the container has enough height
    padding: '50px 20px',
};

const hobbyGridItem = (imageUrl) => ({
    position: 'relative',
    width: '100%',
    height: '300px',
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '10px',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
});

const overlayTextStyle = {
    fontSize: '2em',
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '10px 20px',
    borderRadius: '5px',
};