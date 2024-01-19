import React, {useState} from 'react'




export default function Textform(props) {
    const [ text, setText] = useState('enter text here');
    
    const onChange =(event)=>{
        
        setText(event.target.value)
    }  
    const UCClick =()=>{
        
        let upperText = text.toUpperCase();
        setText(upperText)
        props.showAlert("Converted to upper case","Success")
    }
    const LClick =()=>{
        
        let lowerText = text.toLowerCase();
        setText(lowerText)
        props.showAlert("Converted to lower case","Success")
    }
    const ClearClick =()=>{   
        setText('')
        props.showAlert("Text cleared","Success")
    }


    let dark={
        color:"white",
        backgroundColor:"black",
        border:"1px solid white"
    }
    let light={
        color:"black",
        backgroundColor:"white",
       
        
    }
    const [myStyle, setStyle] = useState(
        {
            color:"black",
            backgroundColor:"white",
           
        }
    );
    const toggleHandledark =()=>{
        setStyle(dark);
        props.showAlert("Dark Mode ON","Success")
        
      

    }
    const toggleHandlelight=()=>{
        setStyle(light);
        props.showAlert("Light Mode ON","Success")
    }

    const copyHandle =()=>{   
        let texttocopy = document.getElementById('myBox')
        texttocopy.select()
        navigator.clipboard.writeText(texttocopy.value)
        props.showAlert("Copied!","Success")
    }
    
    const spaceHandle =()=>{   
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "))
        props.showAlert("Spacing adjusted","Success")
    }

    const previewStyle={
        border: "1px solid black",
        rows:5,
        height:150

    }

  return (
    <div className='container' >
        
        <div className="mb-3 ">
            <label htmlFor="myBox" className="form-label"><h2>{props.heading}</h2></label>
            <textarea className="form-control" id="myBox" value={text} rows="5" onChange={onChange} style={myStyle}>

            </textarea>
            
        </div>
        <div className="mb-3 my-3 ">
            <button className="btn btn-primary mx-2" onClick={UCClick}>UPPER CASE</button>
            <button className="btn btn-primary mx-2" onClick={LClick}>lower case</button>
            <button className="btn btn-primary mx-2" onClick={ClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={toggleHandlelight}>Light-Mode</button>
            <button className="btn btn-primary mx-2" onClick={toggleHandledark}>Dark-Mode</button>
            <button className="btn btn-primary mx-2" onClick={copyHandle}>Copy-Text</button>
            <button className="btn btn-primary mx-2" onClick={spaceHandle}>Remove Extra Spaces</button>
        </div>
        <div className="mb-3 my-3 ">
            <h2>{props.summary}</h2>
            <div>{text.split(" ").length} words and {text.length} characters</div>
            <div>Avg time to read-{text.split(" ").length*0.008} minutes</div>
            <h3>Preview</h3>
            <p style={previewStyle}  className="form-control" rows="10">{text}</p>
            
        </div>
        
        
    </div>
  )
}

Textform.defaultProps = {
    summary: 'Summary of your text-'
}
