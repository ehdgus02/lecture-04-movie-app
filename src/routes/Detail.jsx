import { useParams } from "react-router";

function Detail() {
    const { id } = useParams();

    return <>{id}</>;
}

export default Detail;