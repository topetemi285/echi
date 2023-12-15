'use client'
import { useEffect, useState } from "react"
import React from 'react'
import Images from "./component/images";

function Pagination() {
    const [images, setImage] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then(response=>response.json().then((data:any)=>{
            setImage(data)
        }))
    },[])
  return (
    <div>
      <Images data={images}/>
    </div>
  )
}

export default Pagination