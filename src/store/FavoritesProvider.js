import React, { useReducer } from 'react';
import FavoritesContext from './favorites-context';

const defaultFavoriteState = {
  launchItems: [],
  launchPadItems: []
};

const favoritesReducer = (state, action) => {
  let updatedItems;
  let existingItemIndex;
  let existingItem;
  switch (action.type) {
    case 'ADD_LAUNCH_ITEM':
      existingItemIndex = state.launchItems.findIndex(item => item.flight_number === action.item.flight_number);
      existingItem = state.launchItems[existingItemIndex];
      if (existingItem || existingItemIndex !== -1) {
        updatedItems = [...state.launchItems];
      } else {
        updatedItems = [...state.launchItems, action.item];
      }
      return { launchItems: updatedItems, launchPadItems: state.launchPadItems };
    case 'REMOVE_LAUNCH_ITEM': {
      updatedItems = state.launchItems.filter(item => item.flight_number !== action.id);
      return { launchItems: updatedItems, launchPadItems: state.launchPadItems };
    }
    case 'ADD_LAUNCH_PAD_ITEM':
      existingItemIndex = state.launchPadItems.findIndex(item => item.site_id === action.item.site_id);
      existingItem = state.launchPadItems[existingItemIndex];
      if (existingItem) {
        updatedItems = [...state.launchPadItems];
      } else {
        updatedItems = [...state.launchPadItems, action.item];
      }

      return { launchPadItems: updatedItems, launchItems: state.launchItems };
    case 'REMOVE_LAUNCH_PAD_ITEM': {
      updatedItems = state.launchPadItems.filter(item => item.site_id !== action.id);
      return { launchPadItems: updatedItems, launchItems: state.launchItems };
    }
    default:
      return state;
  }
};

const FavoritesProvider = ({ children }) => {
  const [favoritesState, dispatchFavoritesAction] = useReducer(favoritesReducer, defaultFavoriteState);
  const addLaunchItemHandler = item => {
    dispatchFavoritesAction({ type: 'ADD_LAUNCH_ITEM', item });
  };
  const removeLaunchItemHandler = id => {
    dispatchFavoritesAction({ type: 'REMOVE_LAUNCH_ITEM', id });
  };
  const addLaunchPadItemHandler = item => {
    dispatchFavoritesAction({ type: 'ADD_LAUNCH_PAD_ITEM', item });
  };
  const removeLaunchPadItemHandler = id => {
    dispatchFavoritesAction({ type: 'REMOVE_LAUNCH_PAD_ITEM', id });
  };
  const favoritesContext = {
    launchItems: favoritesState.launchItems,
    launchPadItems: favoritesState.launchPadItems,
    addLaunchItem: addLaunchItemHandler,
    removeLaunchItem: removeLaunchItemHandler,
    addLaunchPadItem: addLaunchPadItemHandler,
    removeLaunchPadItem: removeLaunchPadItemHandler
  };
  return <FavoritesContext.Provider value={favoritesContext}>{children}</FavoritesContext.Provider>;
};

export default FavoritesProvider;
