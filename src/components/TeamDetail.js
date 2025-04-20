import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { api } from '../api';
import MemberCard from './MemberCard';

const TeamDetail = () => {
  const { id } = useParams();
  const [teamData, setTeamData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        setLoading(true);
        const response = await api.getTeamWithMembers(id);
        setTeamData(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch team details');
        setLoading(false);
        console.error(err);
      }
    };

    fetchTeamData();
  }, [id]);

  if (loading) return <div>Loading team details...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!teamData) return <div>Team not found</div>;

  const { team, members } = teamData;

  return (
    <div className="team-detail">
      <div className="team-header">
        <h2>{team.name}</h2>
        <p className="established-date">Established: {new Date(team.established).toLocaleDateString()}</p>
      </div>
      
      <div className="team-section">
        <h3>About</h3>
        <p>{team.description}</p>
      </div>
      
      <div className="team-section">
        <h3>Current Project</h3>
        <p>{team.project}</p>
      </div>
      
      <div className="team-section">
        <h3>Achievements</h3>
        <ul className="achievements-list">
          {team.achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
      
      <div className="team-section">
        <h3>Team Members</h3>
        <div className="team-members-grid">
          {members.length > 0 ? (
            members.map(member => (
              <MemberCard key={member._id} member={member} />
            ))
          ) : (
            <p>No members assigned to this team yet.</p>
          )}
        </div>
      </div>
      
      <Link to="/subteams" className="back-btn">Back to Teams</Link>
    </div>
  );
};

export default TeamDetail;