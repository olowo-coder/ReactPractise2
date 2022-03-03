import React, { useState, useEffect } from 'react'

function useCustomDictionary(word) {

    const [meaning, setMeaning] = useState("")
    const baseUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const fetchingMeaning = async () => {
        try{
            const response = await fetch(baseUrl);
            const data = await response.json();
            setMeaning(data[0]?.meanings[0]?.definitions[0]?.definition)
            console.log(data);
        }
        catch(e){
            console.log(e)
        }
    }

    useEffect(() => {
        fetchingMeaning()
    }, [word])

  return meaning;
}

export default useCustomDictionary;