import assert from 'node:assert/strict';
import * as requestInit from '../src/api/request-init.ts';

assert.deepEqual(requestInit.buildRequestInit('GET'), { method: 'GET' });
assert.deepEqual(requestInit.buildRequestInit('POST', { ok: true }), {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ ok: true }),
});
