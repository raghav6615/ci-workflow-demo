const assert = require('assert');
const { getSystemStatus } = require('./index');
assert.strictEqual(getSystemStatus('production'), 'System active in production environment.');
console.log('All assertions passed successfully.');