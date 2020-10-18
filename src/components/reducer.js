export const initialState = {
  user: null,
  // token: null,
  playlists: [],
  playing: false,
  item: null,

  token:
    "BQCEJ2PLI1qio7cPHXNxy2i5H940YH45b6B0tEJ0hDXt11TLNAzmy6VSnnCuiK-xYHAXG4aKvoc6SbUiBclMxWwmeGCcFwZtNOzoOXq1SQe40pauGtslSzOTgsazJ6YWYdL7UhxOW1tzAeemr7kpUiC1vGrQBn7LFLGU_O8dZq3R0tvl",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };

    case "SET_TOKEN":
      return { ...state, token: action.token };

    case "SET_PLAYLIST":
      return { ...state, playlists: action.playlist };

    default:
      return state;
  }
};
