import React, { useEffect, useState } from "react";

import GravatarList from "./GravatarList";
import Header from "./Header";
import { calculateNumberOfImages } from "./utils";
import { cleanup } from "@testing-library/react";

const App = () => {
  const [state, setState] = useState({ images: calculateNumberOfImages() })
  
  function setStateFromScroll() {
    setState({ images: calculateNumberOfImages() });
  }
  
  useEffect(() => {
      window.addEventListener("scroll", setStateFromScroll);

      window.addEventListener("resize", setStateFromScroll);
      return ()=> {
        window.removeEventListener("scroll", setStateFromScroll)
        window.removeEventListener("resize", setStateFromScroll)
      }
    }, []);

    

  return (
    <>
      <Header/>
      <div>
        <GravatarList state={state} />
      </div>
    </>
    
  );
};

export default App;
