"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";


export default function HeroImage(){

  const [image,setImage] = useState("/images/hero-day.jpg");


  useEffect(()=>{

    const hour = new Date().getHours();


    if(hour >= 17 || hour < 6){
      setImage("/images/hero-night.jpg");
    }else{
      setImage("/images/hero-day.jpg");
    }


  },[]);



  return (

    <motion.div
      initial={{
        opacity:0,
        scale:1.05
      }}

      animate={{
        opacity:1,
        scale:1
      }}

      transition={{
        duration:1.5
      }}

      className="absolute inset-0 -z-30"
    >

      <Image
        src={image}
        alt="Manza Onsen"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

    </motion.div>

  );
}