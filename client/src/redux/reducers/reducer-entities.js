 import * as actions from '../../actions/actions';

const INITIAL_STATE = {
  averageSentimentScore: [], 
  data: [], 
  query: ''
}

// Delete switch functions, and replace with something simpler
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.GET_ENTITY: 
      return {
        ...state, query: action.query
      }
    case actions.GETENTITY_SUCCESS: 
      return {
        ...state, data: action.data
      }
    case actions.DISPLAY_RESULTS: 
      return {
        ...state, 
        data: action.data
      }
    case actions.SAVE_ENTITY: 
      return {
        ...state, 
        reportTable: {
          query: action.text, 
          type: action.num, 
          averageSentimentScore: action.num, 
          date: action.text
        }
      }
      case actions.DELETE_ENTITY: 
      return {
        ...state, data: state.data.filter(item => item._id !== action.id)
      }
    case actions.WELCOME_PAGE:
      return INITIAL_STATE;
    default:
      return state;
  }
};

