import { useState } from 'react';

// Here we import a helper function that will check if the email is valid
// import { validateEmail } from './utils/helpers';

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!name || !message) {
      setErrorMessage(
        `All fields required. Please enter text.`
      );
      return;
    }
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    };

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setMessage('');
    setEmail('');
  };

  return (
    <>
      <h1 className="d-flex justify-content-start m-1">Send me a message!</h1>
      <div className="container d-flex align-items-center justify-content-center mt-5 pt-5">
        <form className="form row" onSubmit={handleFormSubmit}>
          <div className="input-group mb-2">
            <span className="input-group-text email-span">Email</span>
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              placeholder="example@email.com"
              id="email-input"
            />
          </div>
          <div className="input-group mb-2">
            <span className="input-group-text name-span">Name</span>
            <input
              value={name}
              name="name"
              onChange={handleInputChange}
              type="text"
              placeholder="John Smith"
              id="name-input"
            />
          </div>
          <input
            value={message}
            name="message"
            onChange={handleInputChange}
            type="message"
            placeholder="Message..."
            id="message-input"
            className="mb-2"
          />
          <button className="btn btn-outline-success submit-button" type="submit">Submit</button>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Contact;