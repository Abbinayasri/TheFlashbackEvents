import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import bg from "../assets/bg.jpg"; 
import connectbg from "../assets/connectbg.webp";
import pho from "../assets/pho.jpeg";
import din from "../assets/din.webp";
import the from "../assets/the.webp";
import ball from "../assets/ball.jpeg";
import get from "../assets/get.jpeg";
import gang from "../assets/gang.jpeg";



function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  
  // Track which feature is being clicked for animation
  const [clickedFeature, setClickedFeature] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.5) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleFeatureClick = (index) => {
    setClickedFeature(index);
    
    // Navigate after a short delay to see the animation
    setTimeout(() => {
      navigate("/services");
    }, 300);
  };

  // Feature card styles with hover and click animations
  const getFeatureStyle = (index) => {
    return {
      textAlign: "center",
      cursor: "pointer",
      transition: "all 0.3s ease",
      transform: clickedFeature === index ? "scale(0.95)" : "scale(1)",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      borderRadius: "8px",
      overflow: "hidden",
      backgroundColor: "#111",
      padding: "0 0 15px 0",
      position: "relative",
      "&:hover": {
        transform: "translateY(-5px)",
      },
    };
  };

  // Image container style
  const imageContainerStyle = {
    overflow: "hidden",
    height: "300px",
    position: "relative",
  };

  return (
    <div style={{ 
      backgroundColor: "black", 
      color: "white",
      width: "100%",
      margin: 0,
      padding: 0,
      overflow: "hidden" // Prevent horizontal scrolling
    }}>
      {/* Background Image Section */}
      <div
        className="home"
        style={{
          position: "relative",
          backgroundImage: `url(${connectbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          color: "white",
          paddingLeft: "50px",
          zIndex: 1,
          overflow: "hidden",
          width: "100%", // Ensure full width
          boxSizing: "border-box", // Include padding in width calculation
        }}
      >
        <h1
          style={{
            fontWeight: "bold",
            fontSize: "7rem",
            marginBottom: "0px",
          }}
        >
          THE FLASHBACK
        </h1>
        <p
          style={{
            fontSize: "2rem",
            fontStyle: "normal",
            opacity: "1",
            alignItems: "center",
            paddingLeft: "30px",
            marginTop: "0px",
          }}
        >
          Relive, Reconnect, Rejoice
        </p>
      </div>

      {/* Text Section Below the Image */}
      <div
        className={`home-text ${isVisible ? "visible" : "hidden"}`}
        style={{
          textAlign: "center",
          padding: "50px 20px 20px",
          color: "white",
        }}
      ></div>

      {/* Main Mission Section - Connecting People */}
      <div
        className="mission-section"
        style={{
          textAlign: "center",
          backgroundColor: "#111",
          color: "white",
        }}
      >
        {/* Connecting People Section */}
        <div
          style={{
            textAlign: "center",
            backgroundColor: "black",
            color: "white",
          }}
        >
          <h2 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
            Connecting People Everywhere
          </h2>
          <p
            style={{
              fontSize: "1.3rem",
              maxWidth: "800px",
              margin: "auto",
            }}
          >
            we bring people back together—no matter where they are. Through calls, contact, and connection, we reunite long-lost friends, family, and loved ones. It's not just a reunion. It's a revival of memories, laughter, and togetherness.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div
        className="features-section"
        style={{
          textAlign: "center",
          backgroundColor: "black",
          padding: "30px 0",
          width: "100%",
          boxSizing: "border-box",
          color: "white",
        }}
      >
        {/* Features Section Title */}
        <h2
          style={{
            textAlign: "center",
            fontSize: "2.8rem",
            fontWeight: "bold",
            marginBottom: "20px",
            marginTop: "60px",
          }}
        >
          Our Special Features
        </h2>

        {/* Features Grid - First Row */}
        <div
          className="features-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
            width: "100%",
            padding: "0 20px",
          }}
        >
          {[
            {
              img: pho,
              text: "Finding friends",
            },
            {
              img: din,
              text: "Curating Enchanting Destinations",
            },
            {
              img: the,
              text: "Designing the Perfect Reunion Theme",
            },
          ].map((item, index) => (
            <div 
              key={index} 
              style={{
                ...getFeatureStyle(index),
                transform: clickedFeature === index ? "scale(0.95)" : "scale(1)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = "0 10px 20px rgba(255, 255, 255, 0.1)";
              }}
              onMouseLeave={(e) => {
                if (clickedFeature !== index) {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
                }
              }}
              onClick={() => handleFeatureClick(index)}
            >
              <div style={imageContainerStyle}>
                <img
                  src={item.img}
                  alt={`Feature ${index + 1}`}
                  style={{
                    width: "100%", 
                    height: "300px", 
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                    transform: clickedFeature === index ? "scale(1.1)" : "scale(1)",
                  }}
                />
              </div>
              <p
                style={{
                  fontSize: "1.2rem",
                  marginTop: "15px",
                  fontWeight: "bold",
                  padding: "0 10px",
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Features Grid - Second Row */}
        <div
          className="features-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
            marginTop: "20px",
            width: "100%",
            padding: "0 20px",
          }}
        >
          {[
            {
              img: ball,
              text: "Where Every Move Sparks Joy",
            },
            {
              img: get,
              text: "Replay the Moments, Cherish the Memories",
            },
            {
              img: gang,
              text: "Every Click, a Story of Togetherness",
            },
          ].map((item, index) => (
            <div 
              key={index + 3} 
              style={{
                ...getFeatureStyle(index + 3),
                transform: clickedFeature === (index + 3) ? "scale(0.95)" : "scale(1)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = "0 10px 20px rgba(255, 255, 255, 0.1)";
              }}
              onMouseLeave={(e) => {
                if (clickedFeature !== (index + 3)) {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
                }
              }}
              onClick={() => handleFeatureClick(index + 3)}
            >
              <div style={imageContainerStyle}>
                <img
                  src={item.img}
                  alt={`Feature ${index + 4}`}
                  style={{
                    width: "100%", 
                    height: "300px", 
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                    transform: clickedFeature === (index + 3) ? "scale(1.1)" : "scale(1)",
                  }}
                />
              </div>
              <p
                style={{
                  fontSize: "1.2rem",
                  marginTop: "15px",
                  fontWeight: "bold",
                  padding: "0 10px",
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      
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
          Designed by Team Flashback
        </p>
      </footer>
    </div>
  );
}

export default Home;