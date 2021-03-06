export default (state, action)=>{
    switch(action.type){

        case 'CLEAR_LOADING':
            return{
                ...state,
                loading: false
            }

        case 'SET_PAGE':
            return{
                ...state,
                page: action.payload
            }

        default:
            return state;
    }
}