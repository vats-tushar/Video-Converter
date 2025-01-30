import { useState } from 'react';
import './App.css';
import VideoConverter from 'convert-video';

function App() {
  const [count, setCount] = useState([]);
  function handleUploadVideo(e){
    setCount(e.target.files);
  }
  async function handleConvert(){
    for(let i=0;i<count.length;i++){
      let q = await VideoConverter.convert(count[i], 'mp4');
      downloadVideo(q);
    }
  }
  function downloadVideo(convertedVideoDataObj) {
    let a = document.createElement("a");
    a.href = convertedVideoDataObj.data;
    a.download = convertedVideoDataObj.name + "." + convertedVideoDataObj.format;
    a.click();
}

  return (
    <>
      <input type='file' accept='.mov' onChange={handleUploadVideo} multiple/>
      <button onClick={handleConvert}>Convert</button>

    </>
  )
}

export default App
