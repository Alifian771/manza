"use client";

import { useEffect, useState } from "react";

const sections = [
  "home",
  "experience",
  "onsen",
  "dining",
];


export default function ScrollIndicator(){

const [active,setActive]=useState(0);


useEffect(()=>{

const observers = sections.map((id,index)=>{

const element=document.getElementById(id);

if(!element) return null;


const observer=new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

setActive(index);

}

});

},

{
threshold:0.5
}

);


observer.observe(element);

return observer;


});


return()=>{

observers.forEach(observer=>{

observer?.disconnect();

});

};


},[]);



return (

<div className="
fixed
right-8
top-1/2
z-50
hidden
-translate-y-1/2
flex-col
gap-5
lg:flex
">


{
sections.map((item,index)=>(


<a

key={item}

href={`#${item}`}

className="group flex items-center justify-center"


>

<span

className={`
rounded-full
transition-all
duration-500

${
active===index

?

"w-3 h-3 bg-white shadow-[0_0_15px_white]"

:

"w-1.5 h-1.5 bg-white/50"

}

`}

/>


</a>


))

}


</div>

)

}