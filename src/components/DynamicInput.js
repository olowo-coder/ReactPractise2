import React, { useState, useEffect, useReducer} from "react";

const DynamicInput = () => {
  // TODO add your solution here.
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

  
  const [row, setRow] = useState([]);
  const [num, setNum] = useState(0);

  const addInput = () => {
    setRow([
      ...row,
      {
        id: num + 1,
        type: "text",
        value: "",
      },
    ]);
    setNum(num + 1);
  };

//     useEffect(() => {
       
//   },[row])

  const deleteRow = (id) => {
    setRow(row.filter((x) => x.id !== id));
  };
  

  const moveUp = (id) => {
      console.log(row[id])
      if(id !== 0){
          var b = row[id];
          row[id] = row[id-1];
          row[id-1] = b;
      }
      forceUpdate();
  };
  const moveDown = (id) => {
      console.log(row[id])
      if(id !== row.length - 1){
          var b = row[id];
          row[id] = row[id+1];
          row[id+1] = b;
      }
      forceUpdate();
  };

  return (
    <>
      TODO -- DynamicInput.jsx
      <div>
        <button className="add-row" onClick={addInput}>
          +
        </button>
        <div>
          {row.length > 0 &&
            row.map((item, i) => (
              <div key={item.id} position={i}>
                {item.id}
                {i}
                <input className="row-input" />
                <button onClick={() => moveUp(i)} className="row-up">|^</button>
                <button onClick={() => moveDown(i)}className="row-down">|</button>
                <button
                  k
                  onClick={() => deleteRow(item.id)}
                  className="row-delete"
                >
                  x
                </button>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
export default DynamicInput;
