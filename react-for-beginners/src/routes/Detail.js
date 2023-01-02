import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
function Detail() {
    const [loading, setLoading] = useState(true);
    const [movieDetail, setMovieDetail] = useState({});
    const {id} = useParams();
    const getMovie = useCallback(async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovieDetail(json.data.movie);
        setLoading(false);
        console.log(json);
    }, [id]);
    useEffect(() => {
        getMovie();
    }, [getMovie]);
    console.log(movieDetail);
    return (
    <div>
        {loading ? ( 
            <h1>loading</h1> ) : (
                <div key={movieDetail.id}>
                    <img src={movieDetail.background_image} alt={movieDetail.id} />
                    <ul>
                        <li>{movieDetail.date_uploaded}</li>
                        <li>{movieDetail.title}</li>
                    </ul>
                </div>
            )
        }
    </div>
    );
};
export default Detail;
