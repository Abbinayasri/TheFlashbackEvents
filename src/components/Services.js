import React, { useState, useEffect } from "react";
import serbg from "../assets/serbg.jpeg";
import emailjs from 'emailjs-com';
import { db } from "../firebase"; // adjust the path as needed
import { collection, addDoc } from "firebase/firestore";
import search from "../assets/search.webp";
import dining from "../assets/dining.jpeg";
import decor from "../assets/decor.jpeg";
import fun from "../assets/fun.jpg";
import photo from "../assets/photo.jpeg";
import pic from "../assets/pic.jpg";
import food from "../assets/food.webp";


function Services() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    date: "",
    theme: "",
    foodType: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("Kmso8akKWrP2bbQSz"); // Replace with your EmailJS public key
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ text: '', type: '' });
    
    try {
      // First, store data in Firebase
      await addDoc(collection(db, "eventRequests"), formData);
      
      // Then, send email using EmailJS
      await emailjs.send(
        'service_v6mulrf', // Your EmailJS service ID
        'template_0qj6rod', // Your EmailJS template ID
        {
          name: formData.name,
          phone: formData.phone,
          location: formData.location,
          date: formData.date,
          theme: formData.theme,
          foodType: formData.foodType,
        }
      );
      
      // Show success message
      setMessage({ 
        text: 'Thank you for booking your event! We\'ll contact you soon.', 
        type: 'success' 
      });
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        location: '',
        date: '',
        theme: '',
        foodType: ''
      });
      
    } catch (error) {
      console.error("Error submitting form: ", error);
      setMessage({ 
        text: 'Failed to submit your booking. Please try again later.', 
        type: 'error' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div style={{ backgroundColor: "#111", color: "white", minHeight: "100vh" }}>
      <div
        style={{
          backgroundImage: `url(${serbg})`,
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
        <h1 style={{ fontSize: "6rem" }}>SERVICES</h1>
      </div>

      <div style={{ padding: "20px" }}>
        <h2 style={{ fontSize: "2.5rem", textAlign: "center" }}>Our Special Services</h2>
        <p style={{ fontSize: "1.2rem", maxWidth: "800px", margin: "20px auto",marginBottom:"80px", textAlign: "center" }}>
        We provide a variety of features to help bring people together. From finding old friends to designing unforgettable reunion themes, we are committed to making every moment special. Whether it's reconnecting with long-lost companions, organizing fun-filled activities, or arranging memorable decor, we ensure that every detail is tailored to your vision.
        </p>
        
        {/* Service Details - Full Width, Alternating Layout */}
<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "40px", width: "100%" }}>
<div style={{ flex: 1 }}>
  <img
    src={search}
    alt="Finding Friends"
    style={{ width: "100%", height: "500px", objectFit: "cover", borderRadius: "8px" }}
  />
</div>
<div style={{ flex: 1, padding: "20px" }}>
  <h3 style={{ fontSize: "2rem" }}>Find your Beloved Friends</h3>
  <p style={{ fontSize: "1.5rem" }}>
    Life gets busy, and sometimes we lose touch with the people who once meant the world to us. Whether it's a childhood best friend, an old classmate, or someone who made your college years unforgettable — we're here to help you find them again. <br /><br />
    Using a mix of modern tools and social platforms like phone outreach, Instagram, Facebook, and even old-school methods if needed, we help track down and reconnect you with those special individuals. Our mission is to remove the awkwardness and the distance that time creates. <br /><br />
  
    With our thoughtful coordination and attention to detail, you won't just be finding friends — you'll be reviving the most cherished chapters of your life.
  </p>
</div>
</div>

<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "40px", width: "100%" }}>
<div style={{ flex: 1, padding: "20px" }}>
  <h3 style={{ fontSize: "2rem" }}>Choosing the Perfect Destination for Your Meeting</h3>
  <p style={{ fontSize: "1.5rem" }}>
    When it comes to hosting a successful meeting or event, the location is just as important as the agenda. At The Flashback Events, we specialize in selecting the perfect destination that aligns with your objectives and sets the tone for a productive and memorable experience.

    Whether you're planning a corporate meeting, team-building event, or an important client discussion, our team takes the time to understand your needs, preferences, and goals to recommend the most suitable venue.
  </p>
</div>
<div style={{ flex: 1 }}>
  <img
    src={dining}
    alt="Enchanting Destinations"
    style={{ width: "100%", height: "500px", objectFit: "cover", borderRadius: "8px" }}
  />
</div>
</div>

<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "40px", width: "100%" }}>
<div style={{ flex: 1 }}>
  <img
    src={decor}
    alt="Reunion Themes"
    style={{ width: "100%", height: "500px", objectFit: "cover", borderRadius: "8px" }}
  />
</div>
<div style={{ flex: 1, padding: "20px" }}>
  <h3 style={{ fontSize: "2rem" }}>Selecting the Perfect Theme and Arranging Decorations for Your Meeting</h3>
  <p style={{ fontSize: "1.5rem" }}>
    The theme of your meeting or event sets the stage for the entire experience, helping to create the right atmosphere and leaving a lasting impression on your attendees. At The Flashback Events, we work closely with you to select a theme that aligns with your goals, values, and vision for the event.
    <br></br>
    <br></br>Whether you're hosting a corporate strategy session, a creative brainstorming meeting, or a celebration of success, we ensure that the theme reflects the essence of your purpose.
  </p>
</div>
</div>

<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "40px", width: "100%" }}>
<div style={{ flex: 1, padding: "20px" }}>
  <h3 style={{ fontSize: "2rem" }}>Arranging Fun Games and Activities for a Joyful Reunion Event</h3>
  <p style={{ fontSize: "1.5rem" }}>
    Variety of Fun Games: Whether it's friendly competition, problem-solving, or just a laugh-out-loud moment, we organize a variety of games that suit all age groups and personalities. Choose from trivia quizzes, scavenger hunts, relay races, or even themed contests!
    <br></br>
    <br></br>
    Interactive Experiences: For a more immersive experience, we include activities like karaoke, dance-offs, or team-based challenges that encourage everyone to get involved and have fun together.
    <br></br>
    <br></br>
    Inclusive and Customizable: We make sure the games and activities are inclusive for all guests, with options for different levels of physical ability, group sizes, and preferences. You can even customize games to incorporate themes, inside jokes, or memories from past reunions.
  </p>
</div>
<div style={{ flex: 1 }}>
  <img
    src={fun}
    alt="Memory Lane"
    style={{ width: "100%", height: "600px", objectFit: "cover", borderRadius: "8px" }}
  />
</div>
</div>

<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "40px", width: "100%" }}>
<div style={{ flex: 1 }}>
  <img
    src={photo}
    alt="Reunion Themes"
    style={{ width: "100%", height: "600px", objectFit: "cover", borderRadius: "8px" }}
  />
</div>
<div style={{ flex: 1, padding: "20px" }}>
  <h3 style={{ fontSize: "2rem" }}>Arranging Flashback Photos and Videos Display</h3>
  <p style={{ fontSize: "1.5rem" }}>
    Personalized Photo and Video Slideshow: We curate a collection of your favorite photos and videos from past events, creating a heartwarming slideshow that will evoke laughter and smiles as everyone reminisces together.
    <br></br>
    <br></br>
    Interactive Viewing Experience: With a carefully crafted display, we make sure everyone can enjoy the memories in a cozy, interactive way. Guests can share their favorite moments or stories as the photos and videos roll, adding a personal touch to the event.
    <br></br>
    <br></br>
    Custom Themed Flashbacks: Want to relive a specific time or theme, like the 90s or a school reunion? We can customize the flashback collection with specific themes that will remind everyone of those fun times.
  </p>
</div>
</div>

<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "40px", width: "100%" }}>
<div style={{ flex: 1, padding: "20px" }}>
  <h3 style={{ fontSize: "2rem" }}>Delicious Food for the Perfect Gathering</h3>
  <p style={{ fontSize: "1.5rem" }}>
    Buffet or Family-Style Meal: Choose from a buffet setup for easy access to a variety of dishes or a family-style service for a more intimate feel. We offer options for both casual and formal dining to suit the style of your event.
    <br></br>
    <br></br>
    Customized Menu: From comfort foods to gourmet meals, we work with you to design a menu that suits the preferences and dietary needs of your guests. Whether it's vegetarian, vegan, gluten-free, or special cuisines, we've got it covered.
    <br></br>
    <br></br>
    Finger Foods and Snacks: For a more relaxed, snack-filled vibe, we offer platters of finger foods, appetizers, and fun food stations that guests can enjoy throughout the event.
  </p>
</div>
<div style={{ flex: 1 }}>
  <img
    src={food}
    alt="Memory Lane"
    style={{ width: "100%", height: "600px", objectFit: "cover", borderRadius: "8px" }}
  />
</div>
</div>

<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "40px", width: "100%" }}>
<div style={{ flex: 1 }}>
  <img
    src={pic}
    alt="Reunion Themes"
    style={{ width: "100%", height: "600px", objectFit: "cover", borderRadius: "8px" }}
  />
</div>
<div style={{ flex: 1, padding: "20px" }}>
  <h3 style={{ fontSize: "2rem" }}>Arranging the Final Photography Session for Cherished Moments</h3>
  <p style={{ fontSize: "1.5rem" }}>
    Group Photos: We organize a professional photography session where everyone can come together for a beautiful group photo. Whether it's a large family, childhood friends, or colleagues, we ensure that everyone is included in the shot, making sure to capture the bonds shared.
    <br></br>
    <br></br>
    Special Moments with Loved Ones: In addition to group shots, we offer opportunities for guests to take photos with their closest friends, family, or significant others. These intimate moments will serve as lasting reminders of their shared experience.
    <br></br>
    <br></br>
    Personalized Poses and Settings: Our photographers work with you to create customized photo settings, ensuring the photos reflect the style and theme of your reunion. Whether it's a scenic outdoor setting or a cozy indoor backdrop, we make sure each photo tells a unique story.
  </p>
