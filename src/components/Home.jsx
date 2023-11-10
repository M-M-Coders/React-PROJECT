// Home.js

import { useEffect, useState } from "react";
import ScholarshipForm from "./ScholarshipForm";
import "./Home.css";

function ScholarshipCard({ scholarship, onSelect }) {
  const { id, name, description, amount, image } = scholarship;

  return (
    <div className="card" onClick={onSelect}>
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <h4>{description}</h4>
      <p>Amount Offered: ${amount}</p>
    </div>
  );
}

function Home() {
  const [scholarships, setScholarships] = useState([]);
  const [selectedScholarship, setSelectedScholarship] = useState(null);
  const [submittedApplications, setSubmittedApplications] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/Scholarships")
      .then((response) => response.json())
      .then((data) => setScholarships(data));
  }, []);

  const handleScholarshipClick = (scholarship) => {
    setSelectedScholarship(scholarship);
  };

  const handleFormSubmit = (formData, scholarship) => {
    // Handle form submission logic here
    console.log("Form submitted for scholarship:", scholarship.name, formData);
    // Update submitted applications state
    const newApplication = {
      scholarshipId: scholarship.id,
      scholarshipName: scholarship.name,
      formData: formData,
    };
    setSubmittedApplications([newApplication, ...submittedApplications]);
    // Reset selected scholarship after submission
    setSelectedScholarship(null);
  };

  return (
    <div>
      {/* Display submitted applications at the top */}
      <div className="submitted-applications">
        <h2>Submitted Applications</h2>
        <ul>
          {submittedApplications.map((application, index) => (
            <li key={index}>
              <strong>{application.scholarshipName}</strong> - {JSON.stringify(application.formData)}
            </li>
          ))}
        </ul>
      </div>

      <div className="description">
        <h1>Scholarship Application</h1>
        <p>
          Welcome to our scholarship application portal. Here, you can apply for
          scholarships to support your education and achieve your academic goals.
        </p>
        <p>
          The scholarships are designed to help students in pursuing their dreams.
          <br />
          Please review the scholarship details and requirements carefully before
          applying.
        </p>
        <p>
          Feel free to explore the available scholarships and get started with
          your application today. If you have any questions or need assistance,
          please don't hesitate to reach out to our support team.
        </p>
      </div>
      <div className="details">
        {scholarships.map((scholarship) => (
          <div key={scholarship.id}>
            <ScholarshipCard
              scholarship={scholarship}
              onSelect={() => handleScholarshipClick(scholarship)}
            />
            {selectedScholarship && selectedScholarship.id === scholarship.id && (
              <ScholarshipForm
                scholarship={selectedScholarship}
                onSubmit={handleFormSubmit}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
