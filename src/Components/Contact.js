import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {

  const navigate = useNavigate();

  function clickHandler(){
    navigate(-1);
  }
  return (
    <div>
      <div>This is contact page</div>
      <button onClick={clickHandler}>Click to go Courses</button>
    </div>
  );
};

export default Contact;