</div>
</div>

        {/* Additional service sections... */}
        
        {/* Event Booking Form Section */}
        <div style={{ maxWidth: "800px", margin: "60px auto", backgroundColor: "#222", padding: "30px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }}>
          <h2 style={{ fontSize: "2.2rem", textAlign: "center", marginBottom: "20px" }}>Book Your Event</h2>
          <p style={{ fontSize: "1.1rem", textAlign: "center", marginBottom: "30px" }}>
            Ready to create unforgettable memories? Fill out the form below and we'll help you plan the perfect reunion.
          </p>
          
          {/* Message display */}
          {message.text && (
            <div style={{ 
              padding: "10px", 
              marginBottom: "20px",
              borderRadius: "5px",
              backgroundColor: message.type === 'success' ? '#2e7d32' : '#c62828',
              color: "white",
              textAlign: "center"
            }}>
              {message.text}
            </div>
          )}
          
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <input 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              placeholder="Your Name" 
              style={{ padding: "12px", borderRadius: "5px", border: "none", fontSize: "1rem" }} 
              required
            />
            
            <input 
              name="phone" 
              value={formData.phone} 
              onChange={handleChange} 
              placeholder="Phone Number" 
              style={{ padding: "12px", borderRadius: "5px", border: "none", fontSize: "1rem" }} 
              required
            />
            
            <input 
              name="location" 
              value={formData.location} 
              onChange={handleChange} 
              placeholder="Preferred Location" 
              style={{ padding: "12px", borderRadius: "5px", border: "none", fontSize: "1rem" }} 
              required
            />
            
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label style={{ marginBottom: "5px", fontSize: "0.9rem", color: "#ccc" }}>Event Date</label>
              <input 
                type="date" 
                name="date" 
                value={formData.date} 
                onChange={handleChange} 
                style={{ padding: "12px", borderRadius: "5px", border: "none", fontSize: "1rem" }} 
                required
              />
            </div>
            
            <input 
              name="theme" 
              value={formData.theme} 
              onChange={handleChange} 
              placeholder="Event Theme" 
              style={{ padding: "12px", borderRadius: "5px", border: "none", fontSize: "1rem" }} 
            />
            
            <input 
              name="foodType" 
              value={formData.foodType} 
              onChange={handleChange} 
              placeholder="Preferred Food Type" 
              style={{ padding: "12px", borderRadius: "5px", border: "none", fontSize: "1rem" }} 
            />
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              style={{ 
                backgroundColor: "#e9a33a", 
                color: "white", 
                padding: "15px", 
                borderRadius: "5px", 
                border: "none", 
                fontSize: "1.1rem", 
                fontWeight: "bold",
                cursor: isSubmitting ? "not-allowed" : "pointer",
                opacity: isSubmitting ? 0.7 : 1,
                transition: "background-color 0.3s" 
              }}
              onMouseOver={(e) => !isSubmitting && (e.currentTarget.style.backgroundColor = "#f0b456")}
              onMouseOut={(e) => !isSubmitting && (e.currentTarget.style.backgroundColor = "#e9a33a")}
            >
              {isSubmitting ? "Submitting..." : "Submit Request"}
            </button>
          </form>
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
            Designed by Abbi
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Services;

{/* Service Details - Full Width, Alternating Layout */}
{/* <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "40px", width: "100%" }}>
<div style={{ flex: 1 }}>
  <img
    src="https://images.pexels.com/photos/3585092/pexels-photo-3585092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    alt="Finding Friends"
    style={{ width: "100%", height: "500px", objectFit: "cover", borderRadius: "8px" }}
  />
</div>
<div style={{ flex: 1, padding: "20px" }}>
  <h3 style={{ fontSize: "2rem" }}>Find your Beloved Friends</h3>
  <p style={{ fontSize: "1.5rem" }}>
    Life gets busy, and sometimes we lose touch with the people who once meant the world to us. Whether it's a childhood best friend, an old classmate, or someone who made your college years unforgettable — we're here to help you find them again. <br /><br />
    Using a mix of modern tools and social platforms like phone outreach, Instagram, Facebook, and even old-school methods if needed, we help track down and reconnect you with those special individuals. Our mission is to remove the awkwardness and the distance that time creates. <br /><br />
  
    With our thoughtful coordination and attention to detail, you won't just be finding friends — you'll be reviving the most cherished chapters of your life.
  </p>
</div>
</div>

<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "40px", width: "100%" }}>
<div style={{ flex: 1, padding: "20px" }}>
  <h3 style={{ fontSize: "2rem" }}>Choosing the Perfect Destination for Your Meeting</h3>
  <p style={{ fontSize: "1.5rem" }}>
    When it comes to hosting a successful meeting or event, the location is just as important as the agenda. At The Flashback Events, we specialize in selecting the perfect destination that aligns with your objectives and sets the tone for a productive and memorable experience.

    Whether you're planning a corporate meeting, team-building event, or an important client discussion, our team takes the time to understand your needs, preferences, and goals to recommend the most suitable venue.
  </p>
</div>
<div style={{ flex: 1 }}>
  <img
    src="https://images.pexels.com/photos/16632781/pexels-photo-16632781/free-photo-of-tableware-and-flowers-on-table-with-paintings-on-wall-behind.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    alt="Enchanting Destinations"
    style={{ width: "100%", height: "500px", objectFit: "cover", borderRadius: "8px" }}
  />
</div>
</div>

<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "40px", width: "100%" }}>
<div style={{ flex: 1 }}>
  <img
    src="https://images.pexels.com/photos/10282444/pexels-photo-10282444.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    alt="Reunion Themes"
    style={{ width: "100%", height: "500px", objectFit: "cover", borderRadius: "8px" }}
  />
</div>
<div style={{ flex: 1, padding: "20px" }}>
  <h3 style={{ fontSize: "2rem" }}>Selecting the Perfect Theme and Arranging Decorations for Your Meeting</h3>
  <p style={{ fontSize: "1.5rem" }}>
    The theme of your meeting or event sets the stage for the entire experience, helping to create the right atmosphere and leaving a lasting impression on your attendees. At The Flashback Events, we work closely with you to select a theme that aligns with your goals, values, and vision for the event.
    <br></br>
    <br></br>Whether you're hosting a corporate strategy session, a creative brainstorming meeting, or a celebration of success, we ensure that the theme reflects the essence of your purpose.
  </p>
</div>
</div>

<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "40px", width: "100%" }}>
<div style={{ flex: 1, padding: "20px" }}>
  <h3 style={{ fontSize: "2rem" }}>Arranging Fun Games and Activities for a Joyful Reunion Event</h3>
  <p style={{ fontSize: "1.5rem" }}>
    Variety of Fun Games: Whether it's friendly competition, problem-solving, or just a laugh-out-loud moment, we organize a variety of games that suit all age groups and personalities. Choose from trivia quizzes, scavenger hunts, relay races, or even themed contests!
    <br></br>
    <br></br>
    Interactive Experiences: For a more immersive experience, we include activities like karaoke, dance-offs, or team-based challenges that encourage everyone to get involved and have fun together.
    <br></br>
    <br></br>
    Inclusive and Customizable: We make sure the games and activities are inclusive for all guests, with options for different levels of physical ability, group sizes, and preferences. You can even customize games to incorporate themes, inside jokes, or memories from past reunions.
  </p>
</div>
<div style={{ flex: 1 }}>
  <img
    src="https://media.istockphoto.com/id/1168469169/photo/karaoke-party.jpg?b=1&s=612x612&w=0&k=20&c=bs_QJGu-zzHLeDIkEIz4wexQUZlLVwu2TQEqURIfdX4="
    alt="Memory Lane"
    style={{ width: "100%", height: "600px", objectFit: "cover", borderRadius: "8px" }}
  />
</div>
</div>

<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "40px", width: "100%" }}>
<div style={{ flex: 1 }}>
  <img
    src="https://images.pexels.com/photos/4956243/pexels-photo-4956243.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    alt="Reunion Themes"
    style={{ width: "100%", height: "600px", objectFit: "cover", borderRadius: "8px" }}
  />
</div>
<div style={{ flex: 1, padding: "20px" }}>
  <h3 style={{ fontSize: "2rem" }}>Arranging Flashback Photos and Videos Display</h3>
  <p style={{ fontSize: "1.5rem" }}>
    Personalized Photo and Video Slideshow: We curate a collection of your favorite photos and videos from past events, creating a heartwarming slideshow that will evoke laughter and smiles as everyone reminisces together.
    <br></br>
    <br></br>
    Interactive Viewing Experience: With a carefully crafted display, we make sure everyone can enjoy the memories in a cozy, interactive way. Guests can share their favorite moments or stories as the photos and videos roll, adding a personal touch to the event.
    <br></br>
    <br></br>
    Custom Themed Flashbacks: Want to relive a specific time or theme, like the 90s or a school reunion? We can customize the flashback collection with specific themes that will remind everyone of those fun times.
  </p>
</div>
</div>

<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "40px", width: "100%" }}>
<div style={{ flex: 1, padding: "20px" }}>
  <h3 style={{ fontSize: "2rem" }}>Delicious Food for the Perfect Gathering</h3>
  <p style={{ fontSize: "1.5rem" }}>
    Buffet or Family-Style Meal: Choose from a buffet setup for easy access to a variety of dishes or a family-style service for a more intimate feel. We offer options for both casual and formal dining to suit the style of your event.
    <br></br>
    <br></br>
    Customized Menu: From comfort foods to gourmet meals, we work with you to design a menu that suits the preferences and dietary needs of your guests. Whether it's vegetarian, vegan, gluten-free, or special cuisines, we've got it covered.
    <br></br>
    <br></br>
    Finger Foods and Snacks: For a more relaxed, snack-filled vibe, we offer platters of finger foods, appetizers, and fun food stations that guests can enjoy throughout the event.
  </p>
</div>
<div style={{ flex: 1 }}>
  <img
    src="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    alt="Memory Lane"
    style={{ width: "100%", height: "600px", objectFit: "cover", borderRadius: "8px" }}
  />
</div>
</div>

<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "40px", width: "100%" }}>
<div style={{ flex: 1 }}>
  <img
    src="https://media.istockphoto.com/id/1390218870/photo/friends-photographing-at-christmas-dinner-party.jpg?s=612x612&w=0&k=20&c=Vr8ZyV_ayplwkj7qlcw-DDxTXwBH5GYDqyTBO2g5lag="
    alt="Reunion Themes"
    style={{ width: "100%", height: "600px", objectFit: "cover", borderRadius: "8px" }}
  />
</div>
<div style={{ flex: 1, padding: "20px" }}>
  <h3 style={{ fontSize: "2rem" }}>Arranging the Final Photography Session for Cherished Moments</h3>
  <p style={{ fontSize: "1.5rem" }}>
    Group Photos: We organize a professional photography session where everyone can come together for a beautiful group photo. Whether it's a large family, childhood friends, or colleagues, we ensure that everyone is included in the shot, making sure to capture the bonds shared.
    <br></br>
    <br></br>
    Special Moments with Loved Ones: In addition to group shots, we offer opportunities for guests to take photos with their closest friends, family, or significant others. These intimate moments will serve as lasting reminders of their shared experience.
    <br></br>
    <br></br>
    Personalized Poses and Settings: Our photographers work with you to create customized photo settings, ensuring the photos reflect the style and theme of your reunion. Whether it's a scenic outdoor setting or a cozy indoor backdrop, we make sure each photo tells a unique story.
  </p>
</div>
</div> */}