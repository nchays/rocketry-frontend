import React from "react";
import "./live.css";

const LiveEvents = () => {
    return (
        <div>
            <title>Live - Liberty Rocketry</title>
            <main>
                <section className="media-overview">
                    <h1>Live Events</h1>
                    <p>Watch our rocketry club in action! Stay tuned for live streams and recordings of our exciting launches.</p>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/a9effMO0Z-I?si=w1AWyDfV09kWsCU5&autoplay=1"
                        title="Liberty Rocketry Live Stream"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        
                    ></iframe>
                </section>
            </main>
        </div>
    );
};

export default LiveEvents;