
// import axios from "axios";
// import { useState } from "react";
// import toast from "react-hot-toast";
// import { Link, useNavigate } from "react-router-dom";
// import loginImage from "../assets/images/login.jpg"
// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();


//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post("${import.meta.env.BASE_URL}/api/users/login", {
//         email,
//         password,
//       }, {
//         withCredentials: true,
//       });

//       console.log("Login response:", response.data);


//       if (response.status === 200) {
//         toast.success(response.data.message || "Login successful!");
//         localStorage.setItem("token", response.data.token);
//         navigate("/");
//       } else {
//         alert("Login failed. Please try again.");
//         console.error("Login failed:", response.data);
//       }
//     } catch (error) {
//       console.error("Error during login:", error);
//       toast.error(error.response?.data?.message || "An error occurred during login.");
//     }
//   }


//   return (
//     <div className="min-h-screen flex items-center justify-center  ">

//       <div className="hidden md:flex w-1/2 h-screen items-center justify-center p-10">
//         <img
//           src={loginImage}
//           alt="Illustration"
//           className="w-full h-auto"
//         />
//       </div>

//       <div className="w-full md:w-1/2 p-8 md:p-12">
//         <h2 className="text-3xl font-semibold text-gray-800 mb-1 text-center ">Login</h2>
//         <p className="text-sm text-gray-500 mb-6 text-center">
//           Welcome back! Please login to your account.
//         </p>

//         <form className="space-y-4" onSubmit={handleLogin}>
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium font-semibold ">
//               Email address
//             </label>
//             <input
//               type="email"
//               id="email"
//               placeholder="mail@example.com"
//               className="w-1/2 mt-1 px-4 py-2 border rounded-md focus:outline-none "
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           <div>
//             <label htmlFor="password" className="block text-sm font-semibold ">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               placeholder="••••••••"
//               className="w-1/2 mt-1 px-4 py-2 border rounded-md focus:outline-none "
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>

//           <div className="flex items-center justify-between text-sm">
//             <label className="flex items-center">
//               <input type="checkbox" className="mr-2" />
//               Remember me
//             </label>
//             <Link to={"/resetPassword"} className="text-green-600 hover:underline">
//               Forgot password?
//             </Link>
//           </div>

//           <button
//             type="submit"
//             className="w-1/2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition"
//           >
//             Login
//           </button>
//         </form>

//         <p className="text-center text-sm text-gray-600 mt-4">
//           Don’t have an account?{" "}
//           <Link to={"/signup"} className="text-green-600 hover:underline font-medium">
//             Register
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;


import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import loginImage from "../assets/images/login.jpg"; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "${import.meta.env.BASE_URL}/api/users/login",
        { email, password },
        { withCredentials: true }
      );

      if (response.status === 200) {
        toast.success(response.data.message || "Login successful!");
        localStorage.setItem("token", response.data.token);
        navigate("/");
      } else {
        toast.error("Login failed. Please try again.");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Login error.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-1/2 hidden md:flex items-center justify-center bg-[radial-gradient(circle_at_center,_#1fe4b3,_#0f172a)] p-10">
        <img src={loginImage} alt="Login Illustration" className="max-w-[80%] h-auto" />
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center bg-white px-6 py-12 md:p-16">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">Login</h2>
          <p className="text-center text-gray-500 mb-6">
            Welcome back! Please login to your account.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div className="flex items-center justify-between text-sm text-gray-600">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <Link to="/resetPassword" className="text-green-600 hover:underline">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md transition"
            >
              Login
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-green-600 hover:underline font-medium">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
