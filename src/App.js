import React from "react";
function App() {
  return (
  <div className="App">
    <h1>Hello</h1>
    <Food 
    fav="kimchi" 
    something={true}
    papapa={["hello",1,2,3,4,true]} 
    />
    </div>
    );
}

function Food(props){
  console.log(props)
  return <h1>I like Potato</h1>
}

export default App;
