import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../api';

const TeamsList = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        setLoading(true);
        const response = await api.getTeams();
        setTeams(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch teams');
        setLoading(false);
        console.error(err);
      }
    };

    fetchTeams();
  }, []);

  if (loading) return <div>Loading teams...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="teams-container">
      <h1>Rocketry Teams</h1>
      <div className="teams-list">
        {teams.map(team => (
          <div key={team._id} className="team-card">
            <h2>{team.name}</h2>
            <p className="team-description">{team.description}</p>
            <p><strong>Current Project:</strong> {team.project}</p>
            <p><strong>Established:</strong> {new Date(team.established).toLocaleDateString()}</p>
            <Link to={`/subteams/${team._id}`} className="view-team-btn">
              View Team Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamsList;