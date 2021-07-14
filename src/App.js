import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/home";
import About from "./routes/About";
import Detail from "./components/Detail"; 
import Navigation from "./components/Navigation";


function App(){
  return <HashRouter>
    <Navigation>

    </Navigation>
   <Route path="/" exact={true} component={Home} />
   <Route path="/about" component={About} />
   <Route path="/movie/:id" component={Detail} />
  </HashRouter>
}
// exact < 라우터에 온리 같은 url 일때만 표시한다.
// Link는 Router안에서만 작동한다.
export default App;

