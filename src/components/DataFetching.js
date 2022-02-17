import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataFetching = () => {
    const[posts, setPosts] = useState([]);
    const[id, setId] = useState(1);
    const[clickId, setClickId] = useState(1);

    const handleClick = () => {
        setClickId(id);
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${clickId}`)
        .then((response) => {
        console.log(response);
        setPosts(response.data)})
        .catch((error) => console.error(error));
        ;
    }, [clickId])
  return (
    <div>
        <input type="text" value={id} onChange={e => setId(e.target.value)} />
        <button type="button" onClick={handleClick}>Fetch Post</button>
        <div>{posts.title}</div>
        {/* <ul>
            {posts.map((post) => <li key={post.id}>{post.title}</li>)}
        </ul>
         */}
    </div>
  )
}

export default DataFetching;