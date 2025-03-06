import { Link, Navigate } from "react-router-dom";
import "./Card.css" ;
import React from 'react' ;

export default function Card(arr) {

  // const sendData = () => {
  //   console.log("arr = " , arr.arr.title )
  //   navigate("/Show", { state: { array: arr.arr} });
  // };
  // const sendDataToEdite = () => {
  //   console.log("arr = " , arr.arr.title )
  //   navigate("/Edite", { state: { array: arr.arr} });
  // };

    

  return (
    <div className="AllContentInCard">

      <div className="headerinCard">

      <button className="btn2">حذف</button>  
      <button className="btn2" >تعديل</button>
      <button onClick={()=>{
        console.log ( "arr.arr = " , arr.arr.name ) ;

}} className="btn2" >عرض</button>

      <br />
      <h1 className="NameHeaders">{arr.arr.name}</h1>
      <img src= {arr.arr.done  ? require("./images/check.png"):require("./images/no.png") } alt="" />
      </div> 
    </div>
  )
}
