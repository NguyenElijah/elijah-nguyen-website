import { useForm, ValidationError } from '@formspree/react';

import Lottie from 'lottie-react';
import EmailSentAnimation from '../../../assets/animations/EmailSent.json';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import Button from 'react-bootstrap/Button';

import './ContactForm.scss';

function ContactForm() {
  const [state, handleSubmit] = useForm("xzznvyrg");

  const UnsubmittedTemplate = <>
    <Form className="email-form" onSubmit={handleSubmit}>
      <FloatingLabel controlId="formName" label="Name" className="mb-3">
        <Form.Control name="name" required />
        <ValidationError prefix="name" field="name" errors={state.errors} />
      </FloatingLabel>
      <FloatingLabel controlId="formEmail" label="Email Address" className="mb-3">
        <Form.Control type="email" name="email" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </FloatingLabel>
      <FloatingLabel controlId="formMessage" label="Message" className="mb-3">
        <Form.Control className="form-text-area" as="textarea" style={{ height: "200px" }} name="message" required />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </FloatingLabel>
      <div className="button-container">
        <Button className="submit-button" variant="dark" type="submit" size="lg" disabled={state.submitting}>
          Submit
        </Button>
      </div>
    </Form>
  </>;

  const SubmittedTemplate = <>
    <div>
      <Lottie
        className="email-sent-animation"
        animationData={EmailSentAnimation}
        loop={false}
      />
      <div className="email-sent-text">Email Sent!</div>
    </div>
  </>;

  if (state.succeeded) {
    return SubmittedTemplate;
  }

  return UnsubmittedTemplate;
}

export default ContactForm