import { Route, BrowserRouter, Switch } from "react-router-dom";
import SingIn from "./pages/Login";
import OnBoarning from "./pages/OnBoarning";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={OnBoarning} /> 
          <Route exact path="/singIn" component={SingIn} />

          <Route path="/hola" component={()=><h1>hello world</h1>}/>
        
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
