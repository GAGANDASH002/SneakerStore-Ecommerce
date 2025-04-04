import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userRegisterAction } from "../../Redux/Actions/User";
import Layout from "../../Layouts/Layouts"; 
import { Link } from "react-router-dom"; 
import Footer from "../../Layouts/Footer";

export default function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const userRegisterReducer = useSelector((state) => state.userRegisterReducer);
  const { loading, error } = userRegisterReducer;

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userRegisterAction(name, email, password));
  };

  return (
    <Layout>
      <div className="flex justify-center items-center min-h-screen "
      style={{
        backgroundImage: "url('https://i.pinimg.com/736x/cf/2d/b1/cf2db15826aea88d643ba23f12cac6b5.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center 100%',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="bg- shadow-lg rounded-lg p-6 w-full max-w-md bg-[#a3a2a2]">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
            Create an Account
          </h2>

          {loading && <p className="text-blue-500 text-center">Loading...</p>}
          {error && <p className="text-red-500 text-center">{error}</p>}

          <form onSubmit={submitHandler} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="your@email.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all"
            >
              Register
            </button>
          </form>

          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 hover:text-blue-800">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </Layout>
  );
}
