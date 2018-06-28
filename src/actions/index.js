import axios from 'axios';
const BASE_URL = 'http://policies.elections.succ.yazamw.com/api';
const BASE_URL1 = 'http://192.168.43.15:8000/api'; 
const BASE_URL2 = 'http://localhost:8000/api';

export const GET_RANDOM_CAPTIONS = 'GET_RANDOM_CAPTIONS';

export function getRandomCaptions() {
    const url = `${BASE_URL2}/captions`;
    const request = axios.get(url);
    
    return {
        type: GET_RANDOM_CAPTIONS,
        payload: request
    }
}

export const GET_CAPTION_PICTURE = 'GET_CAPTION_PICTURE';

export function getCaptionPicture(CaptionID) {
    const url = `${BASE_URL2}/captions/${CaptionID}/picture`;
    const request = axios.get(url);
    
    return {
        type: GET_CAPTION_PICTURE,
        payload: request
    }
}

export const GET_CAPTION_REPLIES = 'GET_CAPTION_REPLIES';

export function getCaptionReplies(CaptionID) {
    const url = `${BASE_URL2}/captions/${CaptionID}/replies`;
    const request = axios.get(url);
    
    return {
        type: GET_CAPTION_REPLIES,
        payload: request
    }
}

export const GET_CAPTION_LIKES = 'GET_CAPTION_LIKES';

export function getCaptionLikes(CaptionID) {
    const url = `${BASE_URL2}/captions/${CaptionID}/likes`;
    const request = axios.get(url);
    
    return {
        type: GET_CAPTION_LIKES,
        payload: request
    }
}

export const GET_PICTURE = 'GET_PICTURE';

export function getPicture(pictureID) {
    const url = `${BASE_URL2}/pictures/${pictureID}`;
    const request = axios.get(url);
    
    return {
        type: GET_PICTURE,
        payload: request
    }
}

export const GET_PICTURE_CAPTIONS = 'GET_PICTURE_CAPTIONS';

export function getPictureCaptions(pictureID) {
    const url = `${BASE_URL2}/pictures/${pictureID}/captions`;
    const request = axios.get(url);
    
    return {
        type: GET_PICTURE_CAPTIONS,
        payload: request
    }
}

export const GET_REPLIES = 'GET_REPLIES';

export function getReplies(agent, agentID) {
    const url = `${BASE_URL2}/${agent}/${agentID}/replies`;
    const request = axios.get(url);
    
    return {
        type: GET_REPLIES,
        payload: request
    }
}