import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
