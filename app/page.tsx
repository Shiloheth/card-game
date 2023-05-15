'use client'

import { useState,useRef } from 'react'
import Card from '@/components/Card'
import { imageData } from '@/components/imageData';



export default function Home() {
  
  const [items, setItems] = useState<ObjectData[]> ([]);
  const [images, setImages]=  useState (imageData());


  type ObjectData = {
    id: number,
    revealed: boolean,
    image: string,
    matched: boolean
  }
  
  
  const result:any = Array(12).fill('').map((i,idx) => {
    return images[idx]
  }) 
  
  const handleClick = (data : any) => {

    
    if(items.length>1)return
 

    if (items.length===0) {
      const selection = data;
      selection.revealed=true;
      setItems([...items,selection]);  
    }


    else if(items.length===1) {

      const selection = data;
      selection.revealed=true;
      setItems([...items,selection]);
      const result = [selection,items[0]];
      
      if (result[0].image === result[1].image) {
        result.forEach((el)=>{el.revealed=true});
        setItems([]);
      }

      else {
        setTimeout(()=>result.forEach((el:any)=>{el.revealed=false;setItems([])}),2000)
      }
    
       
    }
 
  
  
  }



  return(
    
    <div className='king'>
      <div className='flexcard' >
        {result.map((el:any,idx:any)=><Card key={el.id} data={...el} image={images[idx]} handleClick={handleClick}/>)}
      </div>
  
    </div>
  
  )
}
