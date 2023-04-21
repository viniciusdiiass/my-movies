import { Link } from "react-router-dom";

export const MoviesItem = ({ movie }) => (
    <li>
        <Link to={`movie/${movie.id}`}>{movie.title}</Link>
    </li>

)