import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Picture from './components/Picture/Picture';
import PictureList from './components/PictureList/PictureList';
import cats from "./cats.json";

const classes = ["picture1", "picture2", "picture3", "picture4", "picture5", "picture6", "picture7", "picture8", "picture9"];

let correctGuesses = 0;
let topScore = 0;


class App extends Component {
  state = {
    correctGuesses,
    topScore,
    cats
  };

  whenPictureClicked = (id) => {
    if (this.state) {

    } else {
      this.reset();
    }
  };

  reset = () => {
    this.setState({
      correctGuesses: 0,
      topScore: this.state.topScore
    })
    this.shuffleCatPictures();
  };

  incrementScore = () => {
    const newGuesses = this.state.correctGuesses +1;
    this.setState(correctGuesses: newGuesses);
    this.shuffleCatPictures();
  }

  shuffleCatPictures = (cats) => {
    for (let i = 0; i < cats.length; i++) {
      let j = Math.floor(Math.random() * (i+1));
    }
    return cats;
  };

  render() {
    return(
      <div>
        <Navbar />
        <Wrapper>
          <PictureList
            results={classes}
            image={cats.image}
          />
          <Picture
            image={cats.image}
          />
        </Wrapper>
        <Footer />
      </div>
    )
  };

}
// const App = () =>
  
//     <div>
//       <Navbar />
//       <Wrapper>
//         <PictureList
//           results={classes}
//         />
//       </Wrapper>
//       <Footer />
//     </div>
  

export default App;
