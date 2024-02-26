import About from "./components/About";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { useState } from "react";
import Work from "./components/Work";

const App = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <Navbar nav={nav} handleNav={handleNav} />
      <Main nav={nav} />
      <About />
      <Skills />
      <Work />
      <Contact />
    </>
  );
};

export default App;
