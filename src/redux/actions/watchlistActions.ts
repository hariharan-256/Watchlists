
export const addToWatchlist = (movie: string) => {
    return {
      type: 'ADD_TO_WATCHLIST',
      payload: movie
    };
  };
  
  export const removeFromWatchlist = (id:string) => {
    return {
      type: 'REMOVE_FROM_WATCHLIST',
      payload: id
    };
  };
  export const setUser = (user:string) => {
    return {
        type: 'SET_USER',
        payload: user
    };
  };

  