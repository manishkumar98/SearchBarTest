import { Router, Switch, Route } from "react-router-dom";
import "./App.css";
import WilpTest from "./component/wilpTest";
import WilpPdf from "./component/wilpPdf";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={WilpTest} />
      <Route exact path="/wilppdf" component={WilpPdf} />
    </Switch>
  );
};

export default App;
