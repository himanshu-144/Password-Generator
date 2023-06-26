
import { useState } from 'react';
import './App.css';
import usePasswordGenerator from './hooks/usePasswordGenerator';
import StrengthChecker from './components/StrengthChecker';

function App() {
 
  const[length, setLength] = useState(4);
  const[copied, setCopied] = useState(false);
  
  const[checkBoxData, setCheckBoxData] =useState([
    { title: "Include Uppercase Letters", state :false},
    { title: "Include Lowercase Letters", state :false},
    { title: "Include Numbers", state :false},
    { title: "Include Symbols", state :false},
    ]);
  
    const handleCheckBox=(i)=>{
    
    checkBoxData[i].state = !checkBoxData[i].state;
    setCheckBoxData([...checkBoxData]);
    };

    const handleCopy=()=>{
      navigator.clipboard.writeText(password);
      setCopied(true);
      
      setTimeout(()=>{
          setCopied(false);
      }, 3000)
      
    };
    
    const {password,errorMessage,passwordGenerator} = usePasswordGenerator();


  return (
    <div className="App">
       {password && <div className='header'>
           <div className='title'>{password}</div>
           <button onClick={()=>handleCopy()}
             className='copyBtn'>{copied ? "Copied": "Copy"}</button>
             {
              copied && alert("Password copied to clipboard")
             }
       </div>
       }  
        <div className='characterLength'>
            <span>
              <label style={{color:"white", fontSize:"24px"}}>Character Length</label>
              <label style={{color:"white", fontSize:"24px"}}>{length}</label>
            </span>
            <input 
            style={{marginTop:"15px"}}
              type='range'
              min="4"
              max="20"
              value={length}
             onChange={(e)=>{setLength(e.target.value)}}
              />          
          </div>  
            <div className='checkBoxes'>
              {
                checkBoxData.map((checkbox,index)=>{
                   return(
                    <div key={index} >
                      <input id={index} style={{margin:"12px 12px"}}
                        type='checkbox' 
                        checked={checkbox.state}
                        onChange={()=>handleCheckBox(index)}
                      />
                      <label style={{color:"white",fontWeight:200, fontSize:"20px"}}
                      >{checkbox.title}</label>
                    </div>
                   )
                })
              }
               
            </div>
        {/* strength*/ }
         <StrengthChecker password={password} />
         {/* Error handling*/ }
         {
          errorMessage && <div className='errorMessage'>{errorMessage}</div>
         }
         
        <button onClick={()=>{passwordGenerator(length, checkBoxData)}}
        className='generatePassword'>Generate Password</button>
    </div>
  );
}

export default App;
