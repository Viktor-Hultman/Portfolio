import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useState, useEffect } from 'react';

import Home from './Home'
import Projects from './Projects';
import Contact from './Contact';



export const GrayOrange = {
  backgroundColor: "#41494d",
  txtColor: "#e3e3e3",
  weatherBoxBackground: "#6d7478",
  linkColor: "#B06500",
  linkHoverColor: "#bababa",
  galleryCaptionBackground: "rgba(0,0,0,.6)",
  navbarLine: "#B06500",
}

export const TeslaMotors = {
  backgroundColor: "#212121",
  txtColor: "#fafafa",
  weatherBoxBackground: "#818181",
  linkColor: "#cc0000",
  linkHoverColor: "#f2f2f2",
  galleryCaptionBackground: "rgba(0,0,0,.6)",
  navbarLine: "#cc0000"
}

export const Palette = {
  backgroundColor: "#565c5e",
  txtColor: "#dfdbd8",
  weatherBoxBackground: "#9d7463",
  linkColor: "#9d7463",
  linkHoverColor: "#FCD0BA",
  galleryCaptionBackground: "rgba(0,0,0,.6)",
  navbarLine: "#9d7463"
}



function App() {
  const [theme, setTheme] = useState(GrayOrange)

  useEffect(() => {
    let selectedTheme = localStorage.getItem("theme")
    if (selectedTheme === "GrayOrange") {
      setTheme(GrayOrange)
    } else if (selectedTheme === "TeslaMotors") {
      setTheme(TeslaMotors)
    } else if (selectedTheme === "Palette") {
      setTheme(Palette)
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact theme={theme} setTheme={setTheme} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
