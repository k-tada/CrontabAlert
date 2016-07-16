import * as actions from '../actions';

initState = () => {
  const alerts = realm.objects( 'AlertList' );
  if ( alerts.length < 1 ) {
    realm.write( () => {
      realm.create( 'AlertList', { name: ( 'Alert List' )});
    });
  }

  return { alerts };
}

export const initial = initState();

const handlers = { };

export default ( state = initial, action ) => {
  const handler = handlers[ action.type ];
  return !handler ? state : handler( state, action );
}



