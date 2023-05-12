'use client'

import { useState } from 'react'
import Card from '@/components/Card'
import { imageData } from '@/components/imageData';





export default function Home() {
  
  const [items, setItems] = useState<String[]>([]);
  const [images, setImages]= useState<String[]>(imageData());

const handleRandomSelect = () => {
  if (items.length === 0) {
    console.log('No more items to select!');
    return;
  }
  
  const randomIndex = Math.floor(Math.random() * images.length);
  const selectedItem = images[randomIndex];

  // Remove the selected item from the array
  const updatedImages = images.filter(item => item !== selectedItem);
  setImages(updatedImages);


};


  const result = Array(4).fill(<Card setItems={setItems} items={items} image={images[5]}/>)
  
  
  
  return(
    
      <div className='king'>
        <div className='flexcard'> {result}</div>
      </div>
  
  )
}
