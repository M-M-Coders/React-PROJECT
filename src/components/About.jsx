import React from "react";
import "./about.css"
function About() {
  return (
    <div className="container">
      <h1>About Our Scholarship Program</h1>
      {/* Application Process Section */}
      <h2>Application process</h2>
      <p>
        Our program has a simple application process.Follow these process to
        apply:{" "}
      </p>
      <ul>
        <li>Step 1: Create an account or log in if you already have one.</li>
        <li>
          Step 2: Fill out the scholarship application form with your details.
        </li>
        <li>
          Step 3: Upload necessary documents, such as transcripts and
          recommendation letters.
        </li>
        <li>
          Step 4: Submit your application before the application deadline.
        </li>
      </ul>

      {/* Requirements section */}

      <h2>Requirements</h2>
      <p>
        To qualify for our scholarships, applicants must meet the following
        criteria:
      </p>
      <ul>
        <em>
          <li>Minimum GPA: 3.0</li>
          <li>Enrollment in an accredited educational institution</li>
          <li>Submission of all required documents</li>
          <li>Letter of recommendation from a teacher or mentor</li>
          <li>Participation in a community service project</li>
          <li>
            Interest in a STEM (Science, Technology, Engineering, or
            Mathematics) field
          </li>
          <li>Completion of a 500-word essay on a specified topic</li>
        </em>
      </ul>

      {/* fees section */}
      <h2>Fees</h2>
      <p>
        {" "}
        <strong>
          {" "}
          Our scholarship program is committed to providing financial support to
          eligible students without imposing any application or processing fees.
          We believe in making the application process accessible to all
          qualified applicants.{" "}
        </strong>
      </p>

      {/* scholarship fundings*/}

      <h2>Scholarship Fundings</h2>
      <p>
        We offer both partial and fully funded scholarships to cater to a wide
        range of students' needs.
      </p>
      <p>
        <strong>Partial Scholarships:</strong> These scholarships cover a
        portion of your tuition and related expenses.
      </p>
      <p>
        <strong>Fully Funded Scholarships:</strong> Our fully funded
        scholarships cover all your educational expenses, including tuition,
        books, and living costs.
      </p>

      
    </div>
  );
}

export default About;
