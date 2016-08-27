import Realm from 'realm';

class Alerts {}
Alerts.schema = {
  name: 'Alerts',
  primaryKey: 'alertId',
  properties: {
    alertId: { type: 'int' },
    name: { type: 'string' },
    cron: { type: 'string' },
    state: { type: 'bool', default: true }
  }
};

export default new Realm({ schema: [ Alerts ] });

