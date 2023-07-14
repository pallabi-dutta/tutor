import React,{useState} from 'react'
// settext("ffhgftfgvfg,fvmff");
export default function Textform(props) {
    const upclick = ()=>{
      // console.log("Uppercase was clicked"+text);
      let newtext=text.toUpperCase();
      settext(newtext);
      props.showAlert("Converted to upper case","Sucess")
    }
    const lowclick = ()=>{
      // console.log("Uppercase was clicked"+text);
      let newtext=text.toLowerCase();
      settext(newtext);
      props.showAlert("Converted to lower case","Sucess")

    }
    const clearclick = ()=>{
      // console.log("Uppercase was clicked"+text);
      let newtext=' ';
      settext(newtext);
    }
    const remove = ()=>{
      let data1=text.trim().split('  ').filter(word=>word!=='')
      let newdata=data1.join('');
      settext(newdata);
    }
    const createFile = ()=>{
      const blob = new Blob([text], { type: "text/plain" });

      const url=window.URL.createObjectURL(blob);
      var a = document.createElement("a");
      a.style = "display: none";
  a.href = url;
  a.download = text.name;
  a.click();
  window.URL.revokeObjectURL(url);
    }
    const handlechange = (event)=>{
      // console.log("change the value");
      settext(event.target.value);
    }
    const [text, settext] = useState('Enter text here');
    // text="new text"; Wrong way to change the text 
    // settext("new text");

  return (
    <>
    <div className='container' style={{color: props.mode === 'light'?'black':'white'}}>
       
   <h1>{props.heading}</h1>
  <div className="mb-3">
    {/* <label for="mybox">{props.heading}</label> */}
      <textarea className="form-control" value={text} onChange={handlechange} style={{backgroundColor: props.mode === 'light'?'white':'grey',color: props.mode === 'light'?'black':'white'}} id="mybox" rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-2" onClick={upclick}>Click for Uppercase</button>
  <button className="btn btn-primary  mx-2" onClick={lowclick}>Click for Lowercase</button>
  <button className="btn btn-primary  mx-2" onClick={clearclick}>Clear</button>
    <button className="btn btn-primary  mx-2" onClick={createFile}>Download Text</button>
    <button className="btn btn-primary  mx-2" onClick={remove}>Remove space</button>



    </div>
    <div className="container my-2" style={{color: props.mode === 'light'?'black':'white'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words {text.length} characters</p>
      <p>{0.08* text.split(" ").length} minutes are need to read this word</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Write in above textbox "}</p>
    </div>
    </>
  )
}
