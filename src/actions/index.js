import { ActionCreator } from 'redux';

export function movieslist() {
    return {
        type: "MOVIES_LIST",
        payload: [
            { id: 1, name: "Transformers" },
            { id: 2, name: "Star wars" },
            { id: 3, name: "Journey to center of earth" }
        ]
    }
}

export function directorslist() {
    return {
        type: 'DIR_LIST',
        payload: [
            { id: 1, name: "Tarantino" },
            { id: 2, name: "Scorsese" }
        ]
    }
}