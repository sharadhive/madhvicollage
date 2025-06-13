import React from 'react';
import './Faculties.css';

const facultyData = [
  {
    srNo: 1,
    name: "Ms. Nilam Jnardan Patil",
    subject: "Principal",
    designation: "(M.A., D.Ed, B.Ed)"
  },
  {
    srNo: 2,
    name: "Mrs. Nikita Suraj Bhoir",
    subject: "Asst. Teacher",
    designation: "(B.Com, D.Ed)"
  },
  {
    srNo: 3,
    name: "Ms. Yogita Pandurang Joshi",
    subject: "Science",
    designation: "Asst. Teacher (BSC, B.Ed)"
  },
  {
    srNo: 4,
    name: "Ms. Sonam Anil Bhoir",
    subject: "Marathi",
    designation: "Asst. Teacher (B.A., B.Ed)"
  },
  {
    srNo: 5,
    name: "Mrs. Purnima Manoj Bhoir",
    subject: "Hindi",
    designation: "Asst. Teacher (M.A., B.Ed)"
  },
  {
    srNo: 6,
    name: "Mrs. Pranali Paresh Chaudhari",
    subject: "English",
    designation: "Asst. Teacher (MSC, B.Ed)"
  },
  {
    srNo: 7,
    name: "Mr. Pradip Nivrutti Chede",
    subject: "Maths",
    designation: "Asst. Teacher (M.A., B.Ed)"
  },
  {
    srNo: 8,
    name: "Mr. Shivaji Kerba Gaikwad",
    subject: "History",
    designation: "Asst. Teacher (M.A., B.Ed)"
  },
  {
    srNo: 9,
    name: "Mrs. Manasi Avinash Patil",
    subject: "Primary (All Subjects)",
    designation: "Asst. Teacher (B.A., B.Ed)"
  },
  {
    srNo: 10,
    name: "Mrs. Seema Suryawanshi",
    subject: "Primary (All Subjects)",
    designation: "Asst. Teacher (M.A., B.Ed)"
  },
  {
    srNo: 11,
    name: "Ms. Tanvi Pravin Patil",
    subject: "Primary (All Subjects)",
    designation: "Asst. Teacher (B.A., D.Ed)"
  },
  {
    srNo: 12,
    name: "Mrs. Hema Yashwant Patil",
    subject: "Primary (All Subjects)",
    designation: "Asst. Teacher (B.A.)"
  },
  {
    srNo: 13,
    name: "Ms. Gayatri Balkrishna Umratkar",
    subject: "Primary (All Subjects)",
    designation: "Asst. Teacher (B.A.)"
  },
  {
    srNo: 14,
    name: "Mrs. Aparna Bhavesh Patil",
    subject: "Primary (All Subjects)",
    designation: "Asst. Teacher (BSC)"
  },
  {
    srNo: 15,
    name: "Mrs. Yogita Ganesh Khandagale",
    subject: "Primary (All Subjects)",
    designation: "Asst. Teacher (Montesary)"
  },
  {
    srNo: 16,
    name: "Ms. Chaitali Vishwanath Bhagat",
    subject: "Pre-Primary (All Subjects)",
    designation: "Asst. Teacher (B.A.)"
  },
  {
    srNo: 17,
    name: "Ms. Tejaswini Sudam Jadhav",
    subject: "Primary (All Subjects)",
    designation: "Asst. Teacher (HSC)"
  }
];

const Faculties = () => {
  return (
    <div className="faculties-section">
      <div className="faculties-header">
        <h1>Our Esteemed Teaching Faculty</h1>
        <p>Meet our dedicated faculty members who shape the future of our students.</p>
      </div>

      <div className="faculties-content">
        <h2>Teaching Faculty</h2>
        
        <div className="table-responsive">
          <table className="faculties-table">
            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>Faculty Name</th>
                <th>Subject</th>
                <th>Designation</th>
              </tr>
            </thead>
            <tbody>
              {facultyData.map((faculty) => (
                <tr key={faculty.srNo}>
                  <td>{faculty.srNo}</td>
                  <td>{faculty.name}</td>
                  <td>{faculty.subject}</td>
                  <td>{faculty.designation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Faculties;
