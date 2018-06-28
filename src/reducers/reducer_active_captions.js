import { GET_PICTURE_CAPTIONS } from '../actions/index';

export default function(state = [], action) {
    
    switch(action.type){
        case GET_PICTURE_CAPTIONS:{
            return action.payload.data.data;
        }
         default : {
            return state;
        }
    }
}