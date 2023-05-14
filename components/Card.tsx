'use client'

import { useState,useEffect } from 'react'
import Image from 'next/image'

export default function Card({setItems,items,image}:any) {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isStatic, setIsStatic] = useState(true)

 
  useEffect(() => {
    if(items[items.length-1]===items[items.length-2]&&items[items.length-1]===image){
      setIsStatic(false)
    }
  
  
  }, [items,image,setItems]);

 


  

   const handleClick = (e:any) => {
    if(isStatic){setIsFlipped(!isFlipped)
    setItems([...items,e.target.alt])
  }
  }



  
    return (
      <div>
        <div  className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
  <Image
      className='front'
      alt={image}
      src="/druid___lutece_by_bib0un_d9k3crx.jpg"
      height={300}
      width={300}
    />
  <Image
      className='back'
      alt="card front"
      src={image}
      height={300}
      width={300}
    />
</div>
      </div>
    
    )

    }