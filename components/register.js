import { setuser } from "@/utils/common";
import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const BodyData = {
      mail: email,
      password: password,
    };

    try {
      const response = await fetch("api/Data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(BodyData),
      });

      if (!response.ok) {
        throw new Error("Registration failed.");
      }
      const data = await response.json();

      setSuccess(true);
      setEmail("");
      setPassword("");  
      setConfirmPassword("");
      setError("");
      setuser(data.data);

      // window.location.href = "forms";
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="bg-blue-900 shadow-md rounded px-8 py-6 w-96">
        <h2 className="text-2xl font-bold text-white text-center mb-4">
          Register
        </h2>
        {error && (
          <p className="text-white font-extrabold p-3 rounded-lg text-sm mb-4 bg-red-400">
            {error}
          </p>
        )}
        {success && (
          <p className="text-green-500 text-sm mb-4">
            Registration successful! Redirecting...
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 text-gray-200 bg-black focus:bg-gray-800 focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 text-gray-200 bg-black focus:bg-gray-800 focus:border-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="confirm-password"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 text-gray-200 bg-black focus:bg-gray-800 focus:border-blue-500"
              placeholder="Confirm your password"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white font-bold py-2 px-4 rounded w-full hover:bg-blue-700 transition duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
