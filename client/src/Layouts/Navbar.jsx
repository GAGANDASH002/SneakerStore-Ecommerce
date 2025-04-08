import { useDispatch, useSelector } from "react-redux";
import { UserDropdown } from "../components/Dropdown";
import { Link } from "react-router-dom";
import { userLogoutAction } from "../Redux/Actions/User";
import Checkout from "../pages/Checkout";
import { useState, useEffect } from "react";

const Navbar = () => {
  const userLoginReducer = useSelector((state) => state.userLoginReducer);
  const { userInfo } = userLoginReducer;
  const dispatch = useDispatch();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const qty = useSelector((state) =>
    state.cartReducer.cartItems.reduce((total, item) => total + item.qty, 0)
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoutHandler = () => {
    dispatch(userLogoutAction());
  };

  // Function to smoothly scroll to About Us section
  const scrollToAbout = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById("about-us-section");
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80, // Offset for navbar height
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/5 backdrop-blur-md shadow-sm dark:bg-gray-900/20 text-black"
          : "bg-black/20 text-white"
      }`}
    >
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        {/* Logo - Left aligned */}
        <Link to="/" className="flex items-center">
          <img
            src="https://png.pngtree.com/png-vector/20240529/ourmid/pngtree-an-illustration-of-a-nike-sneaker-with-the-flag-of-the-vector-png-image_6963956.png"
            className="h-16 ml-5  transform rotate-45"
            alt="Flowbite Logo"
          />
          <span
            className={`self-center text-2xl font-semibold whitespace-nowrap transition-all duration-300 ${
              scrolled ? "text-blue-500" : "text-white"
            }`}
          >
            Sneaker Haven
          </span>
        </Link>

        {/* Right-aligned section */}
        <div className="flex items-center space-x-6">
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className={`${
                scrolled ? "text-blue-500" : "text-white"
              } hover:text-blue-500 font-medium text-lg`}
            >
              Home
            </Link>

            {/* About Button with Scroll Function */}
            <button
              onClick={scrollToAbout}
              className={`${
                scrolled ? "text-blue-500" : "text-white"
              } hover:text-blue-500 font-medium text-lg focus:outline-none`}
            >
              About Us
            </button>

            {!userInfo && (
              <Link
                to="/register"
                className={`${
                  scrolled
                    ? "border border-white text-blue-500 hover:bg-white/10 hover:border-blue-500"
                    : "border border-white text-white hover:bg-white/10 hover:border-blue-500"
                } transition-all duration-300 font-medium rounded-lg text-lg px-4 py-2 bg-transparent`}
              >
                Get started
              </Link>
            )}
          </div>

          {/* User/Cart Elements */}
          {userInfo ? (
            <>
              <UserDropdown logoutHandler={logoutHandler} textColor="text-white" />
              <button
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg hover:bg-gray-100/10 focus:outline-none text-white"
                onClick={() => setOpen(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
                <span className="ml-1 text-white">{qty}</span>
              </button>
              <Checkout open={open} setOpen={setOpen} />
            </>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
