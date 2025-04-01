import React, { useState } from "react";

function MyForm() {
  const [formData, setFormData] = useState({ name: "", email: "",phone:"" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${formData.name}, Email: ${formData.email},Phone:${formData.phone}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <input type="phone" name="phone" placeholder="phone" value={formData.phone} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
