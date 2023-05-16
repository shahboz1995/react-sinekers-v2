const initialState = {
  isLoading: false,
  allSneakers: [],
  favorites: [],
};

const addTofavourite = (state, item) => {
  return {
    ...state,
    favorites: [...state.favorites, item],
  };
};
const saveAllSneakers =(state, allSneakers = [])=>{
  return {
    ...state,
    allSneakers: allSneakers,
  }
}

const sneakersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVOURITE':
      return addTofavourite(state, action.payload);
      case `SAVE_ALL_SNEAKERS`:
      return saveAllSneakers(state, action.payload);

    default:
      return state;
  }
};

export default sneakersReducer;