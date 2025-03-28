import React from "react";

const About = () => {
  return (
    <div className="about-container">
      <h1>About EmployWise</h1>
      <p>
        EmployWise is a frontend project built using React to demonstrate modern UI/UX principles. 
        It features user authentication, dynamic data fetching, and a responsive interface.
      </p>

      <h2>Technologies Used</h2>
      <ul>
        <li><strong>React:</strong> Component-based architecture for building reusable UI elements.</li>
        <li><strong>React Router:</strong> Navigation and page routing.</li>
        <li><strong>Axios:</strong> API requests to fetch and display user data.</li>
        <li><strong>CSS:</strong> Custom styling for a modern, responsive UI.</li>
      </ul>

      <h2>Project Features</h2>
      <ul>
        <li><strong>Login System:</strong> Users can authenticate using an API-based login.</li>
        <li><strong>User Dashboard:</strong> Displays a list of users with avatars and details.</li>
        <li><strong>Dynamic Routing:</strong> Pages are navigated using React Router.</li>
        <li><strong>Modern UI:</strong> Built with clean design principles and animations.</li>
      </ul>

      <h2>My Approach</h2>
      <p>
        This project was built with scalability and performance in mind. The component structure follows 
        a modular approach, ensuring easy updates and maintenance.
      </p>
    </div>
  );
};

export default About;
