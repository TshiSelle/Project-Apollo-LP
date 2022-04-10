import React from "react";
import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import "./contact.css";

const MyContact = () => {
  const [state, handleSubmit] = useForm("xpzbywbl");

  const handlErrors = (e) => {
    if (email == "" || textarea == "") {
      e.preventDefault();
      setMessage("Fields are empty");
      setVariant('danger');
      setVariant2('outline-danger')
      setShow(true);
    } 
    else{
      setMessage("Success");
      setVariant('success');
      setVariant2('outline-success')
      setShow(true);
    }

  };

  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState("");
  const [variant2, setVariant2] = useState("");
  const [textarea, setTextarea] = useState("");
  const [email, setEmail] = useState("");

  return (
    <section
      id="signup"
      className="container-fluid d-flex justify-content-center align-items-center  text-center w-100"
    >
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <Alert show={show} variant={variant}>
            <Alert.Heading>{message}</Alert.Heading>

            <hr />
            <div className="d-flex justify-content-end">
              <Button onClick={() => setShow(false)} variant={variant2}>
                Close
              </Button>
            </div>
          </Alert>
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            placeholder="Email"
            type="email"
            className="form-control"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
          placeholder="Enter your message"
            className="form-control"
            id="message"
            name="message"
            onChange={(e) => setTextarea(e.target.value)}
          />
        </div>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          type="submit"
          className="btn btn-primary"
          disabled={state.submitting}
          onClick={handlErrors}
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default MyContact;
