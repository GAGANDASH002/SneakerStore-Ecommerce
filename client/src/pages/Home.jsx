import React, { useEffect, useState } from "react";
import Layout from "../Layouts/Layouts";
import Products from "../components/Products";
import Footer from "../Layouts/Footer";

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
      backgroundImage: "url('/sneaker-banner.jpg')",
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
      backgroundImage: "url('/aboutus-bg.jpg')",
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

const PartnersSection = () => {
  return (
    <div
      id="partners-section"
      className="relative w-full min-h-[110vh] flex flex-col items-center justify-center text-white px-10 py-20"
      style={{
        backgroundImage: "url('https://i.pinimg.com/originals/be/d2/59/bed2591f723244f07bc4bf382f97103c.gif')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-6xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          Our Partners
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-center">
          <img src="https://media.about.nike.com/image-downloads/cf68f541-fc92-4373-91cb-086ae0fe2f88/002-nike-logos-swoosh-white.jpg" alt="Nike" className="h-16 object-contain grayscale hover:grayscale-0 transition duration-300" />
          <img src="https://cdn.hyprop.co.za/image/2023/7/25/e6282914-7b4a-4a7a-9112-33abe479dd5a/e0803ee7-cdd8-4cde-ad38-a297e330ff75.jpg" alt="Adidas" className="h-16 object-contain grayscale hover:grayscale-0 transition duration-300" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLVcFRoeLGW6F7XDV8S8pV16387n2OB6LIugxruqTC_shbKTpyHZEfTPSyCI3E835TtiQ&usqp=CAU" alt="Fila" className="h-16 object-contain grayscale hover:grayscale-0 transition duration-300" />
          <img src="https://assets.turbologo.com/blog/en/2019/11/19084917/puma-logo-cover.png" alt="Puma" className="h-16 object-contain grayscale hover:grayscale-0 transition duration-300" />
          <img src="https://www.hrxbrand.com/img/MicrosoftHRX.0fe18b05.png" alt="HRX" className="h-12 object-contain grayscale hover:grayscale-0 transition duration-300" />
          <img src="https://cdn.dribbble.com/userupload/18384833/file/original-650ea6f90cdfd18d362c355f47b65dea.png" alt="Under Armour" className="h-16 object-contain grayscale hover:grayscale-0 transition duration-300" />
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <Layout>
      <SneakerBanner />
      <AboutUs />
      <PartnersSection />
      <div
        id="products-section"
        className="bg-gray-700 bg-opacity-90 rounded-lg shadow-lg p-6 mx-auto max-w-7xl"
        style={{
          backgroundImage: "url('/product-bg.jpg')",
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
      <Footer/>
    </Layout>
  );
};

export default Home;
