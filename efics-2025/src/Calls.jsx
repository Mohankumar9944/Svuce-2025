import React from "react";

import "./Navbar"
import "./Navbar.css"
import "./Calls.css"
const Calls = () => {
  return (
    <div className="Calls-section">
      <div className="Inner-Calls-Section">
        <header className="Paper-section">
          <h1 className="Heading">Call For Papers</h1>
          <p className="Place">
            International Conference on Innovations, Challenges & Sustainable Mobility
          </p>
          <div className="Date-section">
            <div className="Inner-Date-section">
              <div className="Date" />
              <span>May 30-31, 2025</span>
            </div>
            <div className="Place-section">
              <div className="Location" />
              <span>SVUCE, Tirupati, India</span>
            </div>
          </div>
        </header>

        <section className="submission">
            <section className="guidelines">
              <h2 className="submission-heading">Submission Guidelines</h2>
              <ul className="submission-lists">
                <li>
                  <strong>Abstract Submission:</strong>
                  <ul className="guidelines-list">
                    <li>Abstracts must align with a specific conference theme and track.</li>
                    <li>Use Times New Roman 12-point font, double-spaced.</li>
                    <li>Title: Limited to 20 words (UPPER CASE).</li>
                    <li>Abstract Length: Max 200 words.</li>
                  </ul>
                </li>
                <li>
                  <strong>Full Paper Submission:</strong>
                  <ul className="Lists">
                    <li>Papers must be original and not published elsewhere.</li>
                    <li>Length: 6-8 pages (max 5000 words including references).</li>
                    <li>Formatting: Times New Roman, 12-point font, double-spaced.</li>
                    <li>File Format: Microsoft Word (.doc, .docx).</li>
                    <li>Papers exceeding the page limit may not be considered for publication.</li>
                  </ul>
                </li>
              </ul>
            </section>

            <section className="Important-Date-section">
              <h2 className="Important_date">Important Dates</h2>
              <ul className="List">
                <li>Abstract Submission Deadline: April 15, 2025</li>
                <li>Notification of Acceptance: April 31, 2025</li>
                <li>Full Paper Submission Deadline: May 7, 2025</li>
                <li>Final Acceptance & Registration: May 15, 2025</li>
              </ul>
            </section>

            <section className="publish-section">
              <h2 className="publish">Publication & Indexing</h2>
              <p className="more-details">
                All accepted papers will be peer-reviewed and considered for publication in Web of
                Science / Scopus / Google Scholar / UGC Care List indexed journals.
              </p>
            </section>

            <section className="registration-section">
              <h2 className="registration">Registration Fees & Payment Details</h2>
              <ul className="details">
                <li>Faculty/Industry person - Rs 2000</li>
                <li>PhD/PG Students - Rs 1500</li>
              </ul>
            </section>

            <div className="ppapers">
              <a href="https://forms.gle/1wcEjokbn5k6LYrz5" target="_blank">
              <button className="my-button" >
                Paper Submission
              </button>
              </a>
            </div>
        </section>
      </div>
    </div>
  );
};

export default Calls;