import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../redux/actions/movieActions';
import { LayOut } from '../organisms/Layout';
import { IoStar } from "react-icons/io5";
import { Hamburger } from '../organisms/Hamburger';
import { Loader } from '../organisms/Loader';



const MovieDetail: React.FC = () => {
    const { id } = useParams<string>();
    const dispatch = useDispatch();
    const { fetching, movieDetails } = useSelector((state: any) => state.movies);

    useEffect(() => {
        if (id) {
            dispatch(getMovieDetails(id) as any);
        }
    }, [dispatch, id]);


    return (
        <LayOut>
            <div className='text-white relative xl:flex my-[30px] overflow-y-auto h-[calc(100vh_-_100px)]'>
                {fetching ? <div className='text-center absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]'><Loader /></div> : movieDetails ? (
                    <> <div className='basis-1/2 space-y-2 mr-2 mb-4 xl:mb-0'>
                        <div className='flex justify-between items-center mb-2'>
                            <h2 className='text-4xl flex-1 font-bold'>{movieDetails?.Title}</h2>
                            <Hamburger />
                        </div>
                        <p className='text-sm'>{movieDetails?.Plot}</p>
                        <p><b>Year:</b>  {movieDetails?.Year}</p>
                        <p><b>Actors:</b> {movieDetails?.Actors}</p>
                        <p><b>Director:</b> {movieDetails?.Director}</p>
                        <p><b>Writers:</b> {movieDetails?.Writer}</p>
                        <span className='flex'><b>Ratings:</b> <IoStar className='text-[rgb(245,197,24)] mx-1 text-lg' />{movieDetails?.imdbRating}/10</span>
                    </div>
                        <div className='basis-1/2'>
                            <img className='w-full rounded-[10px] h-[500px] object-contain' src={movieDetails?.Poster} alt={movieDetails?.Title} />
                        </div>
                    </>
                ) : (
                    <p className='text-center'>No data found!</p>
                )}
            </div>
        </LayOut>
    );
};

export default MovieDetail;
