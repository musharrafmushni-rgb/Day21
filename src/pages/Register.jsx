import React, { useState } from 'react';
import StudentForm from '../components/StudentForm';
import StudentCard from '../components/StudentCard';

const Register = () => {
  const [students, setStudents] = useState([]);

  // Add new student to the list
  const handleAddStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Student Registration System</h1>
      
      <div className="flex flex-col lg:flex-row gap-10 w-full max-w-7xl justify-center">
        {/* Form Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <StudentForm onAddStudent={handleAddStudent} />
        </div>

        {/* Registered Students List */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center lg:text-left">Registered Students</h2>
          {students.length === 0 ? (
            <p className="text-gray-500 text-center lg:text-left">No students registered yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {students.map((student, index) => (
                <StudentCard key={index} student={student} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;