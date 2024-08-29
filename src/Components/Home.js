import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  function coursesHandler(){
    navigate("./courses");
  }
  function contactHandler(){
    navigate("./contact");
  }
  function helpHandler(){
    navigate("./help");
  }
  return <div>
    <div>This is home Page</div>
    <button  onClick={coursesHandler}>Go to courses</button>
    <button  onClick={contactHandler}>Go to Contact</button>
    <button onClick={helpHandler}>Go to Help</button>
  </div>
};

export default Home;
