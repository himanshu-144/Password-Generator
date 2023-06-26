import React from 'react'

const StrengthChecker = ({password}) => {

    const passwordStrengthChecker =()=>{
       const passwordLength = password.length;
      if(passwordLength<1){
        return "";
      }
      else if(passwordLength<4){
        return "Very Weak"
      }
      else if(passwordLength<8){
        return "Weak"
      }
      else if(passwordLength<12){
        return "Strong"
      }
      else if(passwordLength<16){
        return "Very Strong"
      }
    };

    const passwordStrength = passwordStrengthChecker();
    if(!passwordStrength) return <React.Fragment />
   
    return(
    <div className='password-checker'>
     Strength : <span style={{fontWeight:"bold", color:"white"}}>{passwordStrength}</span>
    </div>
    )  
}

export default StrengthChecker
