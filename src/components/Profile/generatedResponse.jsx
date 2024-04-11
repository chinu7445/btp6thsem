import css from "./generatedResponse.module.css";
import { useState } from "react";
function GeneratedResponse({response}) {

  let [len,setLen]=useState(545);
  function increaseLen(event){
    event.preventDefault();
    if(len<response.length){
        setLen(Math.min(len+545,response.length));
    }
    else{
        setLen(545);
    }
  }
  return (
    <>
      <div className={`${css.generatedResponse}`}>
        {response.slice(0,len)}
        <a href="" onClick={increaseLen}>{len<response.length?"...Read more":"Read less..."}</a>
      </div>
    </>
  );
}

export default GeneratedResponse;
