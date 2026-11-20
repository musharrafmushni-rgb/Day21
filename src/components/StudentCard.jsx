import React from 'react';

const StudentCard = ({ student }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 w-full max-w-sm">
      <div className="flex justify-center mb-4">
        <img 
          src={student.imageUrl || "https://via.placeholder.com/150"} 
          alt={student.fullName} 
          className="w-24 h-24 rounded-full object-cover border-4 border-indigo-100"
        />
      </div>
      <div className="text-center">
        <h2 className="text-xl font-bold text-gray-800">{student.fullName}</h2>
        <p className="text-indigo-600 font-medium">{student.course}</p>
        <p className="text-gray-500 text-sm mb-4">{student.studentId}</p>
      </div>
      
      <div className="space-y-2 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
        <p><strong>Email:</strong> {student.email}</p>
        <p><strong>Phone:</strong> {student.phone}</p>
        <p><strong>Age:</strong> {student.age}</p>
        <p><strong>Gender:</strong> {student.gender}</p>
        <p><strong>Address:</strong> {student.address}</p>
      </div>
    </div>
  );
};

export default StudentCard;