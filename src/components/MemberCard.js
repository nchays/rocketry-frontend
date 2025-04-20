import React from 'react';
import { Link } from 'react-router-dom';

const MemberCard = ({ member }) => {
  return (
    <div className="member-card">
      <img 
        src={`/media/members/${member.profileImage}`} 
        alt={member.name} 
        className="profile-image"
        onError={(e) => {
          e.target.src = '/images/profiles/default.jpg';
          console.log(e);
        }}
      />
      <h3>{member.name}</h3>
      <p className="member-role">{member.role}</p>
      {member.teamId && (
        <p className="member-team">Team: {member.teamId.name}</p>
      )}
      <div className="member-specialties">
        {member.specialties.map((specialty, index) => (
          <span key={index} className="specialty-tag">{specialty}</span>
        ))}
      </div>
      <Link to={`/members/${member._id}`} className="view-profile-btn">
        View Profile
      </Link>
    </div>
  );
};

export default MemberCard;