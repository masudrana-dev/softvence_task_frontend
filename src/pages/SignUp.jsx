// import axios from "axios";
// import { Eye, EyeOff } from "lucide-react";
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// import { toast } from "react-hot-toast";

// const Signup = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirm, setShowConfirm] = useState(false);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   // it's use to navigate a route 
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       if (password !== confirmPassword) {
//         toast.error("Passwords do not match!");
//         return;
//       }

//       const response = await axios.post("${import.meta.env.BASE_URL}/api/users/signup", {
//         name,
//         email,
//         password,
//       }, {
//         withCredentials: true,
//       });

//       console.log("Signup response:", response.data);


//       if (response.status === 201) {
//         toast.success("Signup successful! Please log in.");
//         navigate("/login");
//       } else {
//         alert("Signup failed. Please try again.");
//         console.error("Signup failed:", response.data);
//       }

//     } catch (error) {
//       console.error("Error during signup:", error);
//       toast.error(error.response?.data?.error || "An error occurred during signup.");

//     }


//   }


//   return (

//     <div className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-xl  w-full h-screen overflow-hidden">


//       <div className="hidden md:flex w-full md:w-1/2 h-full bg-gradient-to-br from-gray-900 to-green-900 justify-center items-center py-8">
//         <img
//           src="https://media.istockphoto.com/id/1178681968/photo/white-and-brown-wooden-welcome-sign.webp?a=1&s=612x612&w=0&k=20&c=KYwIwpJ0PBMjHlESyCfnrCZ7WxzdAjMuMSTha_yf7L4="
//           alt="Signup Illustration"
//           className="w-2/4"
//         />
//       </div>


//       <div className="w-full md:w-1/2 p-8 md:p-12">
//         <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">Sign Up</h2>
//         <p className="text-sm text-gray-500 text-center mb-6">
//           To create account, please fill in the form below.
//         </p>

//         <form className="space-y-4" onSubmit={handleSubmit}>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Full Name</label>
//             <input
//               type="text"
//               placeholder="Enter your full name"
//               className="w-full px-4 py-2 border rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email Address</label>
//             <input
//               type="email"
//               placeholder="Enter your email address"
//               className="w-full px-4 py-2 border rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           <div className="relative">
//             <label className="block text-sm font-medium text-gray-700">Password</label>
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="********"
//               className="w-full px-4 py-2 border rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute top-8 right-3 text-gray-500"
//             >
//               {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//             </button>
//           </div>

//           <div className="relative">
//             <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
//             <input
//               type={showConfirm ? "text" : "password"}
//               placeholder="Retype password"
//               className="w-full px-4 py-2 border rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//             />
//             <button
//               type="button"
//               onClick={() => setShowConfirm(!showConfirm)}
//               className="absolute top-8 right-3 text-gray-500"
//             >
//               {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
//             </button>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md transition"
//           >
//             Sign Up
//           </button>
//           <div className="text-center text-sm text-gray-500 mt-2">
//             Or<br />
//             Already have an account?{" "}
//             <Link
//               to="/login"
//               className="text-green-600 font-medium cursor-pointer hover:underline">
//               Log In
//             </Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;



import axios from "axios";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import singupImage from '../assets/images/signup.svg'
//  import signupIllustration from "../assets/images/"; // make sure the image path is correct

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    try {
      const response = await axios.post(
        "${import.meta.env.BASE_URL}/api/users/signup",
        { name, email, password },
        { withCredentials: true }
      );

      if (response.status === 201) {
        toast.success("Signup successful! Please log in.");
        navigate("/login");
      } else {
        toast.error("Signup failed. Please try again.");
      }
    } catch (error) {
      toast.error(error.response?.data?.error || "Signup failed.");
    }
  };

  return (
    <div className="flex h-screen w-full">
    
      <div className="hidden md:flex w-1/2 bg-[#0c0c1d] items-center justify-center">
        <img
          src={singupImage}
          alt="Signup Illustration"
          className="max-w-md"
        />
      </div>
    
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-12 bg-white">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">Sign Up</h2>
          <p className="text-sm text-gray-500 text-center mb-6">
            To Create Account, Please Fill in the Form Below.
          </p>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm text-gray-700 font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 font-medium">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="relative">
              <label className="block text-sm text-gray-700 font-medium">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="********"
                className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute right-3 top-9 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <div className="relative">
              <label className="block text-sm text-gray-700 font-medium">Confirm Password</label>
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Retype password"
                className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute right-3 top-9 text-gray-500"
                onClick={() => setShowConfirm(!showConfirm)}
              >
                {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-2 rounded-md transition"
            >
              Sign Up
            </button>

            <div className="text-center text-sm text-gray-500 mt-4">
              Already have an account?{" "}
              <Link to="/login" className="text-green-600 font-medium hover:underline">
                Log In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;

