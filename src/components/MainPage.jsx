import {useState} from 'react';
import VideoConverter from 'convert-video';
import style from './MainPage.module.css';

const MainPage = () => {
  const [count, setCount] = useState([]);
  const [dark, setDark] = useState(false);
  function handleTheme() {
    setDark(prev=>!prev);
  }
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
      <div className={`fullPage ${dark ? 'darkBack' : 'lightBack'}`}>
        <div className={dark ? ' header-dark' : ' header-light'}>
          <span style={{fontWeight : '600', fontSize: '28px', fontFamily: 'cursive'}}>Video Converter</span>

          <label htmlFor="theme" className="theme">
            <span className="theme__toggle-wrap">
              <input id="theme" className="theme__toggle" type="checkbox" role="switch" name="theme" value="dark" checked={dark} onChange={handleTheme}/>
              <span className="theme__fill"></span>
              <span className={dark ? 'theme__icon2' : 'theme__icon'}>
                <span className="theme__icon-part"></span>
                <span className="theme__icon-part"></span>
                <span className="theme__icon-part"></span>
                <span className="theme__icon-part"></span>
                <span className="theme__icon-part"></span>
                <span className="theme__icon-part"></span>
                <span className="theme__icon-part"></span>
                <span className="theme__icon-part"></span>
                <span className="theme__icon-part"></span>
              </span>
            </span>
          </label>
        </div>
        <div className={style.inputBlock}>
            <input className={dark ? style.dark : style.light} type='file' accept='.mov' onChange={handleUploadVideo} multiple/>
            <button onClick={handleConvert}>Convert</button>
        </div>
        <div style={{display: 'flex', width : '100vw', justifyContent : 'center', alignItems: 'center'}}>
          <div style={{marginRight: '6px', color : dark ? 'white' : 'black'}}>
              {convertedFiles.length} Converted
          </div>
          <button onClick={downloadVideo}>Download</button>
        </div>
      </div> 
    </>
  )
}

export default MainPage
