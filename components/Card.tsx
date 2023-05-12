'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Card({setItems,items,image}:any) {
  const [isFlipped, setIsFlipped] = useState(false)


  const handleClick = (e:any) => {
    setIsFlipped(!isFlipped)
    setItems([...items,e.target.src])
    console.log(items)
  } 
  if(items.length>2){
    items[0]===items[1]?console.log('true'):console.log('false')
  }

  
    return (
      <div className='flexcard'>
        <div  className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
  <Image
      className='front'
      alt="card front"
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