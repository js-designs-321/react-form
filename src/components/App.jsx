import React from "react";

function App() {

  const[name, setName] = React.useState(""); 
  const[welcomeName,setWelcomeName] = React.useState(""); 

  function handler(event){
    setName(event.target.value); 
  }

  function handleClick(event){
    setWelcomeName(name);
    event.preventDefault();
  }

  return (
    <div className="container">
    <form onClick={handleClick}>
      <h1>Hello {welcomeName}</h1>
      <input onChange={handler} type="text" placeholder="What's your name?" value={name}/>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

export default App;
