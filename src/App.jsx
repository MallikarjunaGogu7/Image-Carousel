import React from 'react'
import ImageCarousel from './components/ImageCarousel';
import img1 from "../src/assets/img1.jpg";
import img2 from "../src/assets/img2.jpg";
import img3 from "../src/assets/img3.jpg";
import img4 from "../src/assets/img4.jpg";
import img5 from "../src/assets/img5.jpg";

const App = () => {
  const images = [img1, img2, img3,img4, img5];
  return (
    <div>
      <ImageCarousel images={images} />
    </div>
  )
}

export default App