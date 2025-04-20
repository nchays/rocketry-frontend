import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const api = {
  // Members API
  getMembers: () => axios.get(`${API_URL}/members`),
  getMemberById: (id) => axios.get(`${API_URL}/members/${id}`),
  
  // Teams API
  getTeams: () => axios.get(`${API_URL}/teams`),
  getTeamWithMembers: (id) => axios.get(`${API_URL}/teams/${id}`)
};