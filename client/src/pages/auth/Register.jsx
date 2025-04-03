import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userRegisterAction } from "../../Redux/Actions/User";
import Layout from "../../Layouts/Layouts"; // Import Layout
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export default function Register() {
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);

  const userRegisterReducer = useSelector((state) => state.userRegisterReducer);
  const { loading, error, userInfo } = userRegisterReducer;

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userRegisterAction(name, email, password));
  };

  return (
    <Layout> {/* Wrap Register page content in Layout */}
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <>
          <form className="max-w-sm mx-auto" onSubmit={submitHandler}>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                placeholder="bob"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                placeholder="name@flowbite.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your password
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Submit
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
        </>
      )}
    </Layout> 
  );
}
