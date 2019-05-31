import axios from 'axios';

export const FETCH_PROJECTS_START = 'FETCH_PROJECTS_START';
export const FETCH_PROJECTS_SUCCESS = 'FETCH_PROJECTS_SUCCESS';
export const FETCH_PROJECTS_FAILURE = 'FETCH_PROJECTS_FAILURE';

export const getProjects = () => dispatch => {
  dispatch({ type: FETCH_PROJECTS_START });
  axios
    .get('http://localhost:5000/api/projects')
    .then(res => {
      dispatch({ type: FETCH_PROJECTS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: FETCH_PROJECTS_FAILURE,
        payload: err.error
      });
    });
};

export const FETCH_SINGLE_PROJECT_START = 'FETCH_SINGLE_PROJECT_START';
export const FETCH_SINGLE_PROJECT_SUCCESS = 'FETCH_SINGLE_PROJECT_SUCCESS';
export const FETCH_SINGLE_PROJECT_FAILURE = 'FETCH_SINGLE_PROJECT_FAILURE';

export const getSingleProject = id => dispatch => {
  console.log(id)
  dispatch({ type: FETCH_SINGLE_PROJECT_START });
  axios
    .get(`http://localhost:5000/api/projects/${id}`)
    .then(res => {
      console.log(res.data)
      dispatch({ type: FETCH_SINGLE_PROJECT_SUCCESS, payload: {...res.data} });
    })
    .catch(err => {
      dispatch({
        type: FETCH_SINGLE_PROJECT_FAILURE,
        payload: err.error
      });
    });
};

export const ADD_PROJECT_START = 'ADD_PROJECT_START';
export const ADD_PROJECT_SUCCESS = 'ADD_PROJECT_SUCCESS';
export const ADD_PROJECT_FAILURE = 'ADD_PROJECT_FAILURE';

export const addProject = project => dispatch => {
  dispatch({ type: ADD_PROJECT_START });
  return axios
    .post('http://localhost:5000/api/projects', project)
    .then(res => {
      dispatch({ type: ADD_PROJECT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: ADD_PROJECT_FAILURE,
        payload: err.errorMessage
      });
    });
};

export const UPDATE_PROJECT_START = 'UPDATE_PROJECT_START';
export const UPDATE_PROJECT_SUCCESS = 'UPDATE_PROJECT_SUCCESS';
export const UPDATE_PROJECT_FAILURE = 'UPDATE_PROJECT_FAILURE';

export const updateProject = project => dispatch => {
  dispatch({ type: UPDATE_PROJECT_START });
  return axios
    .put(`http://localhost:5000/api/project/${project.id}`, project)
    .then(res => {
      dispatch({ type: UPDATE_PROJECT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: UPDATE_PROJECT_FAILURE,
        payload: err.error
      });
    });
};

export const DELETE_PROJECT_START = 'DELETE_PROJECT_START';
export const DELETE_PROJECT_SUCCESS = 'DELETE_PROJECT_SUCCESS';
export const DELETE_PROJECT_FAILURE = 'DELETE_PROJECT_FAILURE';

export const deleteProject = id => dispatch => {
  dispatch({ type: DELETE_PROJECT_START });
  return axios
    .delete(`http://localhost:5000/api/project/${id}`)
    .then(res => {
      dispatch({ type: DELETE_PROJECT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: DELETE_PROJECT_FAILURE,
        payload: err.error
      });
    });
};
