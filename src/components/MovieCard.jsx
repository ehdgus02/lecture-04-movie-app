// .js : 순수 자바스크립트 파일 만들 때
// .jsx : React 컴포넌트 파일 만들 때 => return에서 화면을 그리는 내용이 담겨있을 떄

function MovieCard({ poster, title, actors }) {
    return (
        <div>
            <img src={poster} alt={"POSTER"} style={{ width: 300}} />
            <h2>{title}</h2>
            <h6>{actors}</h6>
        </div>
    );
}

export default MovieCard;