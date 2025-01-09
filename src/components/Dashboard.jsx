import React, { useEffect, useState } from 'react';
import FileUpload from './FileUpload';
import FileList from './FileList';

import { ToastContainer, toast } from 'react-toastify';
import Star from './Star';
import DashboardHeader from './dashboard  /DashboardHeader';
import { fetchFiles } from '../utils/api'; 
import { motion } from 'framer-motion';
const Dashboard = () => {
  const [userId, setUserId] = useState(null);
  const [username, setUsername] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [files, setFiles] = useState([]);
  const apiUrl = import.meta.env.VITE_API_ENDPOINT;

  
useEffect(() => {

const gettingToken = localStorage.getItem('token')
if(!gettingToken){
  window.location.href = '/welcome';
}
const gettingUserId = localStorage.getItem('userId')
const gettingUsername = localStorage.getItem('username')
const capitalizedUsername = gettingUsername?.charAt(0).toUpperCase() + gettingUsername?.slice(1);
setUsername(capitalizedUsername);
setUserId(gettingUserId);
toast.success('User Login Successfully!', {
});
},[]);

useEffect(() => {
  const getFiles = async () => {
    const files = await fetchFiles(apiUrl); 
    setFiles(files);
  };

  getFiles();
}, [userId]);
const getFiles = async () => {
  const files = await fetchFiles(apiUrl); 
  setFiles(files);
};
const refreshFiles = async () => {
  const files = await fetchFiles(apiUrl); 
  setFiles(files);
};
  const handleLogout = () => {
    toast.success('User Logout Successfully!', {
       });
 localStorage.removeItem('token');
 localStorage.removeItem('username');
 setTimeout(() => {
   window.location.href = '/login';
 }, 1000);
};
const containerVariants1 = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};
const containerVariants2 = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-700 -mt-0.5 pt-3">
<DashboardHeader  
username={username}
dropdownOpen={dropdownOpen} 
        setDropdownOpen={setDropdownOpen} 
        handleLogout={handleLogout}  />
      <main className="container mx-auto p-6">
        <motion.div variants={containerVariants1}
        initial="hidden"
        animate="visible" className="bg-white  shadow-xl shadow-indigo-400/50  rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 font-serif"><Star/> Upload File</h2>
          <FileUpload userId={userId} refreshFiles={refreshFiles} getFiles={getFiles} apiUrl={apiUrl}/>
        </motion.div>
        <motion.div variants={containerVariants2}
        initial="hidden"
        animate="visible" className="bg-white shadow-xl shadow-blue-400/50  rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 font-serif"><Star/> Uploaded Files</h2>
          <FileList files={files}  refreshFiles={refreshFiles} apiUrl={apiUrl} />
        </motion.div>
      </main>
      <ToastContainer />
    </div>
  );
};

export default Dashboard;
