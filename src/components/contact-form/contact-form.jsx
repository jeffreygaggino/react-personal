import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div id="contact" className="content">
        <h1 className="title code">
          <span className="codewords">Contact&nbsp;</span>
        </h1>
        <form
          id="contact-form"
          onSubmit={this.submitForm}
          action="https://formspree.io/xrgyzwzk"
          method="POST"
        >
          <label>Email:</label>
          <input className="contact__form-field" type="email" name="email" />
          <label>Message:</label>
          <textarea
            className="contact__form-field"
            type="text"
            name="message"
          />
          <div id="contact-form-button" className="code">
            {status === "SUCCESS" ? (
              <React.Fragment>
                <button className="box-button codewords">
                  <span className="">THANKS!</span>
                </button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <button className="box-button codewords">
                  <span className="">SUBMIT</span>
                </button>
              </React.Fragment>
            )}
            {status === "ERROR" && (
              <React.Fragment>
                <p className="errorMsg">Please fill in the required fields</p>
              </React.Fragment>
            )}
          </div>
        </form>
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
