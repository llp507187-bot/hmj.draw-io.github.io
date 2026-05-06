import assert from 'node:assert/strict';
import * as idGenerator from '../src/utils/id-generator.ts';

const nextId = idGenerator.createIdGenerator(() => 100);
assert.equal(nextId(), '100');
assert.equal(nextId(), '101');
assert.equal(nextId(), '102');
