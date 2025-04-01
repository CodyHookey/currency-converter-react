import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_3mxsgwq", "template_3ot6fmb", form.current, {
        publicKey: "hw6bWTrUum66vGeFN",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="row">
        <div className="col-12">
          <label>Name:</label>
          <input
            type="text"
            name="user_name"
            className="d-block mb-2 form-control"
            placeholder="John Smith"
          />
        </div>
        <div className="col-12">
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            className="d-block mb-2 form-control"
            placeholder="johnsmith@example.com"
          />
        </div>
        <div className="col-12">
          <label>Your Message:</label>
          <textarea
            name="message"
            className="d-block mb-4 form-control pb-5"
            placeholder="Type your message here..."
          />
        </div>
      </div>
      <input type="submit" value="Submit" className="btn submitBtn" />
    </form>
  );
};

export default ContactUs;
