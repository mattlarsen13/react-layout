import "../css/Dialog.css";
import React, { useState } from "react";
//inputs.img != null ? URL.createObjectURL(inputs.img) : ""

const AddHousePlan = (props) => {
const [inputs, setInputs] = useState({});
const [result, setResult] = useState("");
const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values)=>({...values,[name]:value}));
};
const handleImageChange = (event) => {
    const name = event.target.name;
    const value = event.target.files[0];
    setInputs((values)=>({...values,[name]:value}));
};

const addToServer = async(event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    console.log(...formData);

    const response = await fetch("http://localhost:3001/api/house_plans/", {
      method:"POST",
      body:formData
    });

    if(response.status == 200) {
      setResult("House Plan successfully added");
    }
};
  return (
    <div id="add-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span id="dialog-close" className="w3-button w3-display-topright" onClick={props.closeDialog}>
            &times;
          </span>
          <form id="add-property-form">
            <p>
              <label htmlFor="name ">Property Name:</label>
              <input type="text" id="name" name="name" required value={inputs.name || ""} onChange={handleChange}/>
            </p>
            <p>
              <label htmlFor="size">Size:</label>
              <input type="number" id="size" name="size" required value={inputs.size || ""} onChange={handleChange}/>
            </p>
            <p>
              <label htmlFor="bedrooms">Bedrooms:</label>
              <input type="number" id="bedrooms" name="bedrooms" required value={inputs.bedrooms || ""} onChange={handleChange}/>
            </p>
            <p>
              <label htmlFor="bathrooms">Bathrooms:</label>
              <input type="number" id="bathrooms" name="bathrooms" required value={inputs.bathrooms || ""} onChange={handleChange} />
            </p>

            <section className="columns">
              <p id="img-prev-section">
                <img id="img-prev" alt="" src = {inputs.img != null ? URL.createObjectURL(inputs.img) : ""}/>
              </p>
              <p id="img-upload">
                <label htmlFor="img">Upload Image:</label>
                <input type="file" id="img" name="img" accept="image/*" onChange = {handleImageChange}/>
              </p>
            </section>
            <p>
              <button type="submit">Submit</button>
            </p>
            <p>{result}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddHousePlan;