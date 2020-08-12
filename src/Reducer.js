export const initialState={
    user:null,
    playlists:[],
    playing:false,
    item:null,
    //token:'BQCZFgM25I8tzLYvht8cRLxxsvS_o5cFMc_5MtppfXWMtPfQuy…O42CfTgpdyqiisii6xXRwDWjwM14ETitF8omYbwwfr99LG2He'
}

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "SET_USER":
        return {
          ...state,
          user: action.user,
        };
  
      case "SET_PLAYING":
        return {
          ...state,
          playing: action.playing,
        };
  
      case "SET_ITEM":
        return {
          ...state,
          item: action.item,
        };
  
      case "SET_DISCOVER_WEEKLY":
        return {
          ...state,
          discover_weekly: action.discover_weekly,
        };
  
      case "SET_TOP_ARTISTS":
        return {
          ...state,
          top_artists: action.top_artists,
        };
  
      case "SET_TOKEN":
        return {
          ...state,
          token: action.token,
        };
  
      case "SET_SPOTIFY":
        return {
          ...state,
          spotify: action.spotify,
        };
  
      case "SET_PLAYLISTS":
        return {
          ...state,
          playlists: action.playlists,
        };
      default:
        return state;
}

}

export default reducer;