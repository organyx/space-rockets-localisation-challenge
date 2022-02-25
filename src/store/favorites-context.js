import { createContext } from 'react';

const FavoritesContext = createContext({
  launchItems: [],
  addLaunchItem: item => {},
  removeLaunchItem: id => {},
  launchPadItems: [],
  addLaunchPadItem: item => {},
  removeLaunchPadItem: id => {}
});

export default FavoritesContext;
