import React from 'react';
import './TrustInfo.css';

const TrustInfo = () => {
  return (
    <div className="trust-info-section">
      <div className="trust-info-header">
        <h1 className="simple-heading">Trust's Info</h1>
        <p><strong>Shetkari Unnati Mandal, Kalher</strong></p>
      </div>

      <div className="trust-info-content">
        <table className="trust-info-table">
          <tbody>
            <tr>
              <td>Name of the Trust:</td>
              <td>Shetkari Unnati Mandal, Kalher</td>
            </tr>
            <tr>
              <td>Registration No:</td>
              <td>E 185(T)</td>
            </tr>
            <tr>
              <td>Email Address:</td>
              <td>smtcapschool@gmail.com</td>
            </tr>
            <tr>
              <td>Website:</td>
              <td><a href="#" target="_blank" rel="noreferrer">N/A</a></td>
            </tr>
            <tr>
              <td>School Name:</td>
              <td>Smt. Chandrabai Anant Patil English Medium High School, Kalher</td>
            </tr>
            <tr>
              <td>Junior College Name:</td>
              <td>Smt. Chandrabai Anant Patil English Medium Junior College, Kalher</td>
            </tr>
            <tr>
              <td>Other Schools:</td>
              <td>
                1) Parsharam Dhondu Tawre Vidyalaya, Kalher<br />
                2) Premabai Sukrya Patil Vidyalaya, Kariwli, Bhiwandi<br />
                3) Sitaram Rama Patil Vidyalaya, Amne, Bhiwandi<br />
                4) Madhavrav Patil Balmandir, Kalher<br />
                5) Abhinav Bal Vidyamandir English Medium School, Tadali (Kalher)
              </td>
            </tr>
            <tr>
              <td>Establishment:</td>
              <td>1959</td>
            </tr>
            <tr>
              <td>Commencement of School:</td>
              <td>June 2018</td>
            </tr>
            <tr>
              <td>Commencement of Jr. College:</td>
              <td>June 2024</td>
            </tr>
            <tr>
              <td>Founder of Sr. College:</td>
              <td>Shri Raju Anant Patil</td>
            </tr>
            <tr>
              <td>President:</td>
              <td>Shri Raju Anant Patil</td>
            </tr>
            <tr>
              <td>Managing Trustee:</td>
              <td>Shri Raju Anant Patil</td>
            </tr>
            <tr>
              <td>Principal:</td>
              <td>Shri Raju Anant Patil</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TrustInfo;