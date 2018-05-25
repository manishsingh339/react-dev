import {combineReducers} from 'redux';
import data from './movies-list-reducer';

const rootReducers = combineReducers({data});
export default rootReducers;