import React from 'react'
import Card from './Card';

var arr = JSON.parse(localStorage.getItem ("ToDoList") ); 
if ( arr == null ) { 
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let day = now.getDate(); 
  let month = now.getMonth() + 1; 
  let year = now.getFullYear();
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  minutes = minutes.toString().padStart(2, "0");
  arr = [ {name : "هنا عنوان المهمة " , title :"هنا التفاصيل" , time : ` ${year}/${month}/${day} , ${hours}:${minutes} ${ampm}`, done :true} , 
    {name : "222هنا عنوان المهمة " , title :"222هنا التفاصيل" , time : ` ${year}/${month}/${day} , ${hours}:${minutes} ${ampm}`, done :false} 

   ] ; 


}

export default function Home() {
  return (
    <div className='AllContent'>
      
      


      {
          arr.map((e)=> { 
            return(
              <h1>Ahfdg</h1>
              // <Card arr = {e} />
          )
          })
      }
    </div>

  )
}
