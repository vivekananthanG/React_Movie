import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {

  const [movie, setMovie] = useState({name:"", poster:"", rating:"", summary:""});

  const handleChange = e => {
    const { name, value } = e.target;
    setMovie(prevState => ({
        ...prevState,
        [name]: value
    }));
};
  
  var [movieList,setMovieList] = useState([
    {
      name: "Iron man 2",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      rating: 7,
      summary:
        "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy."
    },
    {
      name: "No Country for Old Men",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      rating: 8.1,
      summary:
        "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money."
    },
    {
      name: "Jai Bhim",
      poster:
        "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      summary:
        "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
      rating: 8.8
    },
    {
      name: "The Avengers",
      rating: 8,
      summary: `Marvel's The Avengers (classified under the name Marvel Avengers
        Assemble in the United Kingdom and Ireland), or simply The Avengers, is
        a 2012 American superhero film based on the Marvel Comics superhero team
        of the same name.`,
      poster:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg"
    }
  ]);

  return (
    <div className="App">
      <Header />

      <div className="container">
  <div className="add-movie-form">
    <h2>Add a Movie</h2>
    <input
      
      onChange={handleChange}
      type="text"
      name="name"
      placeholder="Enter Movie Name"
      className="input-text"
    />
    <input
    
    onChange={handleChange}
      type="text"
      name="poster"
      placeholder="Enter Movie Poster URL"
      className="input-text"
    />
    <input
    
    onChange={handleChange}
      type="text"
      name="rating"
      placeholder="Enter Movie Rating"
      className="input-text"
    />
    <input
 
      onChange={handleChange}
      type="text"
      name="summary"
      placeholder="Enter Movie Summary"
      className="input-text"
    />
    <button onClick={() => setMovieList([...movieList, movie])}>
        Add Movie
      </button>
    {console.log(movie)}
  </div>
</div>

      <div className="movie-list">
        {movieList.map(({ name, poster, rating, summary },i) => (
          <Movie
            key={i}
            name={name}
            poster={poster}
            rating={rating}
            summary={summary}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

function Header(){
  return(
    <div className="header">
      <img
        src="https://4.bp.blogspot.com/-mL98KmcE8Kk/XMv9jXDde0I/AAAAAAAAACk/DqKziD6eVrYFGU14tmS1r6QXUFaGZkEtQCK4BGAYYCw/s1600/JPEG%2BLOGO.jpg"
        alt="header"
      />
    </div>
  );
}

function MovieDelete(){
return(
  <div className="counter-container">
  <button>
    remove
  </button>
</div>
);
}


// function MovieAdd(movieList){
//   const [movie, setMovie] = useState({name:"", poster:"", rating:"", summary:""});
//   const handleChange = e => {
//     const { name, value } = e.target;
//     setMovie(prevState => ({
//         ...prevState,
//         [name]: value
//     }));
// };
//   return(<div className="container">
//   <form action="" className="add-movie-form">
//     <h2>Add a Movie</h2>
//     <input
//       value={movie.name}
//       onChange={handleChange}
//       type="text"
//       name="name"
//       placeholder="Enter Movie Name"
//       className="input-text"
//     />
//     <input
//     value={movie.poster}
//     onChange={handleChange}
//       type="text"
//       name="poster"
//       placeholder="Enter Movie Poster URL"
//       className="input-text"
//     />
//     <input
//     value={movie.rating}
//     onChange={handleChange}
//       type="text"
//       name="rating"
//       placeholder="Enter Movie Rating"
//       className="input-text"
//     />
//     <input
//     value={movie.summary}
//       onChange={handleChange}
//       type="text"
//       name="summary"
//       placeholder="Enter Movie Summary"
//       className="input-text"
//     />
//     <button onClick={() => setMovieList([movieList, movie])}>
//         Add Movie
//       </button>
//     {console.log(movie)}
//   </form>
// </div>);
// }



function Movie({ name, poster, rating, summary }) {
  const [show, setShow] = useState(false);
  const styles1 = { display: show ? "block" : "none" };
  const styles = rating >= 8.5 ? { color: "green" } : { color: "red" };
  return (
    <div className="Card">
      <img src={poster} alt={name} className="Card-poster" />
      <div className="Card-specs">
        <h3 className="Card-name">{name} </h3>
        <p style={styles} className="Card-rating">
          ⭐{rating}
        </p>
      </div>
      {/*conditionl styling */}
      <button onClick={() => setShow(!show)}>Toggle dessciption</button>
      {/* <p style={styles1} className="Card-summ">
        {summary}
      </p> */}
      {/*conditionl rendering */}
      {show ? <p className="Card-summ">{summary}</p> : ""}
      <Counter />
      <MovieDelete />
    </div>
  );
}


function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);
  return (
    <div className="counter-container">
      <button onClick={() => setLike(like + 1)}>
        {like}
        <span role="like">👍</span>
      </button>
      <button onClick={() => setDisLike(dislike + 1)}>
        {dislike}
        <span role="dislike">👎</span>
      </button>
    </div>
  );
}

