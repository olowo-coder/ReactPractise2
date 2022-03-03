import React, {useState, useRef} from 'react';
import useCustomDictionary from "./useCustomDictionary";


const Custom = () => {
    const inputRef = useRef(null);
    const[word, setWord] = useState('happy');
    const meaning = useCustomDictionary(word);
    const getMeaning = () => { 
        setWord(inputRef.current.value);
        // setWord("");
    }
  return (
    <div><div>Custom - {meaning}</div>
    <input ref={inputRef} type="text" placeholder="word (default: happy)"/>
    <button onClick={getMeaning}>Get Meaning</button> 
    </div>
  )
}

export default Custom;