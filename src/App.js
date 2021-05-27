import React, { Fragment, useState, useEffect } from "react";

function App() {
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);
  
  const handleResize = () => {
    setwindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []);

  return (
    <Fragment>
      <div>
        {windowWidth}
      </div>
    </Fragment>
  );
}

export default App;
