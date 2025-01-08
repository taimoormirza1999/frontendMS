import axios from 'axios';
export const fetchFiles = async () => {
  try {
    const response = await axios.get('https://backendms-71ot.onrender.com/auth/files');
    if (response.data && response.data.files) {
      return response.data.files;
    } else {
      console.error('Unexpected response structure:', response.data);
      return [];
    }
  } catch (error) {
    console.error('Error fetching files:', error);
    return [];
  }
};
