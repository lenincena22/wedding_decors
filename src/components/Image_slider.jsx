// import React from 'react'

// const Image_slider = (props) => {
//   const btnContainer = {
//     display: "inline-block",
//     float: "right"
//   };
//   const btn = {
//     border: "none",
//     background: "blue",
//     color: "white",
//     fontSize: "22px",
//     padding: "5px 10px",
//     borderRadius: "10px",
//     margin: "0 10px"
//   };

//   return (
//     <React.Fragment>
//       <img src={props.image.link} alt="Sliderr_image" />
//       <h1>
//         {props.image.title}
//         <span style={btnContainer}>
//           <button style={btn} onClick={props.slidePrev}>
//             {"<"} Prevs
//           </button>
//           |
//           <button style={btn} onClick={props.slideNext}>
//             {">"} Next
//           </button>
//         </span>
//       </h1>
//     </React.Fragment>
//   )
// }

// export default Image_slider;

// const App = (props) => {

//   return (
//     <React.Fragment>
//       <h1>
//         React Slider{" "}
//         <small>
//           <em>(we have {slides.length} slides)</em>
//         </small>
//       </h1>
//       <Slide
//         image={slides[currentSlide]}
//         slideNext={slideNext}
//         slidePrev={slidePrev}
//       />
//     </React.Fragment>
//   );
// };

// ReactDOM.render(<App />, document.querySelector("#root"));
