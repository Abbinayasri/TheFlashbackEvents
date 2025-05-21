import React from "react";
import gbg from "../assets/gbg.webp"; // Replace with your actual image path
import g1 from "../assets/g1.JPG";
import g2 from "../assets/g2.JPG";
// import g3 from "../assets/g3.JPG";
import g4 from "../assets/g4.JPG";
import g5 from "../assets/g5.JPG";
// import g6 from "../assets/g6.JPG";
import g7 from "../assets/g7.JPG";
import g8 from "../assets/g8.JPG";
import g9 from "../assets/g9.JPG";
import g10 from "../assets/g10.JPG";
import g11 from "../assets/g11.JPG";




const Gallery = () => {
  // Reunion information text blocks
  const reunionInfo = [
    {
      title: "Class Reunion 2023",
      text: "Our 10-year reunion brought together old friends and classmates to celebrate the memories we created together."
    },
    {
      title: "Memorable Moments",
      text: "From shared laughter to nostalgic stories, every moment reminded us of our cherished school days."
    },
    {
      title: "Reunion Highlights",
      text: "Photo booths, dance performances, awards ceremony and delicious food made our event truly unforgettable."
    },
    {
      title: "Rekindled Friendships",
      text: "Years may have passed, but the bonds we formed have remained strong through time and distance."
    }
  ];

  return (
    <div style={{ backgroundColor: "black", color: "white", overflowX: "hidden" }}>
      {/* Background Image Section */}
      <div
        style={{
          backgroundImage: `url(${gbg})`, // Use your actual background image
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
          <h1 style={{ fontWeight: "bold", fontSize: "6rem" }}>GALLERY</h1>
        </div>
      </div>

      {/* Content Section */}
      <div style={{ padding: "40px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>Our Captured Moments</h2>
        <p style={{ fontSize: "1.2rem", marginBottom: "50px", maxWidth: "800px", margin: "0 auto 40px auto" }}>
          Take a look at some of our favorite moments from past events. Each image tells a story of joy, connection, and celebration.
        </p>

        {/* Image and Text Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "25px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {/* First Row */}
          <div style={{ borderRadius: "10px", overflow: "hidden" }}>
            <img src={g1} alt="Event 1" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          
          {/* Text Block 1 */}
          <div style={{ 
            background: "linear-gradient(135deg, #2a1f5d 0%, #1a1a40 100%)",
            padding: "25px", 
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}>
            <h3 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>{reunionInfo[0].title}</h3>
            <p style={{ fontSize: "1.1rem", color: "#cccccc" }}>{reunionInfo[0].text}</p>
          </div>
          
          <div style={{ borderRadius: "10px", overflow: "hidden" }}>
            <img src={g2} alt="Event 2" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          
          {/* Second Row */}
          <div style={{ borderRadius: "10px", overflow: "hidden" }}>
            <img src={g8} alt="Event 3" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          
          <div style={{ borderRadius: "10px", overflow: "hidden" }}>
            <img src={g4} alt="Event 4" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          
          {/* Text Block 2 */}
          <div style={{ 
            background: "linear-gradient(135deg, #2a1f5d 0%, #1a1a40 100%)", 
            padding: "25px", 
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}>
            <h3 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>{reunionInfo[1].title}</h3>
            <p style={{ fontSize: "1.1rem", color: "#cccccc" }}>{reunionInfo[1].text}</p>
          </div>
          
          {/* Third Row */}
          {/* Text Block 3 */}
          <div style={{ 
            background: "linear-gradient(135deg, #2a1f5d 0%, #1a1a40 100%)",
            padding: "25px", 
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}>
            <h3 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>{reunionInfo[2].title}</h3>
            <p style={{ fontSize: "1.1rem", color: "#cccccc" }}>{reunionInfo[2].text}</p>
          </div>
          
          <div style={{ borderRadius: "10px", overflow: "hidden" }}>
            <img src={g8} alt="Event 5" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          
          <div style={{ borderRadius: "10px", overflow: "hidden" }}>
            <img src={g1} alt="Event 6" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          
          {/* Fourth Row */}
          <div style={{ borderRadius: "10px", overflow: "hidden" }}>
            <img src={g2} alt="Event 7" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          
          {/* Text Block 4 */}
          <div style={{ 
            background: "linear-gradient(135deg, #2a1f5d 0%, #1a1a40 100%)", 
            padding: "25px", 
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}>
            <h3 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>{reunionInfo[3].title}</h3>
            <p style={{ fontSize: "1.1rem", color: "#cccccc" }}>{reunionInfo[3].text}</p>
          </div>
          
          <div style={{ borderRadius: "10px", overflow: "hidden" }}>
            <img src={g7} alt="Event 8" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          
          {/* Fifth Row */}
          <div style={{ borderRadius: "10px", overflow: "hidden" }}>
            <img src={g9} alt="Event 9" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          
          <div style={{ borderRadius: "10px", overflow: "hidden" }}>
            <img src={g10} alt="Event 10" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          
          <div style={{ borderRadius: "10px", overflow: "hidden" }}>
            <img src={g11} alt="Event 11" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </div>

        {/* Footer Section */}
        <footer
          style={{
            backgroundColor: "#111",
            color: "#ccc",
            padding: "30px 20px",
            textAlign: "center",
            marginTop: "60px",
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
    </div>
  );
};

export default Gallery;