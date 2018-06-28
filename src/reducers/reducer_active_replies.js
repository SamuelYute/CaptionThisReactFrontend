import { GET_REPLIES } from '../actions/index';

export default function(state = [], action) {
    
    switch(action.type){
        case GET_REPLIES:{
            return action.payload.data.data;
        }
         default : {
            return state;
        }
    }
}