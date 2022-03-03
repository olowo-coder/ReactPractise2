import React,{useState, useEffect} from "react";

const Highlighter = () => {
  const[words, setWords] = useState('');
  const[search, setSearch] = useState('');
  var look = "regex";
  const regex = new RegExp(search, 'g')
  const parts = search.split(regex)

  return (
    <>
      TODO -- src/components/Highlighter.jsx
      <textarea className="source-text" placeholder="original text" onChange={e => setWords(e.target.value)} />
      <input className="search-term" placeholder="search for" onChange={e => setSearch(e.target.value)} />
      case sensitive?
      <input type="checkbox" className="case-sensitive" />
      <div className="result">{words}</div>
      <div>{parts.filter(part => part).map((part, i) => (
            regex.test(part) ? <mark key={i}>{part}</mark> : <span key={i}>{part}</span>
        ))}
      </div>
    </>
  );
};

export default Highlighter;