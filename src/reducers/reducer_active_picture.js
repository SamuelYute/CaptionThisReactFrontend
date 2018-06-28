import { GET_PICTURE } from '../actions/index';

export default function(state = {}, action) {
    
    switch(action.type){
        case GET_PICTURE : {
            return  action.payload.data.data;
        }
         default : {
            return state;
        }
    }
}