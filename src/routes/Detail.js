import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Detail.module.css';

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
    <div className={styles.movie}>
      {loading ? (
        <h1 className={styles.loader}>loading...</h1>
      ) : (
        <div className={styles.title}>
          <img src={movie.medium_cover_image} className={styles.image} />
          <h1>{movie.title_long}</h1>
          <h2>Language : {movie.language}</h2>
          <h2>Rating : {movie.rating}</h2>
          <h2>Run time : {movie.runtime} minutes</h2>
          <div className={styles.genre}>
            <h2>genres </h2>
            <ul className={styles.genres}>
              {movie.genres.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <h2>Description : {movie.description_intro}</h2>
          <h1>Downloads</h1>
          <ul>
            {movie.torrents.map((item) => (
              <a key={item.url} href={item.url}>
                <li>{item.url}</li>
              </a>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Detail;
