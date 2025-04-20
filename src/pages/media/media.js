import React from "react";
import { Link } from "react-router-dom"; // Import the Link component
import "./media.css";

const Media = () => {
    return (
        <div> {/* Wrap the content in a parent element */}
            {/* Main Content */}
            <title>Media - Liberty Rocketry</title>
            <section className="content-section">
                <h1>Media Center</h1>
                <p>
                    Welcome to the Media page! Here, you can explore our latest live events and visual gallery showcasing our journey.
                </p>

                {/* Media Buttons */}
                <div className="media-links">
                    <Link to="/live" className="media-button">
                        Explore Live Events
                    </Link>
                    <Link to="/gallery" className="media-button">
                        Visit Our Gallery
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default Media;
