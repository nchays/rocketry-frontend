import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { api } from '../api';

const MemberDetail = () => {
  const { id } = useParams();
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMember = async () => {
      try {
        setLoading(true);
        const response = await api.getMemberById(id);
        setMember(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch member details');
        setLoading(false);
        console.error(err);
      }
    };

    fetchMember();
  }, [id]);

  if (loading) return <div>Loading member details...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!member) return <div>Member not found</div>;

  return (
    <div className="member-detail">
      <div className="profile-header">
        <img 
          src={`/media/members/${member.profileImage}`} 
          alt={member.name} 
          className="large-profile-image"
          onError={(e) => {
            e.target.src = '/images/profiles/default.jpg';
          }}
        />
        <div className="profile-header-info">
          <h2>{member.name}</h2>
          <p className="member-role">{member.role}</p>
          <p>Member since: {new Date(member.joinDate).toLocaleDateString()}</p>
          {member.teamId && (
            <p>Team: <Link to={`/subteams/${member.teamId._id}`}>{member.teamId.name}</Link></p>
          )}
        </div>
      </div>
      
      <div className="profile-section">
        <h3>Bio</h3>
        <p>{member.bio}</p>
      </div>
      
      <div className="profile-section">
        <h3>Specialties</h3>
        <div className="specialties-container">
          {member.specialties.map((specialty, index) => (
            <span key={index} className="specialty-tag">{specialty}</span>
          ))}
        </div>
      </div>
      
      <div className="profile-section">
        <h3>Contact</h3>
        <p>Email: {member.email}</p>
      </div>
      
      <Link to="/members" className="back-btn">Back to Members</Link>
    </div>
  );
};

export default MemberDetail;