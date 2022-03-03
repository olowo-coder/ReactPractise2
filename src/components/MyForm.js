import React, {useState, useEffect} from 'react'

const MyForm = () => {
    const [inputs, setInputs] = useState({email: "", amount: ""});
    const [result, setResult] = useState({status: "", data:{authorization_url: ""}});

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(inputs);
        const feedback = await payment();
        setResult(feedback);
        console.log(feedback);
      }

    const payment = async () => {
        const res = await fetch("http://localhost:9075/v1/payment", {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(inputs),
        });
        const data = await res.json();
        console.log(data)
        return data;
      };

    useEffect(() => {
        if(result.status === "true"){
            window.location.href = result.data.authorization_url;
        }
      }, [result.data.authorization_url, result.status]);

  
    return (
      <form onSubmit={handleSubmit}>
        <label>Enter Email:
        <input 
          type="text" 
          name="email" 
          value={inputs.email} 
          onChange={handleChange}
        />
        </label>
        <label>Enter Amount:
          <input 
            type="text" 
            name="amount" 
            value={inputs.amount} 
            onChange={handleChange}
          />
          </label>
          <input type="submit" />
      </form>
    )
}

export default MyForm;