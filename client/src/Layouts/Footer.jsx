const Footer = () => {
  return (
    <footer className="bg-[#000000] w-full shadow">
      <div className="w-full max-w-screen-xl mx-auto p-6 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Node Shop.
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 text-lg">About</a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 text-lg">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 text-lg">Licensing</a>
            </li>
            <li>
              <a href="#" className="hover:underline text-lg">Contact</a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-500 sm:mx-auto lg:my-8" />
        <span className="block text-lg text-white text-center">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Sai Ko™
          </a>. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
