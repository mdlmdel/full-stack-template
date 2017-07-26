import axios from 'axios'; 

const apiUrl = 'https://senticord.herokuapp.com'

const baseURL = 'https://gateway-a.watsonplatform.net/calls/url/URLGetTextSentiment'
axios.default.baseURL = baseURL; 

// To have access to these outside of this file, you need to export all of them
export const WELCOME_PAGE = 'WELCOME_PAGE';
export const GET_ENTITY = 'GET_ENTITY'; 
export const SAVE_ENTITY = 'SAVE_ENTITY';
export const DELETE_ENTITY = 'DELETE_ENTITY';
export const DISPLAY_RESULTS = 'DISPLAY_RESULTS';


export const GETENTITY_SUCCESS = 'GETENTITY_SUCCESS';
export const SEARCH_ERROR = 'SEARCH_ERROR';

export const getEntities = query => dispatch => {
  console.log('Search for an entity', query);
  dispatch({ type: GET_ENTITY, query });

  return axios.get(`${apiUrl}/entities?query=${query}`)
    .then(res => {
      console.log('RES', res);
      dispatch({ type: GETENTITY_SUCCESS, data: res.data })
    })
    .catch(error => dispatch({ type: SEARCH_ERROR, error }));
}

/*export const displayResults = (table, results) => ({
    // This is how the reducer knows what type of action you're calling
    type: DISPLAY_RESULTS,
    table,
    results
});*/

// All this is is a function that returns an object, a pure function
export const welcomePage = (page, instructions) => ({
    type: WELCOME_PAGE,
    page,
    instructions
}); 

// Add the sources to the backend

//export const getEntities = query => dispatch => {
 
  // Access backend from SentiCord server.js backend
 /* axios.get('http://localhost:8080/entities', { query })
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      throw Error(err);
    });
}*/

/*app.post('/save-record', (req, res) => {
  console.log("Save record via POST request");
  const requiredFields = ['query', 'date', 'results', 'averageScore'];
  requiredFields.forEach(field => {
    // ensure that required fields have been sent over
    if (! (field in req.body && req.body[field])) {
      return res.status(400).json({message: `Must specify value for ${field}`});
    }
  });*/

export const saveEntities = (entity, query) => (dispatch, getState) => {
  // Access backend from SentiCord server.js backend
  //axios.post(`http://localhost:8080/entities/:id`, { query })
  const state = getState();
  // See what was returned from above function
  console.log(state);
  // axios.post(`http://localhost:8080/save-record/${id}`)
  // See what was console logged here
  axios.post(`${apiUrl}/save-record`, {...entity, query})
    .then(res => {
      console.log(res.data);
      // Added 
      dispatch({ type: SAVE_ENTITY, entity })
    })
    .catch(err => {
      throw Error(err);
    });
}

export const displayResults = () => dispatch => {
  return axios.get(`${apiUrl}/view-reports`)
    .then(res => {
      //console.log('RES', res);
      dispatch({ type: DISPLAY_RESULTS, data: res.data })
    })
    .catch(error => dispatch({ type: SEARCH_ERROR, error }));
}
/*export const postEntities = query => dispatch => {
  // Access backend from SentiCord server.js backend
  axios.post('http://localhost:8080/entities', { query })
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      throw Error(err);
    });
}*/

export const deleteEntities = id => (dispatch, getState) => {
  // Access backend from SentiCord server.js backend
  axios.post(`${apiUrl}/entity/${id}`)
    .then(res => {
      console.log(res.data)
      //getState().filter(query => query.id !== action.id)
      dispatch({
        type: DELETE_ENTITY, id
      })
    })
    .catch(err => {
      throw Error(err);
    });
}

// When you search for a query, you get from the API
// Ex: "When you search for this query, display this...."
// Then display it in a table
// Then to save the report, you do a post request

// Note: .then() implies that you do whatever follows after the previous code has completed

// Look up REST Api conventions

// Create all actions first, then create reducer, then display the results

// Do user stories for the MVP features for this project