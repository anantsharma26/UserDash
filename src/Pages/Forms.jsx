import React, { useState } from "react";
import Button from "../components/Button";
import { CgNametag } from "react-icons/cg";

const Forms = () => {
  const [formdata, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const isValidEmail = (email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };
  const isValidPhone = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formdata.name) {
      newErrors.name = "Name is required";
    }
    if (!formdata.email) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formdata.email)) {
      newErrors.email = "Invalid Email format";
    }
    if (!formdata.company) {
      newErrors.company = "Company Name is required";
    }
    if (!formdata.phone) {
      newErrors.phone = "Phone Number Required";
    } else if (!isValidPhone(formdata.phone)) {
      newErrors.phone = "Phone Number must be 10 digits";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      alert("Form Submitted Successfully", formdata);
    } else {
      alert("Form Validation Failed");
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevdata) => {
      return { ...prevdata, [name]: value };
    });
  };

  return (
    <section className="userForm">
      <h1>Add User</h1>
      <form className="form-group" onSubmit={handleSubmit}>
        <div className="formgroup">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter Name"
            className="form-control"
            value={formdata.name}
            onChange={handleChange}
          />
          {errors.name && <div className="error">{errors.name}</div>}
        </div>
        <div className="formgroup">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email"
            className="form-control"
            value={formdata.email}
            onChange={handleChange}
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>
        <div className="formgroup">
          <input
            type="text"
            name="company"
            id="company"
            placeholder="Enter Company"
            className="form-control"
            value={formdata.company}
            onChange={handleChange}
          />
          {errors.company && <div className="error">{errors.company}</div>}
        </div>
        <div className="formgroup">
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Enter Phone"
            className="form-control"
            value={formdata.phone}
            onChange={handleChange}
          />
          {errors.phone && <div className="error">{errors.phone}</div>}
        </div>
        <Button>Submit</Button>
      </form>
    </section>
  );
};

export default Forms;
