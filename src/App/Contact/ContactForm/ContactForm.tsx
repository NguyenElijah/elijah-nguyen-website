import { useForm, ValidationError } from '@formspree/react';
import { useState, type FormEvent } from 'react';

import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

import './ContactForm.scss';

function ContactForm() {
  const [state, handleSubmit] = useForm("xzznvyrg");
  const [disableForm, setDisableForm] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit;
    setDisableForm(true);
    setShowToast(true);
  };

  return <>
    <Form className="email-form" onSubmit={(event) => submitForm(event)}>
      <FloatingLabel
        controlId="formName"
        label="Name"
        className="mb-3"
      >
        <Form.Control
          name="name"
          disabled={disableForm}
          required
        />
        <ValidationError
          prefix="name"
          field="name"
          errors={state.errors}
        />
      </FloatingLabel>
      <FloatingLabel
        controlId="formEmail"
        label="Email Address"
        className="mb-3">
        <Form.Control
          type="email"
          name="email"
          disabled={disableForm}
          required
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
      </FloatingLabel>
      <FloatingLabel
        controlId="formMessage"
        label="Message"
        className="mb-3">
        <Form.Control
          as="textarea"
          style={{ height: "200px" }}
          name="message"
          disabled={disableForm}
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </FloatingLabel>
      <div className="toast-button-container">
        <Button className="submit-button" variant="dark" type="submit" size="lg" disabled={state.submitting || disableForm}>
          Submit
        </Button>
        <ToastContainer className="submitted-toast">
          <Toast show={showToast} onClose={() =>{setShowToast(false); setDisableForm(false);}}>
            <Toast.Header>
              <strong className="me-auto">Thank you!</strong>
            </Toast.Header>
            <Toast.Body>Your email has been sent!</Toast.Body>
          </Toast>
        </ToastContainer>
      </div>
    </Form>
  </>
}

export default ContactForm