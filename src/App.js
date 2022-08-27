import React from "react";
import Navbar from "./components/navbar/Navbar";
import GallerySection from "./components/gallerySection/GallerySection";
import {
  Header,
  Feature,
  About,
  Testimonal,
  Gallery,
  Contact,
  Form,
  Footer,
} from "./layouts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./css/main.css";

function App() {
  return (
//     <Router>
// <<<<<<< HEAD
//       <div className="App">
//         <Routes>
//           <Route path="/gallery" element={<GallerySection />}></Route>
//           <Route
//             path="/"
//             element={
//               <>
//                 <Navbar />
//                 <Header />
//                 <Feature />
//                 <About />
//                 <Testimonal />
//                 <Gallery />
//                 <Contact />
//                 <Form />
//                 <Footer />
//               </>
//             }
//           />
//         </Routes>
//       </div>
//     </Router>
// =======
<Router>
    <div className="App">


      <Routes>
        <Route path="/gallery" element={<GallerySection />}></Route>
        <Route path='/wedding_decors' element={<><Navbar />
      <Header />
      <Feature />
      <About />
      <Testimonal />
      <Gallery />
      <Contact />
      <Form />
      <Footer /></>} />
      </Routes>
    </div>
  </Router>
// >>>>>>> 164ba844fe244bc2a76fbc9d3b24b057a0f26606
  );
}

export default App;
