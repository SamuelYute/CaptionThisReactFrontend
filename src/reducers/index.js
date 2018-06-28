import { combineReducers } from 'redux';
import RandomCaptionsReducer from './reducer_random_captions'
import ActivePictureReducer from './reducer_active_picture'
import ActiveCaptionsReducer from './reducer_active_captions'

const rootReducer = combineReducers({
    randomCaptions : RandomCaptionsReducer,
    activePicture : ActivePictureReducer,
    activeCaptions : ActiveCaptionsReducer, 
});

export default rootReducer;