// waymaker.js

import React from 'react';
import {Link} from "react-router-dom";
import './about.css';

// waymaker.js
function About() {
    return (
        <div>

            <>
                <title>About - Liberty Rocketry</title>

                <section className="about-overview">
                    <h1>About Liberty Rocketry</h1>
                    <p>
                        Welcome to Liberty University Rocketry Club, where innovation meets
                        determination. We are a community of students passionate about rocketry,
                        engineering, and advancing space exploration. Our club fosters hands-on
                        experience, teamwork, and professional growth while pushing technological
                        boundaries in collegiate competitions and beyond.
                    </p>
                </section>
                <section className="subpage-links">
                    <h2>Learn More About Us</h2>
                    <div className="links-container">
                        <Link className="link-card" to="/history">
                            <h3>History</h3>
                            <p>
                                Discover how our club was founded and the milestones we've achieved
                                over the years.
                            </p>
                        </Link>
                        <Link className="link-card" to="/members">
                            <h3>Members</h3>
                            <p>
                                Meet the brilliant minds and dedicated team members behind Liberty
                                Rocketry.
                            </p>
                            </Link>
                        <Link className="link-card" to="/subteams">
                            <h3>Subteams</h3>
                            <p>
                                Explore the specialized teams that make our rocketry projects a
                                success.
                            </p>
                        </Link>
                    </div>
                </section>
            </>
        </div>
    );
}
export default About;
