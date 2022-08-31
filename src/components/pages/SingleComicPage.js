import { useState, useEffect } from 'react';

import { useParams, Link } from 'react-router-dom';
import useMarvelService from '../../services/MarvelService';
import './singleComicPage.scss';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

const SingleComicPage = () => {
    const { id } = useParams();
    const { loading, getComic, error, clearError } = useMarvelService();
    const [comic, setComic] = useState(null);

    useEffect(() => {
        updateComic();
    }, [id]);

    const updateComic = () => {
        clearError();
        getComic(id)
            .then(onComicLoaded)
    }

    const onComicLoaded = (comic) => {
        setComic(comic);
    }

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error || !comic) ? <View comic={comic}/> : null;

    return (
        <>
            {errorMessage}
            {spinner}
            {content}
        </>
    )
}

const View = ({comic}) => {
    const { thumbnail, title, description, pageCount, language, price } = comic;

    return (
        <div className="single-comic">
            <img src={thumbnail} alt={title} className="single-comic__img"/>
            <div className="single-comic__info">
                <h2 className="single-comic__name">{title}</h2>
                <p className="single-comic__descr">{description}</p>
                <p className="single-comic__descr">{pageCount}</p>
                <p className="single-comic__descr">Language: {language}</p>
                <div className="single-comic__price">{price}</div>
            </div>
            <Link to={'/comics'} className="single-comic__back">Back to all</Link>
        </div>
    )
}

export default SingleComicPage;