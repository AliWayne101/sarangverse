import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className="footer bg-gray-800 text-white py-6">
            <div className="container mx-auto px-4 text-center">
                <div className="mb-4">
                    <h2 className="text-xl font-bold">SarangVerse</h2>
                    <p className="text-sm">Discover exclusive films and shows, only on SarangVerse.</p>
                </div>
                <div className="flex justify-center space-x-4 mb-4">
                    <a href="#" className="hover:text-gray-400">About Us</a>
                    <a href="#" className="hover:text-gray-400">Contact</a>
                    <a href="#" className="hover:text-gray-400">Privacy Policy</a>
                </div>
                <div className="text-sm text-gray-400">
                    © {new Date().getFullYear()} SarangVerse. All rights reserved.<br />Developed by <Link href="https://waynedev.vercel.app">Wayne Development</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer