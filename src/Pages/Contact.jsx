import ContactForm from "../components/ContactForm";
import "../css/Contact.css";

function Contact() {
  return (
    <>
      <div className="container mt-3">
        <div className="text-center">
          <h1 className="contactH1">Contact Us!</h1>
          <h2 className="contactH2 mb-5">
            Have a question? We're here to help!
          </h2>
        </div>
        <ContactForm />
      </div>
    </>
  );
}

export default Contact;
