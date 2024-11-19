import "../css/Dialog.css";
import React, { useState } from "react";

const DeleteHousePlan = (props) => {
  const [result, setResult] = useState("");

  const deleteHousePlan = async() => {
    const response = await fetch(`http://localhost:3001/api/house_plans/${props._id}`, {
      method: "DELETE"
    });

    if(response.status === 200) {
      setResult(`${props.name} succesfully deleted`);
      props.hideHousePlan();
      props.closeDialog();
    } else {
      setResult("Did not delete");
    }
  };

  return (
    <div id="delete-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={props.closeDialog}
          >
            &times;
          </span>
          <div id="delete-content">
            <h3>Are you sure you want to delete the {props.name}</h3>
            <section>
              <button onClick={props.closeDialog}>No</button>
              <button onClick={props.deleteHousePlan}>Yes</button>
            </section>
            <span>{result}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteHousePlan;