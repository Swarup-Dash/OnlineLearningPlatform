import React from 'react';
import javacourseImage from '../Asset/javacourse.jpg';


const ComponentName = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
        {/* Card Image */}
        <img 
          className="w-full h-48 object-cover" 
          src={javacourseImage}
          alt="Card Image"
        />
        
        {/* Card Body */}
        <div className="px-6 py-4">
          <h3 className="font-bold text-xl mb-2">Card Title</h3>
          <p className="text-gray-700 text-base">
            This is a simple card component with a title, description, and a button. Customize it with your own content.
          </p>
        </div>
  
        {/* Card Footer with Button */}
        <div className="px-6 py-4">
          <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <a href="https://www.w3schools.com/java/"> Start Learning </a>
          </button>
        </div>
      </div>
  );
};

export default ComponentName;
