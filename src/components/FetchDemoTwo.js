import React from 'react'

const FetchDemoTwo = () => {
    const fetchData = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        console.log(data);
      }
      fetchData();
  return (
    <div>FetchDemoTwo</div>
  )
}

export default FetchDemoTwo;