import { useSelector } from 'react-redux';
import MovieList from './MovieList';
import { LayOut } from '../organisms/Layout';
import { Hamburger } from '../organisms/Hamburger';

const Watchlist: React.FC = () => {
    const { email, watchlist } = useSelector((state: any) => state.watchlist);

    return (
        <LayOut>
            <div className='flex my-[30px] justify-between items-center'>
                <h2 className='text-2xl'>My Watchlist</h2>
                <Hamburger />
            </div>
            {email ? (
                watchlist?.length > 0 ?
                    <MovieList movies={watchlist} fetching={false} /> : <p>No Watchlist added</p>
            ) : (
                <p>Please log in to view your watchlist.</p>
            )}
        </LayOut>
    );
};

export default Watchlist;
