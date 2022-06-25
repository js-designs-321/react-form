import React from "react";

function App() {

  const[name, setName] = React.useState(""); 
  const[welcomeName,setWelcomeName] = React.useState(""); 

  function handler(event){
    setName(event.target.value); 
  }

  function handleClick(){
    setWelcomeName(name);
  }

  return (
    <div className="container">
      <h1>Hello {welcomeName}</h1>
      <input onChange={handler} type="text" placeholder="What's your name?" value={name}/>
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
