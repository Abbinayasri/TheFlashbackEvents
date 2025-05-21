import React, { useState } from "react";
import contactbg from "../assets/contactbg.webp";
import { db } from "../firebase"; // Import Firestore config
import { collection, addDoc, Timestamp } from "firebase/firestore";
import emailjs from 'emailjs-com';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  // Add state to track form submission
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Reset submission state when user starts typing again
    if (isSubmitted) {
      setIsSubmitted(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Save data to Firestore
      await addDoc(collection(db, "contacts"), {
        ...formData,
        createdAt: Timestamp.now()
      });
      try {
        await emailjs.send(
          'service_rtaolxt',
          'template_0pb6rqp',
          {
            name: formData.name,
            email: formData.email,
            title: formData.subject,
            message: formData.message
          },
          'Kmso8akKWrP2bbQSz'
        );
      } catch (error) {
        console.error("EmailJS Error:", error);
      }
      alert("Thank you for contacting us!");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form data: ", error);
      alert("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Define button styles based on submission state
  const getButtonStyle = () => {
    const baseStyle = {
      color: "white",
      padding: "12px 20px",
      border: "none",
      borderRadius: "5px",
      fontSize: "1rem",
      cursor: "pointer",
      transition: "background-color 0.3s ease"
    };

    if (isSubmitting) {
      return {
        ...baseStyle,
        backgroundColor: "#333", // Darker during submission
        cursor: "wait"
      };
    } else if (isSubmitted) {
      return {
        ...baseStyle,
        backgroundColor: "#444" // Darker after successful submission
      };
    } else {
      return {
        ...baseStyle,
        backgroundColor: "gray", // Original color
        "&:hover": {
          backgroundColor: "#555"
        }
      };
    }
  };

  return (
    <div style={{ backgroundColor: "black", color: "white", overflowX: "hidden" }}>
      {/* Background Image Section */}
      <div
        style={{
          backgroundImage: `url(${contactbg})`,
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
          <h1 style={{ fontWeight: "bold", fontSize: "6rem" }}>CONTACT</h1>
        </div>
      </div>

      {/* Contact Form Section */}
      <div style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "30px" }}>Send Us a Message</h2>
        <form
          onSubmit={handleSubmit}
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Your Name"
            onChange={handleChange}
            required
            style={{ padding: "10px", borderRadius: "5px", border: "1px solid gray" }}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Your Email"
            onChange={handleChange}
            required
            style={{ padding: "10px", borderRadius: "5px", border: "1px solid gray" }}
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            placeholder="Subject"
            onChange={handleChange}
            required
            style={{ padding: "10px", borderRadius: "5px", border: "1px solid gray" }}
          />
          <textarea
            name="message"
            value={formData.message}
            placeholder="Your Message"
            onChange={handleChange}
            rows="5"
            required
            style={{ padding: "10px", borderRadius: "5px", border: "1px solid gray" }}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            style={getButtonStyle()}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>

      {/* Map Section */}
      <div style={{ padding: "40px 0", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>Find Us Here</h2>
        <div style={{ width: "100%", margin: "0 auto", borderRadius: "10px", overflow: "hidden", border: "4px solid white" }}>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.348077655681!2d76.9044749759029!3d11.029779089114353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85f5f9d24c2d3%3A0x2a8b0145f06ac2c8!2sRottikarar%20thottam%2C%20Vadavalli%20-%20Edayarpalayam%20Rd%2C%20Coimbatore%2C%20Tamil%20Nadu%20641041!5e0!3m2!1sen!2sin!4v1712398280950!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
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
};

export default Contact;