const Contact = () => {

  function handleSubmit(event) {
    event.preventDefault();
  
    const name = event.target.inputName.value;
    const email = event.target.inputEmail.value;
    const message = event.target.inputMessage.value;
  
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    showAlert(name, email, message);
  };

  function showAlert(name, email, message) {
    alert(`Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`);
  };

  return (
    <main className="container-fluid">
      <section className="text-center mb-5">
        <div className="row pt-5 px-5 px-md-0">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-bold">CONTACT</h1>
            <p className="lead text-muted">Thank you for visiting my portfolio! If you have any questions,
              suggestions or are interested in working with me, please get in touch!</p>
            <h6 className="col-10 col-sm-8 mx-auto">I look forward to contributing to the success of an innovative company and being part of a talented team.</h6>
          </div>
        </div>
      </section>
  
      <div className="d-flex justify-content-evenly flex-wrap mb-5 px-5">
        <div className="col-12 col-sm-10 col-md-5">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Email me at</h5>
              <p className="card-text"><a href="mailto:whybruno.dev@gmail.com">whybruno.dev@gmail.com</a></p>
            </div>
          </div>
        </div>
      </div>

      <h6 className="text-center px-5">If you prefer, </h6>
      <h6 className="text-center px-5">send me a message using the contact form</h6>

      <form className="col-12 col-sm-10 col-md-8 px-5 mx-auto my-5" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">Name</label>
          <input type="text" className="form-control" id="inputName"></input>
        </div>
        <div className="mb-3">
          <label htmlFor="inputEmail" className="form-label">Email</label>
          <input type="email" className="form-control" id="inputEmail"></input>
        </div>
        <div className="mb-3">
          <label htmlFor="inputMessage" className="form-label">Message</label>
          <textarea className="form-control" id="inputMessage" rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-dark">Submit</button>
      </form>
    
    </main>
  );
};

export default Contact;