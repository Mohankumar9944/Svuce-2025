import React from 'react'
import "./Home.css"
import "./Navbar.jsx"
import "./Navbar.css"
const Home = () => {
  return (
    <>
    <div className="container">
        <header className="header">
          
          <div className="description">
            <h1>Electrifying the Future</h1>
            <p>International Conference on Innovations, Challenges & Sustainable Mobility (EFICS-2025)</p>
            <p>30th & 31st May, 2025</p>
          </div>
        </header>
  
        {/* About Section */}
        <section className="about">
          <h2>About Us</h2>
          <p>
          The Department of Electrical and Electronics Engineering (EEE) at Sri Venkateswara University College of Engineering (SVUCE), Tirupati, is proud to host EFICS-2025, a two-day international conference on May 30th and 31st, 2025. This event aims to provide a platform for academicians, industry professionals, and students to present their research innovations and engage in knowledge exchange.
          
  
          </p>
          <h2>About SVUCE, Tirupati</h2>
          
          <p>Established in 1959, Sri Venkateswara University College of Engineering (SVUCE) is a premier technological institution in India. The college, founded as a constituent of Sri Venkateswara University (SVU), Tirupati, was inaugurated by Pandit Jawaharlal Nehru, India's first Prime Minister. Nestled amidst the Seshachala hill range of Tirumala, SVUCE provides a serene academic environment spread over 1000 acres. Over the years, it has grown into a center of excellence in technical education, offering B.Tech, M.Tech, and Ph.D. programs in multiple disciplines, accredited by the National Board of Accreditation (NBA).
  EFICS-2025 focuses on emerging trends in electric vehicles (EVs), artificial intelligence (Al), smart mobility, and sustainable energy solutions, shaping the future of engineering and technology.
  EFICS-2025 aims to unite global researchers and industry experts for discussions on cutting-edge advancements. The conference invites research papers, industry case studies, and technical innovations in various engineering disciplines.</p>
  
        </section>
  
        {/* Keynote Speaker Section */}
        <section className="outer-section">
          <section className="keynote">
          
          <div className="speaker-card">
            <img src="KHU026088.png" alt="Prof. Jae Su Yu" className="speaker-img" />
            <div>
              <h2>OUR Keynote Speaker</h2>
              <div className="scroll-bar">
              <p>
              We are honored to welcome Prof. Jae Su Yu, a globally recognized expert in electronics, nanotechnology, and energy storage, with an h-index of 79 and over 24,995 citations. Named among the Global Top 2% Scientists (SCOPUS, 2022), he is a Professor at Kyung Hee University, Korea, leading advancements in wearable electronics, supercapacitors, bio-sensors, and energy harvesting technologies.
              With over 670 research papers, Prof. Yu has collaborated with top institutions like Northwestern University and UIUC. As Director of the Institute for Wearable Convergence Electronics, he continues to drive innovation in sustainable energy solutions. Don't miss his insights at our event!
              </p>
              <a href="https://drive.google.com/file/d/1IMuSyW8E7O531lfdaQMuOiZ0S2ilrTcJ/view?usp=sharing" target="blank" className="ReadMore">View More...</a>
              </div>
            </div>
          </div>
          </section>
        </section>
  
        {/* Schedule Section */}
        <section className="schedule">
          <h2>Event Schedule</h2>
          <p>Stay informed about the key deadlines for submission, review, and registration for the International Conference on Innovations, Challenges & Sustainable Mobility (EFICS-2025).</p>
          <table>
            <thead>
              <tr>
                <th>Event</th>
                <th>Deadline</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Abstract Submission</td>
                <td>April 15, 2025</td>
              </tr>
              <tr>
                <td>Notification of Acceptance</td>
                <td>April 31, 2025</td>
              </tr>
              <tr>
                <td>Full Paper Submission Deadline</td>
                <td>May 7, 2025</td>
              </tr>
              <tr>
                <td>Intimation to Participants</td>
                <td>May 15, 2025</td>
              </tr>
              <tr>
                <td>Conference Dates</td>
                <td>May 30-31, 2025</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </>
  )
}

export default Home