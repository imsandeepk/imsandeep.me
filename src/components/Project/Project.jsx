import React from 'react';
import proj from '../../assets/images/project.jpeg';
import proj1 from '../../assets/images/project1.jpeg';
import proj2 from '../../assets/images/project2.jpeg';

function Project() {
  // Define custom styles as JavaScript objects
  const cardStyles = {
    marginBottom: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const imageStyles = {
    objectFit: 'cover',
    maxHeight: '200px',
    width: '50%',
  };

  const buttonStyles = {
    marginTop: '10px',
    marginRight: '10px', // Add spacing between buttons
  };

  const projectTitleStyles = {
    fontWeight: 'bold',
    marginBottom: '1px',
  };

  const projectDescriptionStyles = {
    fontSize: '1rem', // Adjust the font size
    marginBottom: '2px',
  };

  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h1 className="text-center mb-4">My Projects</h1>
        <div className="row">
          {/* Project 1 */}
          <div className="col-md-6">
            <h4 style={projectTitleStyles}>1. Chatbot for Predicting Optical Gap </h4>
            <div className="card mb-4" style={cardStyles}>
              <div className="position-relative">
                <img
                  src={proj} // Replace with your project's image URL
                  alt="Project 1"
                  className="card-img-top img-fluid"
                  style={imageStyles}
                />
              </div>
              <div>
                <a
                  href="https://chatbot-phi-green.vercel.app/"
                  className="btn btn-primary"
                  style={buttonStyles} // Apply custom button styles
                >
                  View Project
                </a>
                <a
                  href="https://github.com/imsandeepk/digital-chatbot"
                  className="btn btn-primary"
                  style={buttonStyles} // Apply custom button styles
                >
                  View Code
                </a>
              </div>
            </div>
          </div>

          {/* Add more projects as needed */}<div className="col-md-6">
            <h4 style={projectTitleStyles}>2. Group Website of Professor Linjiang Chen. </h4>
            <div className="card mb-4" style={cardStyles}>
              <div className="position-relative">
                <img
                  src={proj1} // Replace with your project's image URL
                  alt="Project 1"
                  className="card-img-top img-fluid"
                  style={imageStyles}
                />
              </div>
              <div>
                <a
                  href="https://group-website-one.vercel.app/"
                  className="btn btn-primary"
                  style={buttonStyles} // Apply custom button styles
                >
                  View Project
                </a>
                <a
                  href="https://github.com/imsandeepk/group-website"
                  className="btn btn-primary"
                  style={buttonStyles} // Apply custom button styles
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
            <h4 style={projectTitleStyles}>3. Weather App </h4>
            <div className="card mb-4" style={cardStyles}>
              <div className="position-relative">
                <img
                  src={proj2} // Replace with your project's image URL
                  alt="Project 1"
                  className="card-img-top img-fluid"
                  style={imageStyles}
                />
              </div>
              <div>
                <a
                  href="https://github.com/imsandeepk/weatherapp/releases/tag/App"
                  className="btn btn-primary"
                  style={buttonStyles} // Apply custom button styles
                >
                  View Project
                </a>
                <a
                  href="https://github.com/imsandeepk/weatherapp"
                  className="btn btn-primary"
                  style={buttonStyles} // Apply custom button styles
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
          <div>
            <a href='https://github.com/imsandeepk'>
            More....
            </a>
          </div>
      </div>
      
    </section>
  );
}

export default Project;
