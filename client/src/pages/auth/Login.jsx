import { useDispatch, useSelector } from "react-redux";
import Layout from "../../Layouts/Layouts";
import { userLoginAction } from "../../Redux/Actions/User";
import { useState } from "react";
import Footer from "../../Layouts/Footer";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userLoginReducer = useSelector((state) => state.userLoginReducer);

  const { loading, error } = userLoginReducer;
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userLoginAction(email, password));
  };

  return (
    <Layout>  {/* ✅ Wrapped in Layout to include Navbar & Footer */}
      <div className="flex items-center justify-center min-h-screen pt-20"
      style={{
        backgroundImage: "url('https://i.pinimg.com/1200x/b5/c5/06/b5c5063c6650c24f4f5e3f2b07006bdc.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center 100%',
        backgroundRepeat: 'no-repeat'
      }}>  
        <div className="bg-[#d9a4ea] dark:bg-gray-800 shadow-md rounded-lg p-8 w-full max-w-md">
          {loading ? (
            <h1 className="text-center text-gray-900 dark:text-white">Loading...</h1>
          ) : error ? (
            <h1 className="text-center text-red-500">{error}</h1>
          ) : (
            <>
              <h2 className="text-2xl font-semibold text-center mb-6 text-gray-900 dark:text-white">
                Login
              </h2>
              <form onSubmit={submitHandler} className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="name@example.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-[#0f0835] hover:bg-[#5d5683] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg p-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700"
                >
                  Login
                </button>
              </form>
            </>
          )}
        </div>
      </div>
      <Footer></Footer>
    </Layout> 
  );
}
