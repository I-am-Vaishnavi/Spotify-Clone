export const initialState ={
    user: null,
    playlists: [],
    playing:false,
    item : null,
    //token : "BQBQ746yBFjVRpVSRkH2DjVRReo28ODG6eaX346n5u9F5fJEP3…RPEri3xLUAK3sN1S2jF_ZQ6tz9OH31UE0w2go8559YwF0iBAT",
};

const reducer =(state,action)=>{
    console.log(action);
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
            case 'SET_TOKEN':
                return{
                    ...state,
                    token : action.token,
                };
            case 'SET_PLAYLISTS':
                return{
                    ...state,
                    playlists : action.playlists,
                };
            case 'SET_DISCOVER_WEEKLY':
                return {
                    ...state,
                    discover_weekly: action.discover_weekly,
                }
            default:
                return state;
    }
}
export default reducer;