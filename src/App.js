import Home from "./Pages/Home";
import Messages from "./Pages/Messages";
import Products from "./Pages/Products";
import Reports from "./Pages/Reports";
import Support from "./Pages/Support";
import Team from "./Pages/Team";

import Sidebar from "./Nav/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/reports"  component={Reports} />
          <Route path="/products" component={Products} />
          <Route path="/team" component={Team} />
          <Route path="/messages" component={Messages} />
          <Route path="/support" component={Support} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
