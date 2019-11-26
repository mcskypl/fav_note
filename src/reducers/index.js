const initialState = {
  twitters: [],
  articles: [],
  notes: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ('REMOVE_ITEM'):
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType].filter((item) => item.id !== action.payload.id),
        ],
      };

    case ('ADD_ITEM'):
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType],
          action.payload.item,
        ],
      };

    default:
      return state;
  }
};

export default rootReducer;
