import Image from "next/image";
import "./page.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
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
      <Footer />
    </>
  );
}
