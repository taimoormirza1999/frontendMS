import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCloudUploadAlt, FaTags, FaChartLine, FaFolderOpen, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Star from './Star';

const WelcomeScreen = () => {
    const gettingToken = localStorage.getItem('token')
if(gettingToken){
  window.location.href = '/';
}
//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       window.location.href = '/dashboard'; 
//     }, 5000);
//     return () => clearTimeout(timeout);
//   }, []);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 50, delay: 0.3 },
    },
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-700">
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className=" text-3xl my-3 mb-5  font-bold text-transparent bg-clip-text bg-gradient-to-r from-primaryBlue to-primaryPurple mb-6">
        <Star/> File Management App
        </h1>
        <motion.div className="flex justify-around mt-10 mb-10  ">
          <motion.div variants={iconVariants}>
            <FaCloudUploadAlt className="text-blue-600 text-6xl" />
            <p className="mt-2 text-md font-semibold">Upload</p>
          </motion.div>
          <motion.div variants={iconVariants}>
            <FaTags className="text-green-500 text-6xl" />
            <p className="mt-2 text-md font-semibold">Tag</p>
          </motion.div>
          <motion.div variants={iconVariants}>
            <FaFolderOpen className="text-yellow-500 text-6xl" />
            <p className="mt-2 text-md font-semibold">Organize</p>
          </motion.div>
          <motion.div variants={iconVariants}>
            <FaChartLine className="text-red-500 text-6xl" />
            <p className="mt-2 text-md font-semibold">Statistics</p>
          </motion.div>
        </motion.div>

        <p className="text-gray-700 text-sm mb-6">
          Experience a seamless way to manage and share your multimedia files.
        </p>
        <Link
          to="/login"
          className=" inline-block bg-gradient-to-l from-primaryBlue to-primaryPurple text-white py-3 px-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
        >
         Get Started <FaArrowRight className="ml-2 inline-block" />
        </Link>
      </motion.div>
    </div>
  );
};

export default WelcomeScreen;
