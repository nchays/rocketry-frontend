import React from "react";
import "./gallery.css"; // Ensure CSS is imported properly

const Gallery = () => {
    return (
        <>
        <title>Gallery - Liberty Rocketry</title>
            <main>
                <section className="gallery-overview">
                    <h1>Gallery</h1>
                    <p>Explore the moments captured during our rocket launches, team-building activities, and more!</p>
                </section>

                {/* Image Grid */}
                <section className="gallery-grid">
                    {[
                        { src: "media/gallery/Rocket launch 1.jpg", alt: "Rocket Launch 1" },
                        { src: "media/gallery/Rocket launch 2.jpg", alt: "Rocket Launch 2" },
                        { src: "media/gallery/Team Photo.jpg", alt: "Team Photo" },
                        { src: "media/gallery/Rocket prep.jpg", alt: "Rocket Preparation" },
                        { src: "media/gallery/Launch site.jpg", alt: "Launch Site" },
                        { src: "media/gallery/Prototype.jpg", alt: "Prototype Build" }
                    ].map((image, index) => (
                        <div className="gallery-item" key={index}>
                            <img src={image.src} alt={image.alt} />
                        </div>
                    ))}
                </section>
            </main>
        </>
    );
};

export default Gallery;
