import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import styles from "./App.module.scss";
import { Welcome, Success } from "./pages";

function App() {
  return (
    <div className={styles.container}>
      <Router>
        <Switch>
          <Route path="/success">
            <Success />
          </Route>
          <Route path="/">
            <Welcome />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
