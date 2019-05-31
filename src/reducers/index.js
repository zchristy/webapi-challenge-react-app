import {
  FETCH_PROJECTS_START,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_FAILURE,
  ADD_PROJECT_START,
  ADD_PROJECT_SUCCESS,
  ADD_PROJECT_FAILURE,
  UPDATE_PROJECT_START,
  UPDATE_PROJECT_SUCCESS,
  UPDATE_PROJECT_FAILURE,
  DELETE_PROJECT_START,
  DELETE_PROJECT_SUCCESS,
  DELETE_PROJECT_FAILURE
} from '../actions'

const initialState = {
  projectsList: [],
  fetching: false,
  adding: false,
  updating: false,
  deleting: false,
  error: null
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_PROJECTS_START:
      return {
        ...state,
        fetching: true,
        error: ''
      }
    case FETCH_PROJECTS_SUCCESS:
      return {
        ...state,
        projectsList: action.payload,
        error: ''
        }
    case FETCH_PROJECTS_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload
        }
    case ADD_PROJECT_START:
      return {
        ...state,
        adding: true,
        error: ''
      }
    case ADD_PROJECT_SUCCESS:
      return {
        ...state,
        adding: false,
        error: ''
        }
    case ADD_PROJECT_FAILURE:
      return {
        ...state,
        adding: false,
        error: action.payload
        }
    case UPDATE_PROJECT_START:
      return {
        ...state,
        updating: true,
        error: ''
      }
    case UPDATE_PROJECT_SUCCESS:
      return {
        ...state,
        updating: false,
        error: ''
        }
    case UPDATE_PROJECT_FAILURE:
      return {
        ...state,
        updating: false,
        error: action.payload
        }
    case DELETE_PROJECT_START:
      return {
        ...state,
        deleting: true,
        error: ''
      }
    case DELETE_PROJECT_SUCCESS:
      return {
        ...state,
        deleting: false,
        error: ''
        }
    case DELETE_PROJECT_FAILURE:
      return {
        ...state,
        deleting: false,
        error: action.payload
            }
    default:
      return state
  }
}

export default reducer;
