import React from "react";
import './trinity.css';

function Trinity() {
    return (
        <>
        <title>Trinity - Liberty Rocketry</title>
            <main>
                <section className="project-overview">
                <h1>Trinity Project</h1>
                <p>
                    The Trinity Project is our high-altitude experimental rocket designed to
                    push the boundaries of modern rocketry.
                </p>
                {/* Rocket Image */}
                <img
                    src="media/trinity/Rocket example 2.jpg"
                    alt="Trinity experimental rocket"
                    className="project-image"
                />
                <ul>
                    <li>
                    <strong>Focus:</strong> Advanced materials and aerodynamics.
                    </li>
                    <li>
                    <strong>Goal:</strong> To reach an altitude of 100,000 feet.
                    </li>
                    <li>
                    <strong>Milestone:</strong> Completed the first prototype flight with
                    success.
                    </li>
                </ul>
                <p>
                    Stay tuned for updates on Trinity's progress as we break new barriers in
                    rocketry.
                </p>
                {/* Prototype Flight Image */}
                <img
                    src="media/trinity/Rocket example 1.jpg"
                    alt="Trinity rocket prototype flight"
                    className="project-image"
                />
                {/* Video Section */}
                <div className="project-video-container">
                    <div className="project-video-header">
                    Watch the Trinity Rocket Prototype in Action
                    </div>
                    <video controls="" className="project-video">
                    <source src="media/trinity/home-rocket-vid.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                    </video>
                </div>
                </section>
            </main>
            </>

    );
};

export default Trinity;