import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

/**
 * Action Types & Creators
 */

const {Types, Creators} = createActions({
  loadRequest: null,
  loadSuccess: ['data'],
  loadFailure: null,
});

//--
// Com essa parte ai em cima criamos os types
// Types: {LOAD_REQUEST, LOAD_SUCCESS, LOAD_FAILURE }

// e os Creators

/**
 * loadRequest: () => ({ type: 'LOAD_REQUEST' })
 * loadSuccess: (data) => ({ type: 'LOAD_SUCCESS, data })
 * loadFailure: () => ({ type: 'LOAD_FAILURE })
 */

// --

export const PodcastsTypes = Types;
export default Creators;

/**
 * Initial state
 */

export const INITIAL_STATE = Immutable({
  data: [],
});

/**
 * Reducer
 */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_SUCCESS]: (state, action) => state.merge({data: action.data}),
});
