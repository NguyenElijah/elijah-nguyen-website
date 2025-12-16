import ContactForm from "./ContactForm/ContactForm";
import LinkedinFullIcon from "../../assets/icons/LinkedinFullIcon.svg?react";
import OpenInNewTabIcon from "../../assets/icons/OpenInNewTabIcon.svg?react";
import "./Contact.scss";

function Contact() {

  return <>
    <h2>Contact</h2>
    <hr></hr>
    <div className="contact-options">
      <div className="contact-option-email">
        <h3>Send an Email</h3>
        <ContactForm />
      </div>
      <div className="contact-option-linkedin">
        <h3>Connect on</h3>
          <a href="https://www.linkedin.com/in/elijah-nguyen-106768178/" className="linkedin-link" target="_blank">
            <LinkedinFullIcon className="linkedin-icon"/>
            <div className="new-tab-icon" >
              <OpenInNewTabIcon />
            </div>             
          </a>
        </div>
      </div>
  </>
}

export default Contact
