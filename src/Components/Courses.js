import React from "react";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const navigate = useNavigate();

  function clickHandler(){
    navigate("/contact");
  }
  return (
    <div>
      <div>This is courses page</div>
      <button onClick={clickHandler}>
        Click to go contact
      </button>
    </div>
  );
};

export default Courses;
