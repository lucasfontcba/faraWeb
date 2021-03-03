import React, { useState, useEffect } from "react";
// core version + navigation, pagination modules:
import "../css/Form.css";

function Form() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : setForm({ ...form, [name]: value });
  };

  return (
    <div className="containerForm">
      <div className="containerHeaderForm">
        <h3>
          Contact <span>Us</span>
        </h3>
      </div>
      <form>
        <div className="first6">
          <input
            type="text"
            value={form.firstName}
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
          />

          <input
            type="text"
            value={form.lastName}
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
          />

          <input
            type="email"
            value={form.email}
            name="email"
            placeholder="email "
            onChange={handleChange}
          />
          <input
            type="number"
            value={form.phone}
            name="phone"
            placeholder="phone "
            onChange={handleChange}
          />

         
            <select value={form.iam} name="iam" onChange={handleChange}>
              <option value="">-- i am --</option>
              <option value="germany">Germany</option>
              <option value="norway">Norway</option>
              <option value="north pole">North Pole</option>
              <option value="south pole">South Pole</option>
            </select>
            <select value={form.iam} name="iam" onChange={handleChange}>
              <option value="">-- Select flor plan --</option>
              <option value="germany">Germany</option>
              <option value="norway">Norway</option>
              <option value="north pole">North Pole</option>
              <option value="south pole">South Pole</option>
            </select>
       
        </div>
        <textarea  className='textarea' placeholder='Type your message here...' name="w3review" rows="4" cols="50" />

        <select id='using' value={form.iam} name="using" onChange={handleChange}>
          <option value="">-- Contact me using --</option>
          <option value="germany">Email</option>
          <option value="norway">Phone</option>
          <option value="north pole">Sms</option>
        </select>
        <div className='pContainer'>
        <p>
          By submitting this form, you agree to the usage of your personal data
          in accordance with our Privacy Policy. You acknowledge that such data
          will be used for the purpose of fulfilling the request in which the
          form you are submitting is applicable. You also agree to the
          acceptance of occasional follow up communication(s) in response to
          this request, by email, SMS, phone and other electronic means. Message
          and data rates may apply. Reply STOP to end.
        </p>
        </div>
        <div className="checkbox">
        <label>
          <input
            type="checkbox"
            name="agree"
            onChange={handleChange}
            checked={form.agree}
          />{" "}
          I agree
        </label>
        <br />

        <label>
          <input
            type="checkbox"
            name="dontAgree"
            onChange={handleChange}
            checked={form.dontAgree}
          />{" "}
          I do not agree
        </label>
        </div>
        <button>Send Now</button>
      </form>
    </div>
  );
}

export default Form;
