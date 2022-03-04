import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({ id, coverImage, title, summary, genres }) {
  return (
    <div>
      <img src={coverImage} />
      <h2>
        <Link to={`movie/${id}`}>{title}</Link>
      </h2>
      {genres ? (
        <ul>
          {genres.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
      <p>{summary}</p>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
};

export default Movie;
