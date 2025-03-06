/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useRef, useState } from 'react';
import './App.css';
function App() {   
  let [bool ,setBool] = useState(true); 
  let [bool2 ,setBool2] = useState(true); 
  let [element,setElement] = useState({});
  let [header ,setHeader] = useState(""); 
  let [title ,setTitle ] = useState(""); 
  localStorage.setItem("index", 3 ) ; 
  let [add , setAdd] = useState(false) ; 
  let [index , setIndex] = useState( parseInt(localStorage.getItem("index")) ); 
  let [status , setStatus ] = useState(false); 
  const [selected, setSelected] = useState("الأقدم");
  const [open, setOpen] = useState(false);
  let [op,setOp] = useState(false)
  const options = ["الأقدم", "الأحدث"];

  
  
const fetchDataNow=()=>{
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let day = now.getDate(); 
  let month = now.getMonth() + 1; 
  let year = now.getFullYear();
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  minutes = minutes.toString().padStart(2, "0");
  let lastdate =  ` ${year}/${month}/${day} , ${hours}:${minutes} ${ampm}` ; 
  return lastdate ;

}
let aa = JSON.parse(localStorage.getItem ("ToDoList") ) ; 

if ( aa == null ) { 
  aa = [
    { id : 0  , name : "هنا عنوان المهمة " , title :"هنا التفاصيل" , time:fetchDataNow(), done :true} , 
    { id : 1  , name : "2هنا عنوان المهمة " , title :"2هنا التفاصيل" , time :fetchDataNow(), done :false} 
   ] ;
  localStorage.setItem("ToDoList", JSON.stringify(aa));

}else {
  aa=  JSON.parse(localStorage.getItem ("ToDoList") ); 

}


let [array,setArray] = useState(aa ); 

useEffect(()=>{ 
  if ( JSON.parse(localStorage.getItem ("ToDoList") ) == null ) {

    let arr = [
      { id : 0  , name : "هنا عنوان المهمة " , title :"هنا التفاصيل" , time:fetchDataNow(), done :true} , 
      { id : 1  , name : "2هنا عنوان المهمة " , title :"2هنا التفاصيل" , time :fetchDataNow(), done :false} 
     ] ;
     setArray(
      [
        { id : 0  , name : "هنا عنوان المهمة " , title :"هنا التفاصيل" , time:fetchDataNow(), done :true} , 
        { id : 1  , name : "2هنا عنوان المهمة " , title :"2هنا التفاصيل" , time :fetchDataNow(), done :false} 
       ]
       
     )
     localStorage.setItem("ToDoList", JSON.stringify(arr));
  }
},[])




useEffect(()=> { 
    const inputElement = document.getElementById('Headerr');
    if ( inputElement!=null)inputElement.focus();
}, [ header])

useEffect(()=> { 
  const inputElement = document.getElementById('title');
  if(inputElement!=null)inputElement.focus();

}, [ title])





  function ToDoDes() { 
  return (  <div className="flex flex-col w-full items-center  justify-center min-h-screen bg-gray-100 p-4 card">
    <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md flex flex-col w-full items-center  justify-center">
      
      <h1 className='mb-5'>{bool2?`للعرض`: add? `اضافة`:`تعديل`}</h1>

      <input
        disabled={bool2}
        type="text"
        id='Headerr'
        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 "
        placeholder="عنوان المهمة"
        value={header}
        onBlur={(e)=>{
          setHeader(e.target.value )
        }}
        onChange={(ee)=>{        
          setHeader(ee.target.value);
        }} 
      />


      <textarea
        disabled={bool2}
        id='title'
        className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="التفاصيل"
        value={title}
        onChange={(ee)=>{
          setTitle(ee.target.value);
        }}
      ></textarea>
      <p className="text-gray-600 text-center mt-3 font-semibold">{element.time|| fetchDataNow() } </p>
        <div className="allImage">          
      <img onClick={(ee)=>{
        let allele = document.querySelectorAll(".imgdone"); 
        allele.forEach((e)=>{ 
            e.classList.remove("active"); 
        })
        ee.target.classList.add("active");
        setStatus(true) ; 

      }} 
       className={`${element.done ?'active': ''} imgdone `} src={require("./images/check.png")}/>

      <img onClick={(ee)=>{
        let allele = document.querySelectorAll(".imgdone"); 
        
        allele.forEach((e)=>{
            e.classList.remove("active"); 
        })
        setStatus(false) ; 
        ee.target.classList.add("active");
      }} className={`${element.done ?'':'active'} imgdone `} src={require("./images/no.png")}/>
    
        </div>

      <button
        className="w-full bg-blue-500 text-white p-2 mt-3 rounded-lg hover:bg-blue-600 transition"
        onClick={()=>{
          if ( add) {
            let newnew = JSON.parse(localStorage.getItem("ToDoList")); 
            setIndex((ind)=>ind+1) ; 
            newnew.push({id:index, name : header , title : title ,done : status ,time:fetchDataNow()}) ; 
            setArray(newnew);
           localStorage.setItem("ToDoList", JSON.stringify(newnew));
            setBool(true);
 

          }else if ( !bool2 ) {
            let newnew = JSON.parse(localStorage.getItem("ToDoList")); 
          let newArrayyy = newnew.filter((e)=>{
           return e.id!=element.id ; 
           })
           setIndex((ind)=>ind+1) ; 
           newArrayyy.push({id:index, name : header , title : title ,done : status ,time:fetchDataNow()}) ; 
           setArray(newArrayyy);
          localStorage.setItem("ToDoList", JSON.stringify(newArrayyy));
           setBool(true);
          }else {
           setBool(true);
          }
                 
         }}
         >
       {bool2?`رجوع`: add? `اضافة`:`تعديل`} </button>
    </div>
  </div>
  );
}
  return (
  <div>
    <div className="header">
            <button onClick={DontDone} className='btn'>لم تتم </button>
            <button onClick={fetchDone} className='btn'>تمت  </button>
            <button onClick={fetchAll} className='btn'>الكل </button>
            <button onClick={()=>{
              var ele = {name : "" , title :"" , time : fetchDataNow(), done :false}
              setElement ( ele) ;
              setBool(false);
              setBool2(false);
              setAdd(true)
              setTitle("");
              setHeader(""); 
            }} className='btn'>اضافة </button>
      </div>

      <div className="lessHeader min-h-screen bg-gray-100">
        
      <div style={{display: bool? 'block' :'none' }} className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-green-600 transition"
      >
        {selected}
      </button>

      {open && (
        <div className="absolute mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => {
                
                if (option == "الأحدث" && op==false ) { 
                  let news =[...array]; 
                  news.reverse() ; 
                  setArray(news);
                  setOp(true); 

                }else if ( op) { 
                  setOp(false ); 
                  let news =[...array]; 
                  news.reverse() ; 
                  setArray(news); 

                }

                setSelected(option);
                setOpen(false);
              }}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
      <div style={{width:"100%"}}>
        <div className="AllCardInApp ">

          {bool ? 
          <>
         {
            array.map((e)=>{
              return (
            <Card arr={e}/> );
            })
          }

          </>

          : (<ToDoDes/>) }
      
          
      </div>

      

      </div>
      

      </div>
  </div>
  );

  
function fetchDone(){
  setBool(true);
  let newnew = JSON.parse(localStorage.getItem ("ToDoList") ); 
  let newarrar = newnew.filter((e)=> { 
    return e.done ; 
  })
  setArray ( newarrar ) ; 
}

function DontDone(){
  setBool(true);
  let newnew = JSON.parse(localStorage.getItem ("ToDoList") ); 
  let newarrar = newnew.filter((e)=> { 
    return !e.done ; 
  })
  setArray ( newarrar ) ; 
}


function fetchAll(){
  setBool(true);
  let newnew = JSON.parse(localStorage.getItem ("ToDoList") ); 
  setArray ( newnew ) ; 
}  
function Card(arr) { 

  return (
    <div className="AllContentInCard">

      <div className="headerinCard">

      <button 
      onClick={()=>{
        setElement ( arr.arr ) ;
        let newnew = array.filter ( (e)=> { 
          return e.id !=arr.arr.id ; 
        }) 

        localStorage.setItem("ToDoList", JSON.stringify(newnew) ); 
        setArray(newnew) ; 
        
      }}
      className="btn2">حذف</button>  

      <button 
      onClick={()=>{
        setElement ( arr.arr ) ;
        setBool(false);
        setBool2(false);
        setTitle( arr.arr.title ) ;
        setHeader( arr.arr.name) ; 
        setAdd(false); 
        setStatus(arr.arr.done)
      }}

      className="btn2" >تعديل</button>
      <button onClick={()=>{
        setElement ( arr.arr ) ;
        setTitle( arr.arr.title ) ;
        setHeader( arr.arr.name) ; 
        setBool(false);
        setBool2(true);
        setAdd(false); 
        setStatus(arr.arr.done)
}} className="btn2" >عرض</button>

      <br />
      <h1 className="NameHeaders">{arr.arr.name}</h1>
      <img src= {arr.arr.done  ? require("./images/check.png"):require("./images/no.png") } alt="" />
      </div> 
    </div>
  )
}



}


export default App;
