import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import styles from "./App.module.scss";
import { Welcome, Success } from "./pages";
import { Footer } from "./organisms";

function App() {
  return (
    <div className={styles.container}>
      <main className={styles.content}>
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
      </main>
      <Footer />
    </div>
  );
}

export default App;
