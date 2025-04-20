import React, { useState, useEffect } from 'react';
import { api } from '../api';
import MemberCard from './MemberCard';

const MembersList = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        setLoading(true);
        const response = await api.getMembers();
        setMembers(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch members');
        setLoading(false);
        console.error(err);
      }
    };

    fetchMembers();
  }, []);

  if (loading) return <div>Loading members...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="members-container">
      <h1>Club Members</h1>
      <div className="members-grid">
        {members.map(member => (
          <MemberCard key={member._id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default MembersList;