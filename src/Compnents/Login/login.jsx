import React, { useState } from "react";
import logo from "../../assets/Logo Smart.png";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Login submitted:", { email, password });
      // هتضيفي هنا API request لما الباك اند يبقى جاهز
    }
  };

  return (
    <div className="font-inknut flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img src={logo} alt="Logo" className="mx-auto h-20 w-auto" />
        <h2
          className="mt-10 text-center text-2xl font-bold tracking-tight"
          style={{ color: "#C20A0A" }}
        >
          Login
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} autoComplete="off" className="space-y-6">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium"
              style={{ color: "#246FA8" }}
            >
              Enter E-mail address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font"
                style={{ color: "#246FA8" }}
              >
                Enter your Password
              </label>
              <div className="text-sm">
                <Link
                  to="/forgot-password"
                  className="font-semibold hover:text-indigo-500"
                  style={{ color: "#C20A0A" }}
                >
                  Forgot password?
                </Link>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              />
              {errors.password && (
                <p className="text-red-600 text-sm mt-1">{errors.password}</p>
              )}
            </div>
          </div>

          {/* Login button */}
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="px-5 py-2 text-sm font-semibold text-white bg-[#09AE94] rounded-md shadow-md hover:opacity-90"
            >
              Login
            </button>
          </div>
        </form>

        <p
          className="mt-10 text-center text-sm text-gray-500"
          style={{ color: "#808080" }}
        >
          Don't have any account yet{" "}
          <Link
            to="/register"
            className="font-semibold hover:text-indigo-500"
            style={{ color: "#C20A0A" }}
          >
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
}
