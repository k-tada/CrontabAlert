import * as actions from '../actions';

export const initial = {};

const handlers = { };

export default ( state = initial, action ) => {
  const handler = handlers[ action.type ];
  return !handler ? state : handler( state, action );
}



