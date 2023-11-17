import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// components
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";

const App = () => (
  <BrowserRouter>
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      {/* Navigation*/}
      <Nav/>

      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="About" element={<About />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  </BrowserRouter>
);


export default App;

// const App = () => {
//   return (
//     <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
//       <Banner />
//       <Nav />
//       <About />
//       <Work />
//       {/* <Contact /> */}

//       <div className='h-[4000px]'></div>
//     </div>
//   );
// };

// export default App;
