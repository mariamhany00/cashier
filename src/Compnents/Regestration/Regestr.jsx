import React, { useState } from 'react';
import logo from '../../assets/Logo Smart.png';

function Regestr() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10,15}$/.test(formData.phone)) {
      newErrors.phone = 'Enter a valid phone number (numbers only)';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    } else if (!/^(?=.[a-zA-Z])(?=.\d).+$/.test(formData.password)) {
      newErrors.password = 'Password must include both letters and numbers';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirm your password';
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log('Account Created:', formData);
      // Add API request here later
    }
  };

  return (
    <div className="font-inknut flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img src={logo} alt="Logo" className="mx-auto h-20 w-auto" />
        <h2 className="text-2xl font-bold text-center" style={{ color: '#C20A0A' }}>
          Create Account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} autoComplete="off" className="space-y-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium" style={{ color: '#246FA8' }}>
              Enter Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="block w-full rounded-md bg-white px-3 py-1.5 border outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
            />
            {errors.fullName && <p className="text-red-600 text-sm mt-1">{errors.fullName}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium" style={{ color: '#246FA8' }}>
              Enter E-mail address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full rounded-md bg-white px-3 py-1.5 border outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
            />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium" style={{ color: '#246FA8' }}>
              Add Your Number
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="block w-full rounded-md bg-white px-3 py-1.5 border outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
            />
            {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium" style={{ color: '#246FA8' }}>
              Enter Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="block w-full rounded-md bg-white px-3 py-1.5 border outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
            />
            {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password}</p>}
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium" style={{ color: '#246FA8' }}>
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="block w-full rounded-md bg-white px-3 py-1.5 border outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
            />
            {errors.confirmPassword && <p className="text-red-600 text-sm mt-1">{errors.confirmPassword}</p>}
          </div>

          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="px-5 py-2 text-sm font-semibold text-white bg-[#09AE94] rounded-md shadow-md hover:opacity-90"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Regestr;
