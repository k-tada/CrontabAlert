import Realm from 'realm';

class Alert extends Realm.Object {}
Alert.schema = {
  name: 'Alert',
  properties: {
    name: 'string',
    cronjob: 'string',
    state: { type: 'bool', default: true },
  },
};

class AlertList extends Realm.Object {}
AlertList.schema = {
  name: 'AlertList',
  properties: {
    name: 'string',
    items: { type: 'list', objectType: 'Alert' },
  },
};

export default new Realm({ schema: [ Alert, AlertList ] });

