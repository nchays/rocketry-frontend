import React from "react";
import "./members.css";

//This system was a really intelligent way to import photos inside src
// import name from './media/person1.jpg';

const Members = () => {
  return (
    <div>
      <title>Members - Liberty Rocketry</title>
      <section className="content-section">
        <h1>Our Members</h1>
        <p>
          The Liberty University Rocketry Club is powered by a diverse group of passionate students, including engineers, designers, programmers, and business experts. Together, we collaborate to design, build, and launch rockets.
        </p>
        <p>
          Our team consists of several subteams specializing in propulsion, payload design, avionics, and project management. This structure allows us to tackle complex challenges while fostering individual growth and expertise.
        </p>
        <div className="members-grid">
          {[
            {
              name: "John Smith",
              image: 'media/members/person1.jpg',
              description:
                "John is the team captain and lead engineer, specializing in propulsion systems. He has been a member since 2022.",
            },
            {
              name: "Emily Johnson",
              image: 'media/members/person2.jpg',
              description:
                "Emily is the aerodynamics specialist, responsible for designing and testing innovative rocket structures.",
            },
            {
              name: "Michael Lee",
              image: 'media/members/person3.jpg',
              description:
                "Michael oversees avionics and software integration, ensuring seamless communication between systems.",
            },
            {
              name: "Sarah Brown",
              image: 'media/members/person4.jpg',
              description:
                "Sarah handles project management and logistics, keeping the team on schedule and under budget.",
            },
            {
              name: "David Williams",
              image: 'media/members/person5.jpg',
              description:
                "David is a materials expert who focuses on selecting and testing components for strength and durability.",
            },
          ].map((member, index) => (
            <div className="member" key={index}>
              <img src={member.image} alt={member.name} />
              <div className="member-info">
                <h2>{member.name}</h2>
                <p>{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Members;
