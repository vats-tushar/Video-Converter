import {useState} from 'react';
import VideoConverter from 'convert-video';
import style from './MainPage.module.css';

const MainPage = ({selectTheme}) => {
  const [count, setCount] = useState([]);
  const [convertedFiles, setConvertedFiles] = useState([]);
  function handleUploadVideo(e){
    setCount(e.target.files);
  }
  async function handleConvert(){
    for(let i=0;i<count.length;i++){
      let q = await VideoConverter.convert(count[i], 'mp4');
      
      setConvertedFiles(prev=>[...prev, q]);
    }
  }
  function downloadVideo() {
    for(let i=0; i<convertedFiles.length; i++){
        let a = document.createElement("a");
        a.href = convertedFiles[i].data;
        a.download = convertedFiles[i].name + "." + convertedFiles[i].format;
        a.click();
    }
    
  }
  return (
    <>
        <div className={style.inputBlock}>
            <input className={selectTheme ? style.dark : style.light} type='file' accept='.mov' onChange={handleUploadVideo} multiple/>
            <button onClick={handleConvert}>Convert</button>
        </div>
        <div style={{display: 'flex', width : '100vw', justifyContent : 'center', alignItems: 'center'}}>
          <div style={{marginRight: '6px', color : selectTheme ? 'white' : 'black'}}>
              {convertedFiles.length} Converted
          </div>
          <button onClick={downloadVideo}>Download</button>
        </div>
        
    </>
  )
}

export default MainPage
