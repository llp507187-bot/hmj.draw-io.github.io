import assert from 'node:assert/strict';
import { normalizeSessions } from '../src/app/session-normalization.ts';

const sessions = [
  {
    id: 'session-1',
    title: 'A',
    messages: [
      { id: '1778045793529', role: 'user', content: 'u1', timestamp: 1 },
      { id: '1778045793529', role: 'agent', content: 'a1', timestamp: 2 },
      { id: '1778045793530', role: 'agent', content: 'a2', timestamp: 3 },
      { id: '1778045793530', role: 'user', content: 'u2', timestamp: 4 },
    ],
    drawIoXml: null,
    lastModified: 10,
  },
];

const normalized = normalizeSessions(sessions);

assert.equal(normalized.length, 1);
assert.equal(normalized[0].messages.length, 4);
assert.deepEqual(
  new Set(normalized[0].messages.map((message) => message.id)).size,
  4
);
assert.equal(normalized[0].messages[0].id, '1778045793529');
