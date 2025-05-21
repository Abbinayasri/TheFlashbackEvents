import React from "react";
import aboutbg from "../assets/aboutbg.jpeg"; 

const About = () => {
  return (
    <div style={{ backgroundColor: "black", color: "white", overflowX: "hidden" }}>
      {/* Background Image Section */}
      <div
        style={{
          backgroundImage: `url(${aboutbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          textAlign: "left",
          paddingLeft: "50px",
        }}
      >
        <div style={{ maxWidth: "600px", padding: "0 20px" }}>
          <h1 style={{ fontWeight: "bold", fontSize: "6rem" }}>ABOUT US</h1>
        </div>
      </div>

      {/* Content Section */}
      <div style={{ padding: "40px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>Our Story</h2>
        <p style={{ fontSize: "1.2rem", marginBottom: "20px", maxWidth: "800px", margin: "0 auto" }}>
          Welcome to our company! We specialize in bringing people together and creating unforgettable experiences. 
          From organizing fun-filled reunions to designing the perfect atmosphere for your events, 
          our goal is to ensure every moment is memorable.
        </p>
        <p style={{ fontSize: "1.2rem", marginBottom: "20px", maxWidth: "800px", margin: "0 auto" }}>
          We offer a range of services, including venue selection, theme design, photography, and catering. 
          Whatever your needs are, we are committed to delivering excellence and ensuring your event is seamless and stress-free.
        </p>
        
        <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>Our Mission</h2>
        <p style={{ fontSize: "1.2rem", marginBottom: "20px", maxWidth: "800px", margin: "0 auto" }}>
          To make every event unforgettable by providing personalized, detailed, and high-quality event planning services 
          that bring people together in meaningful ways.
        </p>

        {/* Footer Section */}
<footer
  style={{
    backgroundColor: "#111",
    color: "#ccc",
    padding: "30px 20px",
    textAlign: "center",
    marginTop: "40px",
    borderTop: "1px solid #333",
  }}
>
  <p style={{ fontSize: "1rem", margin: "5px 0" }}>
    &copy; {new Date().getFullYear()} The Flashback. All rights reserved.
  </p>
  <p style={{ fontSize: "0.9rem", margin: "5px 0" }}>
    Designed  by Team Flashback
  </p>
</footer>
        
      </div>
    </div>
  );
};

export default About;
