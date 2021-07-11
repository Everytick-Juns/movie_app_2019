import React from "react";
import PropTypes from 'prop-types';
import axios from "axios";
import Movie from "./movies"

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false })
  }
  componentDidMount() {
    this.getMovies();

  }
  render() {
    const { isLoading, movies } = this.state;
    return <section class="container">{isLoading ? "Loading..."
      : movies.map(movie => {
        return(
        <Movie
          key={movie.id}
          id={movie.id}
          year={movie.year}
          title={movie.title}
          summary={movie.summary}
          poster={movie.medium_cover_image} />)
      })}

    </section>;

  }
}

export default App;


// class App extends React.Component {
//   constructor(props){
//     super(props);
//     console.log("hello");

//   }

//     state = {
//       count: 0
//     };
//     add = () => {
//       this.setState(current => ({count: current.count+1}))
//     };
//     minus = () => {
//       this.setState(current => ({count:current.count-1}))
//     };
//     componentDidMount(){
//       console.log("component rendered");
//     }
//     componentDidUpdate(){
//       console.log("I just Updata");
//     }
//     // componentWillUnmount(){
//     //   console.log("bye bye")
//     // } 컴포넌트가 사라질 때 실행
//     render(){
//       console.log("I'm render");
//       return <div>
//         <h1>The Number is: {this.state.count}</h1>
//         <button onClick={this.add}>Add</button>
//         <button onClick={this.minus}>Minus</button>
//       </div>;

//     }
//   }
