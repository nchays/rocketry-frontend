import './home.css';

function Home() {
    return (
        <div>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Liberty Rocketry</title>
            <link rel="stylesheet" href="home.css" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            <link
                href="https://fonts.googleapis.com/css2?family=Audiowide&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
                rel="stylesheet"
            />

            <div className="header-section">
                <video autoPlay muted loop>
                    <source src="/media/home/30Srocketrywebvideofinal-compressed.mp4" type="video/mp4" />
                </video>
            </div>
            {/* Additional Content Section */}
            <section className="about-us">
                <h2>Welcome to Liberty Rocketry</h2>
                <p>
                    We are a passionate team of innovators, engineers, and space enthusiasts
                    dedicated to advancing rocketry technology and competing on the national
                    stage. Our mission is to inspire the next generation of space explorers
                    while pushing the boundaries of what is possible.
                </p>
            </section>
            <section className="highlights">
                <h2>Our Achievements</h2>
                <div className="highlights-container">
                    <div className="highlight-item">
                        <h3>National Rocketry Competition</h3>
                        <p>Ranked top 5 in the nation at the 2023 Spaceport America Cup.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;