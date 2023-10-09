import React, { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/auth.js"
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/auth/login`,
        { email, password }
      );

      if (res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));

        navigate("/");
      } else {
        toast.error(res.data.message);
      }

    } catch (error) {
      console.log(error);
      toast.error("Something went wrong..");
    }
    // console.log(name, email, password, phone, address);

  };

  return (

    <>
      <div>
        <div className='bg-gradient-to-r from-violet-500 to-fuchsia-500' style={{
          'width': ' 1000px',
          'height': '520px',
          'marginTop': '100px',
          'marginLeft': '250px',
          'borderRadius': '10px',
        }} >
          <div className='text-white ml-9 p-10'>

            <h1 className='font-semibold text-2xl tracking-wide ' >Investment Plan System</h1>
            <h1 className='font-medium tracking-wide' >Sign in to continue to our application</h1>
            <form onSubmit={handleSubmit}>
              <div className=" gap-6 mb-6 md:grid-cols-2 mt-5">

                <div className="mb-6">
                  <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                  <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="mb-6">
                  <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>


                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>

                <h2 className="mt-2" >Donot have an account? <br /> <a href="/register">Click here to register!</a> </h2>
              </div>
            </form>

          </div>
        </div>
      </div>
    </>

  );
};

export default Login;