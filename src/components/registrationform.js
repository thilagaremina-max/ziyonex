import React, { useState } from "react";
import "./registration.css";

function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    education: "School Student",
    address: "",
    course: "Robotics",
    referral:"Friend",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    // நீங்கள் கொடுத்த புதிய Google Script URL இங்கே உள்ளது
    const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbxXRAzaS_UWjGoPWNVvROH15rrvzgmGCtChcAtC5b8e3h3BzHIO84uL6k4v9va2rsIQ/exec"; 
  
    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors", // இது மிக முக்கியம்
        headers: { 
          "Content-Type": "application/json" 
        },
        body: JSON.stringify(formData),
      });
  
      // நோ-கோர்ஸ் (no-cors) பயன்முறை என்பதால் ரெஸ்பான்ஸ் வராது, 
      // அதனால் நேரடியாக வெற்றிகரமாக முடிந்தது என அறிவிக்கலாம்.
      alert("Registration Successful! Ziyonex team will contact you shortly.");
      
      // ஃபார்மை ரீசெட் செய்ய:
      setFormData({ 
        name: "", email: "", phone: "", age: "", 
        education: "School Student", address: "", 
        course: "Robotics", referral: "Friend", message: "" 
      });
  
    } catch (error) {
      console.error("Error!", error);
      alert("Registration failed. Please check your internet and try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="reg-container">
      <form className="reg-form" onSubmit={handleSubmit}>
        <h2>Ziyonex </h2>
        <p>Fill in the details to join our specialized classes</p>

        <div className="form-grid">
          <div className="input-group">
            <label>Student Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Full Name" />
          </div>

          <div className="input-group">
            <label>Age</label>
            <input type="number" name="age" value={formData.age} onChange={handleChange} required placeholder="Age" />
          </div>
        </div>

        <div className="input-group">
          <label>Email Address</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="example@gmail.com" />
        </div>

        <div className="input-group">
          <label>Phone Number</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="Contact Number" />
        </div>

        <div className="form-grid">
          <div className="input-group">
            <label>Education</label>
            <select name="education" value={formData.education} onChange={handleChange}>
              <option value="School Student">School Student</option>
              <option value="College Student">College Student</option>
              <option value="Working Professional">Working Professional</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <div className="input-group">
            <label>Interested Course</label>
            <select name="course" value={formData.course} onChange={handleChange}>
              <option value="Robotics">Robotics Classes 🤖</option>
              <option value="Web Development">Web Development(Full stack) 🌐</option>
              
              <option value="AI / ML Projects">AI / ML Projects 🧠</option>
              <option value="Python">Python</option>
              <option value="Java">Java</option>
              <option value="C / C++">C / C++</option>
              <option value="Flutter">Pcb Board Designing</option>
              <option value="Game Development">Game Development 🎮</option>
            </select>
          </div>
        </div>
        <div><label>
          who told you about us?</label>
          <select name="referral" value={formData.referral} onChange={handleChange}>
            <option value="Friend">Friend</option>
            <option value="Social Media">Social Media</option>
            <option value="TvAdd">Tv Advertisement</option>
            <option value="WallPost">Wall Post</option>
            <option value="BannerAdd">Banner Advertisement</option>
            
            <option value="Other">Other</option>
          </select>
          </div>

        <div className="input-group">
          <label>Address</label>
          <textarea name="address" rows="2" value={formData.address} onChange={handleChange} required placeholder="Full Residential Address"></textarea>
        </div>

        <div className="input-group">
          <label>Message (Optional)</label>
          <textarea name="message" rows="2" value={formData.message} onChange={handleChange} placeholder="Any questions?"></textarea>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Processing..." : "Register Now"}
        </button>
      </form>
    </div>
  );
}

export default Registration;