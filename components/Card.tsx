'use client'

import Image from 'next/image'

export default function Card ({handleClick, data, image}:any) {
   
  return (
    <div  className={`card ${data.revealed? 'flipped' : ''}`} onClick={()=>handleClick(data)}>
      <Image
        className='front'
        alt={image.image}
        src="/druid___lutece_by_bib0un_d9k3crx.jpg"
        height={300}
        width={300}
       />
      <Image
        className='back'
        alt="card front"
        src={image.image}
        height={300}
        width={300}
      />
    </div>
     
    
  )
}