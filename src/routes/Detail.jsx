import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import styles from "./Detail.module.css";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

function Detail() {
    // react-router는 주소값이 변경되는걸 실시간 감시하고 있는 라이브러리이고,
    // 그것에 파생된 useParams라는 메소드도 계속 감시 중임
    const { id } = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=ko-KR`)
            .then(res => res.json())
            .then(json => {
                setMovie(json);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
            });
    }, [id]);

    return (
        <div className={styles.container}>
            <button
                className={styles.backBtn}
                onClick={() => {
                    // navigate : 사용자 강제 이동
                    // 매개변수 자리에는 이동시킬 주소가 들어갈 수 있지만,
                    // 숫자를 쓰게되면 history에 저장된 페이지로 이동함
                    navigate(-1);
                }}>
                &larr; 뒤로가기
            </button>
            {loading ? (
                <div className={styles.loading}>loading...</div>
            ) : (
                movie && (
                    <div className={styles.content}>
                        <img
                            className={styles.poster}
                            src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                            alt={"POSTER"}
                        />
                        <div className={styles.info}>
                            <h1 className={styles.title}>{movie.title}</h1>
                            <div className={styles.meta}>
                                <span>
                                    <strong>Genre:</strong>
                                    {movie.genres.map((value, index) => {
                                        return (
                                            <span key={index}>
                                                {index < movie.genres.length - 1
                                                    ? value.name + ", "
                                                    : value.name}
                                            </span>
                                        );
                                    })}
                                </span>
                                <span>
                                    <strong>평점: </strong>
                                    {movie.vote_average}
                                </span>
                            </div>
                            <div className={styles.overview}>{movie.overview || "등록된 줄거리가 없습니다."}</div>
                        </div>
                    </div>
                )
            )}
        </div>
    );
}

export default Detail;
