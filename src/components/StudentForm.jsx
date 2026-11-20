import React, { useState } from 'react';

const StudentForm = ({ onAddStudent }) => {
  // Form State
  const [formData, setFormData] = useState({
    imageUrl: '',
    fullName: '',
    studentId: '',
    email: '',
    phone: '',
    course: '',
    age: '',
    gender: '',
    address: '',
    password: '',
    confirmPassword: ''
  });

  // Errors State
  const [errors, setErrors] = useState({});

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validation Logic
  const validate = () => {
    let newErrors = {};

    if (!formData.fullName || formData.fullName.length < 3) {
      newErrors.fullName = "Full name must be at least 3 characters.";
    }
    if (!formData.studentId) newErrors.studentId = "Student ID is required.";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Valid email is required.";
    }
    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
    }
    if (!formData.course) newErrors.course = "Course is required.";
    if (!formData.age || formData.age < 18 || formData.age > 35) {
      newErrors.age = "Age must be between 18 and 35.";
    }
    if (!formData.gender) newErrors.gender = "Gender is required.";
    if (!formData.password || formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    if (validate()) {
      onAddStudent(formData); // Send data to Parent
      setFormData({ // Reset form
        imageUrl: '', fullName: '', studentId: '', email: '', phone: '',
        course: '', age: '', gender: '', address: '', password: '', confirmPassword: ''
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-2xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Student Registration</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Image URL */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Student Image URL</label>
          <input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="https://example.com/image.jpg" />
        </div>

        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none ${errors.fullName ? 'border-red-500' : ''}`} />
          {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
        </div>

        {/* Student ID */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Student ID *</label>
          <input type="text" name="studentId" value={formData.studentId} onChange={handleChange} className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none ${errors.studentId ? 'border-red-500' : ''}`} />
          {errors.studentId && <p className="text-red-500 text-xs mt-1">{errors.studentId}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none ${errors.email ? 'border-red-500' : ''}`} />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none ${errors.phone ? 'border-red-500' : ''}`} />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>

        {/* Course */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Course *</label>
          <select name="course" value={formData.course} onChange={handleChange} className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none ${errors.course ? 'border-red-500' : ''}`}>
            <option value="">Select Course</option>
            <option value="React JS">React JS</option>
            <option value="UI/UX">UI/UX Design</option>
            <option value="Full Stack">Full Stack</option>
          </select>
          {errors.course && <p className="text-red-500 text-xs mt-1">{errors.course}</p>}
        </div>

        {/* Age */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Age (18-35) *</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none ${errors.age ? 'border-red-500' : ''}`} />
          {errors.age && <p className="text-red-500 text-xs mt-1">{errors.age}</p>}
        </div>

        {/* Gender */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Gender *</label>
          <div className="flex gap-4 mt-2">
            <label><input type="radio" name="gender" value="Male" onChange={handleChange} checked={formData.gender === 'Male'} className="mr-1" /> Male</label>
            <label><input type="radio" name="gender" value="Female" onChange={handleChange} checked={formData.gender === 'Female'} className="mr-1" /> Female</label>
          </div>
          {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>}
        </div>

        {/* Address */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
          <textarea name="address" value={formData.address} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" rows="2"></textarea>
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Password *</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none ${errors.password ? 'border-red-500' : ''}`} />
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password *</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none ${errors.confirmPassword ? 'border-red-500' : ''}`} />
          {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
        </div>
      </div>

      <button type="submit" className="w-full mt-6 bg-indigo-600 text-white py-3 rounded-lg font-bold hover:bg-indigo-700 transition">
        Register Student
      </button>
    </form>
  );
};

export default StudentForm;