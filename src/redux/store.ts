import { useMemo } from 'react';
import { createStore, applyMiddleware, Action, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware, { ThunkMiddleware } from 'redux-thunk';
import { useDispatch as useReduxDispatch } from 'react-redux';
import reducers from './reducers/reducers';

export type RootState = ReturnType<typeof reducers>;

let store: Store<RootState, Action> | undefined;

function initStore(initialState: RootState | undefined) {
  return createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware as ThunkMiddleware<RootState, Action>))
  );
}

export const initializeStore = (preloadedState: RootState | undefined) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
}

export function useStore(initialState: RootState | undefined) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}

// Exporting a typed version of useDispatch
export type AppDispatch = typeof store extends Store<RootState, Action> ? Store<RootState, Action>['dispatch'] : never;

export const useAppDispatch = () => useReduxDispatch<AppDispatch>();
