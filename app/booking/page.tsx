"use client";

import { useState } from "react";
import BackHome from "@/components/BackHome";

const rooms = [
  {
    name:"Japanese Suite",
    price:28000
  },
  {
    name:"Mountain View Room",
    price:35000
  },
  {
    name:"Premium Onsen Suite",
    price:48000
  }
];


export default function BookingPage(){

const [room,setRoom] = useState(rooms[0]);


return (

<main className="min-h-screen bg-[#f7f4ed] px-5 py-20">

<BackHome />

<div className="mx-auto max-w-5xl">


<p className="
text-[10px]
tracking-[0.4em]
uppercase
text-[#9d793c]
">
Reservation
</p>


<h1 className="
mt-5
text-5xl
md:text-7xl
">
Book your
<br/>
<span className="italic">
Manza escape.
</span>
</h1>



<div className="
mt-16
grid
gap-10
md:grid-cols-2
">


{/* FORM */}

<div className="
bg-white
p-8
shadow-sm
">


<h2 className="text-2xl">
Stay Details
</h2>


<div className="mt-8 space-y-5">


<div>
<label>
Check In
</label>

<input
type="date"
className="
mt-2
w-full
border
p-4
"
/>

</div>



<div>

<label>
Check Out
</label>

<input
type="date"
className="
mt-2
w-full
border
p-4
"
/>

</div>



<div>

<label>
Guests
</label>

<select
className="
mt-2
w-full
border
p-4
"
>

<option>
2 Guests
</option>

<option>
3 Guests
</option>

<option>
4 Guests
</option>


</select>

</div>



</div>

</div>



{/* ROOM */}

<div
className="
bg-[#172019]
p-8
text-white
"
>


<h2 className="text-2xl">
Choose Room
</h2>


<div className="mt-8 space-y-4">


{
rooms.map((item)=>(

<button

key={item.name}

onClick={()=>setRoom(item)}

className={`
w-full
border
p-5
text-left
transition

${room.name===item.name
?
"border-[#d0aa60] bg-[#d0aa60]/20"
:
"border-white/20"
}

`}
>


<p>
{item.name}
</p>


<p className="
mt-2
text-sm
text-white/60
">

¥{item.price.toLocaleString()}
 / night

</p>


</button>


))
}


</div>



<div className="
mt-10
border-t
border-white/20
pt-6
">


<p className="text-sm text-white/60">
Estimated total
</p>


<h3 className="
mt-2
text-4xl
">

¥
{room.price.toLocaleString()}

</h3>


</div>


<button
className="
mt-8
w-full
bg-[#d0aa60]
py-4
text-xs
font-bold
tracking-[0.3em]
"
>
Continue Payment
</button>



</div>



</div>


</div>


</main>


)

}