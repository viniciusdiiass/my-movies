import { MoviesItem } from "./MovieItem";

export const MoviesList = ({ movies }) => (
    <section>
        <ul>
           {movies.map(m => <MoviesItem movie={m }/>)}
        </ul>
    </section>

)