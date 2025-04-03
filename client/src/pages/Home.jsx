import React, { useEffect, useState } from "react";
import Layout from "../Layouts/Layouts";
import Products from "../components/Products";

const SneakerBanner = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);

  const scrollToProducts = () => {
    const element = document.getElementById('products-section');
    const offset = 80; 
    if (element) {
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div
      className="relative w-full min-h-[130vh] flex flex-col items-center justify-center bg-cover bg-center text-white text-center px-10 py-20 overflow-hidden"
      style={{ 
        backgroundImage: "url('https://img.freepik.com/free-photo/3d-shoe-shape-glowing-with-bright-holographic-colors_23-2151037292.jpg?t=st=1743662029~exp=1743665629~hmac=ed306ffdf96ab941b5bb48da0404839e15e2ae0fcb3f227b10216fb96e0589c1&w=1800')",
        backgroundSize: 'cover',
        backgroundPosition: 'center 100%',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      
      <div className={`relative z-10 transform transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeIn">
          Welcome to Sneaker Haven
        </h1>
        <p className="text-lg md:text-xl mb-8 animate-fadeIn delay-100">
          Explore the latest and trendiest sneakers in our collection.
        </p>
        <button 
          onClick={scrollToProducts}
          className="text-white font-bold py-3 px-8 rounded-lg text-2xl shadow-lg 
                     transition-all duration-300 transform hover:scale-105 
                     focus:outline-none focus:ring-2 focus:ring-green-200 
                     animate-fadeIn delay-200"
          style={{
            background: "linear-gradient(to right, #ff66cc, #9d4edd, #00bfff)",
            border: "2px solid #00bfff",
            boxShadow: "0 4px 8px rgba(0, 191, 255, 0.4)",
            transition: 'all 0.3s ease'
          }}
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

const AboutUs = () => {
  return (
    <div 
      id="about-us-section"
      className="relative w-full min-h-[130vh] flex flex-col items-start justify-start text-white px-10 py-10 text-left"
      style={{
        backgroundImage: "url('https://img.freepik.com/free-vector/pink-neon-synthewave-patterned-background-vector_53876-140398.jpg?t=st=1743670012~exp=1743673612~hmac=3b42d863036b5a1f63c3ceda7a83100530b51a13987c0c77e7c312d1593af732&w=1800')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          About Sneaker Haven
        </h1>
        <p className="text-lg md:text-xl mb-6">
  Welcome to <span className="text-pink-400 font-semibold">Sneaker Haven</span>, the ultimate destination for sneaker enthusiasts! 
  We are passionate about bringing you the latest and most stylish sneakers, whether you're a collector, an athlete, 
  or just someone who loves great footwear.
</p>

<p className="text-lg md:text-xl mb-6">
  Our collection features limited edition releases, iconic classics, and the freshest trends in the sneaker world. 
  We partner with top brands to ensure authenticity and quality in every pair. At Sneaker Haven, it's not just about shoes— 
  it's about the culture, the passion, and the community of sneaker lovers.
</p>

<p className="text-lg md:text-xl mb-6">
  Whether you're looking for high-performance sneakers for sports, sleek and stylish options for casual wear, 
  or rare collectibles to add to your sneaker collection, we have something for everyone. Our team carefully curates each 
  pair, ensuring that you get the best in comfort, durability, and trendsetting design.
</p>

<p className="text-lg md:text-xl mb-6">
  At <span className="text-pink-400 font-semibold">Sneaker Haven</span>, we believe that sneakers are more than just footwear – 
  they are a statement, a lifestyle, and an expression of individuality. That’s why we are committed to delivering an 
  unmatched shopping experience, with a seamless browsing process, detailed product insights, and exclusive sneaker drops.
</p>

<p className="text-lg md:text-xl mb-6">
  Join our community of sneakerheads, stay updated on the latest trends, and be the first to grab the hottest releases. 
  Step into a world where fashion meets function and discover your next favorite pair today!
</p>

      </div>
    </div>
  );
};

const Home = () => {
  return (
    <Layout>
      <SneakerBanner />
      <AboutUs />
      
      <div 
        id="products-section"
        className="bg-gray-700 bg-opacity-90 rounded-lg shadow-lg p-6 mx-auto max-w-7xl"
        style={{
          backgroundImage: "url('https://img.freepik.com/free-photo/abstract-textured-backgound_1258-30632.jpg?t=st=1743663674~exp=1743667274~hmac=4bcc3ea320486e962cf6b697c5b7b6321e50f84c60a17df6cab05c86b0731b6b&w=900')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 100%',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeIn text-white">
            Our Products
          </h1>
          <p className="text-lg md:text-xl mb-8 animate-fadeIn delay-100 text-white">
            Browse our latest collections.
          </p>
        </div>
        <Products />
      </div>
    </Layout>
  );
};

export default Home;
