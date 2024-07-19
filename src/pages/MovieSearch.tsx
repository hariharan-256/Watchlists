import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';
import { LayOut } from '../organisms/Layout';

const MovieSearch: React.FC = () => {
    const { searchResults, fetching } = useSelector((state: any) => state.movies);
    console.log(searchResults, "llk");


    return (
        <LayOut>
            <div className='text-white'>
                <MovieList movies={searchResults} fetching={fetching} />
            </div>
        </LayOut>
    );
};

export default MovieSearch;
