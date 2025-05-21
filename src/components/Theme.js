import React from "react";
import thebg from "../assets/thebg.jpeg";
import beach from "../assets/beach.jpeg";
import royal from "../assets/royal.webp";
import vin from "../assets/vin.webp";
import garden from "../assets/garden.webp";
import aes from "../assets/aes.jpeg";
import clock from "../assets/clock.jpeg";
 // Replace with your background image

function Theme() {
  return (
    <div style={{ backgroundColor: "#111", color: "white", minHeight: "100vh" }}>
      {/* Hero Section */}
      <div
        className="home"
        style={{
          backgroundImage: `url(${thebg})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          color: "white",
          paddingLeft: "50px",
        }}
      >
       <h1
    style={{
      fontWeight: "bold",
      fontSize: "7rem",
      marginBottom: "0px",
    }}
  >
    THEME
  </h1>
      </div>

      {/* Description */}
      <div style={{ padding: "40px 20px", maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>Pick a Vibe, Set the Mood!</h2>
        <p style={{ fontSize: "1.2rem", marginBottom: "60px" }}>
          Our theme curation service transforms your reunion into an immersive experience. From nostalgic to chic, quirky to elegant —
          we’ve got a theme to match every memory. Explore some of our most loved themes below:
        </p>
      </div>

      {/* Themes Grid */}
<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
    padding: "0 20px 80px",
    maxWidth: "1000px",
    margin: "0 auto"
  }}
>
  {[
    {
      title: "Retro Reunion",
      img: clock,
      desc: "Go back to the groovy 70s, 80s, or 90s! Neon lights, polaroid booths, and disco balls for that full flashback vibe."
    },
    {
      title: "Beach Bash",
      img: beach,
      desc: "Feel the breeze with beach hats, tropical drinks, seashell decor, and sand-inspired fun."
    },
    {
      title: "Bollywood Night",
      img: aes, // Indoor ambiance
      desc: "Step into a filmy night indoors! Decorate with fairy lights, floor seating, and colorful drapes while dancing to your favorite Bollywood hits."
    },
    
    {
      title: "Garden Glow",
      img: garden,
      desc: "Fairy lights, flower walls, and rustic setups — perfect for evening get-togethers in open air."
    },
    {
      title: "Royal",
      img: royal, // assuming 'royal' is a local image you've imported
      desc: "Experience a night of regal elegance with velvet drapes, golden accents, and a majestic atmosphere fit for royalty. Dress in traditional or royal-inspired attire and let the grandeur unfold."
    },    
    {
      title: "Vintage voyage",
      img: vin,
      desc: "Step back in time with antique decor, retro music, and classic charm. Think gramophones, typewriters, lace linens, and timeless fashion that bring the golden era to life."
    }
  ].map((theme, idx) => (
    <div
      key={idx}
      style={{
        backgroundColor: "#222",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 0 10px rgba(255,255,255,0.1)"
      }}
    >
      <img
        src={theme.img}
        alt={theme.title}
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
      />
      <div style={{ padding: "20px" }}>
        <h3 style={{ fontSize: "1.8rem", marginBottom: "10px" }}>
          {theme.title}
        </h3>
        <p style={{ fontSize: "1.1rem" }}>{theme.desc}</p>
      </div>
    </div>
    
  ))}
  
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

export default Theme;
