import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-transparent text-white">
      <div className="flex-1 text-center text-xl font-bold"><h2>SarangVerse</h2></div>
      <button className="cursor-pointer bg-transparent border-2 border-white text-white py-2 px-4 rounded-md hover:color-gray duration-200">
        Categories
      </button>
    </div>
  )
}

export default Navbar