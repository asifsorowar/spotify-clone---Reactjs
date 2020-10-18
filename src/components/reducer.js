export const initialState = {
  user: null,
  token: null,
  playlists: [],
  playing: false,
  item: null,

  token:
    "BQCEJ2PLI1qio7cPHXNxy2i5H940YH45b6B0tEJ0hDXt11TLNAzmy6VSnnCuiK-xYHAXG4aKvoc6SbUiBclMxWwmeGCcFwZtNOzoOXq1SQe40pauGtslSzOTgsazJ6YWYdL7UhxOW1tzAeemr7kpUiC1vGrQBn7LFLGU_O8dZq3R0tvl",

  user: {
    display_name: "Asifsorowaroyen",
    external_urls: {
      spotify: "https://open.spotify.com/user/21yqfbgus4wabffwrior5zggy",
    },
    followers: { href: null, total: 5 },
    href: "https://api.spotify.com/v1/users/21yqfbgus4wabffwrior5zggy",
    id: "21yqfbgus4wabffwrior5zggy",
    images: [
      {
        height: null,
        url:
          "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=1268898343222553&height=300&width=300&ext=1605633246&hash=AeS0Yh-SwWY354FXVGY",
        width: null,
      },
    ],
    type: "user",
    uri: "spotify:user:21yqfbgus4wabffwrior5zggy",
  },
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
