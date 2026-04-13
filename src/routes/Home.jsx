import MovieCard from "../components/MovieCard.jsx";
import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
// express에서는 process.env.환경변수KEY
// VITE를 사용하는 React에서는 import.meta.env.환경변수KEY

function Home() {
    const [loading, setLoading] = useState(true); // 불러올 때의 loading 상태를 관리함 state
    const [movies, setMovies] = useState([]); // 불러올 무비 목록을 저장할 state

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`)
            .then(res => res.json())
            .then(json => {
                setMovies(json.results);  // => 데이터를 받아온 이후에 array로 될 것임
                setLoading(false);
            })
            .catch(error => {
                console.log("데이터 수신 오류", error);
            });
    }, []);

    return (
        <div>
            {loading ? (
                <h1>loading...</h1>
            ) : (
                <div>
                    {movies.map(value => (
                        <MovieCard
                            key={value.id}
                            id={value.id}
                            poster={value.poster_path}
                            title={value.title}
                            overview={value.overview}
                            vote_average={value.vote_average}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;