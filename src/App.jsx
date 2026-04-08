import { useEffect, useState } from "react";
import MovieCard from "./components/MovieCard.jsx";

function App() {
    const [loading, setLoading] = useState(true); // 불러올 때의 loading 상태를 관리함 state
    const [movies, setMovies] = useState([]); // 불러올 무비 목록을 저장할 state

    useEffect(() => {
        fetch("https://imdb.iamidiotareyoutoo.com/search?q=2025&lsn=1&v=1")
            .then(res => res.json())
            .then(json => {
                setMovies(json.description);
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
                            key={value["#IMDB_ID"]}
                            poster={value["#IMG_POSTER"]}
                            title={value["#TITLE"]}
                            actors={value["#ACTORS"]}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default App;
