import {combineReducers} from 'redux'; 
import EntityReducer from './reducer-entities'; 

export default combineReducers({
  entities: EntityReducer
}); 