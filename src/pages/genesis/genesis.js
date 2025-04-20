import React from 'react';
import './genesis.css';

function Genesis() {
    return (
        <>
        <title>Genesis - Liberty Rocketry</title>
            <main>
                <section className="project-overview">
                <h1>Genesis Project</h1>
                <p>
                    The Genesis Project is our high-altitude experimental rocket designed to
                    push the boundaries of modern rocketry.
                </p>
                {/* Rocket Image */}
                <img
                    src="media/genesis/genesis-team-in-action.jpg"
                    alt="Genesis experimental rocket"
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
                    Stay tuned for updates on Genesis's progress as we break new barriers in
                    rocketry.
                </p>
                {/* Prototype Flight Image */}
                <img
                    src="media/genesis/genesis-blastoff.jpg"
                    alt="Genesis rocket prototype flight"
                    className="project-image"
                />
                {/* Video Section */}
                <div className="project-video-container">
                    <div className="project-video-header">
                    Watch the Genesis Rocket Prototype in Action
                    </div>
                    {/* <video controls="" className="project-video">
                    <source src="media/genesis/ERSA_Competition_2023.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                    </video> */}
                    <video autoPlay muted loop controls="true">
                        <source src="media/genesis/ERSA_Competition_2023_Compressed.mp4" type="video/mp4" />
                    </video>
                </div>
                </section>
            </main>
        </>
    );
}

export default Genesis;