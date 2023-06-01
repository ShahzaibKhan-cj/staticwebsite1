import React, { useState } from "react";
import "../styles/contact.css";


const Contactform = () => {
 
const [inputs, setInputs] = useState({fullname:'', phone:'', email: '', message: '' })
  
const handleChange = (event) => {
const name = event.target.name
const value = event.target.value

const values = () => { 
return  ({...values, [name] : value})
}
setInputs(values)
// setInputs(values => ({...values, [name]: value}))
}
const handleSubmit = (event) => {
  event.preventDefault();
  alert(inputs.fullname);
}




    return (
    <>

    <h1></h1>
      <div className="container">
        <div className="row cntct-row align-items-center justify-content-center">
          <div className="col-md-10">
            <h1 className="text-center my-3">Contact us</h1>
          </div>

          <div className="col-md-9">
            <form  onSubmit={handleSubmit} >
              <div className="form-group">
                <label for="fullname">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="fullname"
                  placeholder="Enter your name"
                  name="fullname"
                  value={inputs.fullname}
                  onChange={handleChange}
                ></input>
              </div>
             
              <div className="form-group">
                <label for="phone">Phone</label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Mobile number"
                  name="phone"
                  value={inputs.phone}
                  onChange={handleChange}

                ></input>
              </div>
             
              <div className="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  name="email"
                  value={inputs.email}
                  onChange={handleChange}
                ></input>
              </div>

              <div className="form-group">
                <label for="message">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="3"

                  name="message"
                  value={inputs.message}
                  onChange={handleChange}
                ></textarea>
              </div>


              <button className="btn outline-btn mb-3" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactform;
