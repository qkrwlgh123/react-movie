import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);
  console.log(movie);
  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          <img src={movie.medium_cover_image} />
          <h2>{movie.title_long}</h2>
          <h2>{movie.language}</h2>
          <h3>{movie.rating} rating</h3>
          <h3>{movie.runtime} minutes</h3>
          <ul>
            {movie.genres.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h3>{movie.description_intro}</h3>
          <h1>Downloads</h1>
          <ul>
            {movie.torrents.map((item) => (
              <a href={item.url}>
                <li key={item.url}>{item.url}</li>
              </a>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Detail;
