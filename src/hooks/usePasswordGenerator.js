import React, { useState } from 'react'

const usePasswordGenerator = () => {
    const[password, setPassword] =useState();
    const[errorMessage, setErrorMessage] =useState();

   
    const passwordGenerator =(length, checkBoxData)=>{
     
    let charset ="",generatedPassword ="";

    const selectedBox = checkBoxData.filter((check)=>check.state);
    
    if(selectedBox.length === 0){
        setErrorMessage("Select at least one option");
        setPassword("");
        return;
    }

    selectedBox.forEach((optionBox)=> {
        
    switch(optionBox.title){
        case "Include Uppercase Letters":
         charset+= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
         break;
        case "Include Lowercase Letters":
         charset +="abcdefghijklmnopqrstuvwxyz";
         break;
        case "Include Numbers":
         charset+="0123456789";
         break;
        case "Include Symbols":
         charset+="!@#$%^&*+()";   
         break;
         default :
         break;
    }
    });
    
     for(let i=0;i<length;i++){
        const randomPassword = Math.floor(Math.random()*charset.length);
        generatedPassword+=charset[randomPassword];
          }
       setPassword(generatedPassword);
       setErrorMessage("");

    };
        
    return {password, errorMessage,passwordGenerator };

    


};

export default usePasswordGenerator
