'use client'

import { useState,useRef } from 'react'
import Card from '@/components/Card'
import { imageData } from '@/components/imageData';
import { MutableRefObject } from "react"




export default function Home() {
  
  const [items, setItems] = useState<String[]>([]);
  const [images, setImages]= useState<String[]>(imageData());




  if(items[items.length-1]===items[items.length-2]){console.log('ok')}
  

 
  
  const result = Array(12).fill('').map((i,idx)=>{
    const id = idx;
    
    return(
      <Card key={idx} setItems={setItems} items={items} image={images[idx]}/>
    )

  })

 
  
  return(
    
      <div className='king'>
        <div className='flexcard'> {result}</div>
        <button onClick={print}>gdgdbf</button>
      </div>
  
  )
}
