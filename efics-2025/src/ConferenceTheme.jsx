import React from "react";
import "./Navbar"
import "./Navbar.css"
import "./ConferenceTheme.css"
  const ConferenceTheme = () => {
    return (
      <div className="containers">
        <h1>About the Conference</h1>
        <p>
          The Department of Electrical and Electronics Engineering (EEE) at Sri Venkateswara University College of Engineering (SVUCE), Tirupati, is proud to host EFICS-2025, a two-day international conference on May 30th and 31st, 2025. This event aims to provide a platform for academicians, industry professionals, and students to present their research innovations and engage in knowledge exchange.
        </p>
  
        <h2>About SVUCE, Tirupati</h2>
        <p>
          Established in 1959, Sri Venkateswara University College of Engineering (SVUCE) is a premier technological institution in India. Accredited by the National Board of Accreditation (NBA), SVUCE has a strong legacy of technical education excellence. EFICS-2025 focuses on emerging trends in electric vehicles (EVs), artificial intelligence (AI), smart mobility, and sustainable energy solutions.
        </p>
  
        <h2>List of Conference Tracks and Sub-themes</h2>
        <ul>
          <li><strong>Battery Technology Advancements</strong>
            <ul>
              <li>Developments in energy density and battery lifespan</li>
              <li>Innovations in fast-charging and thermal management</li>
              <li>Recycling and second-life applications for EV batteries</li>
            </ul>
          </li>
          <li><strong>Solid-State Batteries</strong>
            <ul>
              <li>High-energy-density solid-state battery research</li>
              <li>Safety improvements over traditional lithium-ion batteries</li>
              <li>Manufacturing challenges and commercialization strategies</li>
            </ul>
          </li>
          <li><strong>Fast-Charging Infrastructure</strong>
            <ul>
              <li>Expansion of ultra-fast charging networks</li>
              <li>Wireless and inductive charging technologies</li>
              <li>Smart charging solutions for grid optimization</li>
            </ul>
          </li>
          <li><strong>Vehicle-to-Grid (V2G) Technology</strong>
            <ul>
              <li>Bidirectional energy flow and grid stability</li>
              <li>Role of EVs in demand-side energy management</li>
              <li>Policies and regulatory frameworks for V2G adoption</li>
            </ul>
          </li>
          <li><strong>Autonomous Electric Vehicles</strong>
            <ul>
              <li>AI and deep learning for self-driving EVs</li>
              <li>Advanced sensors, LiDAR, and vehicle communication systems</li>
              <li>Ethical, legal, and safety challenges in autonomous EV deployment</li>
            </ul>
          </li>
        </ul>
      </div>
    );
  };
  
  export default ConferenceTheme;
  