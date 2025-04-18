import Image from "next/image";
import Navbar from "./components/Navbar";
import Link from "next/link";
import "./page.css";

export default function Home() {
  return (
    <>
      <div className="hero">
        <Navbar />
        <div className="hero-in">
          <div className="py-10 px-2 md:py-50 md:px-70 text-center">
            <div className="text-[64px] kaushan">Discover Exclusive Films & Shows</div>
            <p className="text-[18px]">Explore a curated selection of films and TV shows, premiering exclusively at SarangVerse. Elevate your entertainment experience today.</p>
            <button className="mt-4 cursor-pointer bg-transparent border-2 border-white text-white py-2 px-4 rounded-md hover:color-gray duration-200">
              Explore Now
            </button>
          </div>
        </div>
      </div>
      <div className="p-4 md:p-20 content">
        {/* Categories Section */}
        <div className="categories">
          {["Action", "Drama", "Comedy", "Horror"].map((category) => (
            <div key={category} className="category">
              <h3 className="category-title">{category}</h3>
              <div className="posts">
                {[1, 2, 3, 4, 5, 6].map((post) => (
                  <div key={post} className="post">
                    <div className="post-image-container">
                      <Image
                        src={`/img/movies/${post}.jpg`} // Replace with actual image paths
                        alt={`Post ${post}`}
                        className="post-image"
                        fill // Enables the image to fill its parent container
                      />
                    </div>
                    <div className="post-info">
                      <p className="post-name">Post {post}</p>
                      <p className="post-year">2025</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
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
    </>
  );
}
