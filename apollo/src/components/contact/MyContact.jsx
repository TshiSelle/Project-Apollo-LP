import React from 'react';
import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import './contact.css';

const MyContact = () => {
  const [state, handleSubmit] = useForm('xpzbywbl');

  const handlErrors = (e) => {
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email == '' || textarea == '') {
      e.preventDefault();
      setMessage('Fields are empty');
      setVariant('danger');
      setVariant2('outline-danger');
      setShow(true);
    } else if (!re.test(email)) {
      e.preventDefault();
      setMessage('Please enter a correct email format');
      setVariant('danger');
      setVariant2('outline-danger');
      setShow(true);
    } else {
      setMessage('Success');
      setVariant('success');
      setVariant2('outline-success');
      setShow(true);
    }
  };

  const [show, setShow] = useState(false);
  const [message, setMessage] = useState('');
  const [variant, setVariant] = useState('');
  const [variant2, setVariant2] = useState('');
  const [textarea, setTextarea] = useState('');
  const [email, setEmail] = useState('');

  return (
    <section
      id='signup'
      className='container-fluid d-flex justify-content-center align-items-center  text-center w-100'
    >
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <div style={{ color: 'white' }}>
            <h1>Sign up to our Beta Test</h1>
            <hr className='w-75 ms-auto me-auto' />
          </div>
          <Alert show={show} variant={variant}>
            <Alert.Heading>{message}</Alert.Heading>

            <hr />
            <div className='d-flex justify-content-end'>
              <Button onClick={() => setShow(false)} variant={variant2}>
                Close
              </Button>
            </div>
          </Alert>

          <div class='form__group '>
            <input
              className='form__field'
              placeholder='Email'
              id='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label for='email' className='form__label'>
              Email
            </label>
          </div>
        </div>

        <div className='mb-3'>
          <div class='form__group '>
            <textarea
              className='form__field'
              placeholder='Enter your message'
              id='message'
              value={textarea}
              name='message'
              onChange={(e) => setTextarea(e.target.value)}
            />
            <label for='name' class='form__label'>
              Message
            </label>
          </div>
        </div>

        <button
          type='submit'
          className='button-17 btn_submit'
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
