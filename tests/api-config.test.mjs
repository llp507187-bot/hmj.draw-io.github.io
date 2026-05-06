import assert from 'node:assert/strict';
import * as apiBaseUrl from '../src/config/api-base-url.ts';

const originalWindow = globalThis.window;
const originalEnv = process.env.NEXT_PUBLIC_API_BASE_URL;

try {
  delete globalThis.window;
  delete process.env.NEXT_PUBLIC_API_BASE_URL;
  assert.equal(apiBaseUrl.resolveApiBaseUrl(), 'http://localhost:8091/api/v1');

  globalThis.window = {
    __ENV: { NEXT_PUBLIC_API_BASE_URL: 'http://localhost:9000/api/v1' },
    location: { origin: 'http://localhost:3000' },
  };
  assert.equal(apiBaseUrl.resolveApiBaseUrl(), '/api/v1');

  globalThis.window = {
    __ENV: { NEXT_PUBLIC_API_BASE_URL: 'https://api.example.com/api/v1' },
    location: { origin: 'http://localhost:3000' },
  };
  assert.equal(apiBaseUrl.resolveApiBaseUrl(), 'https://api.example.com/api/v1');
} finally {
  if (originalWindow === undefined) {
    delete globalThis.window;
  } else {
    globalThis.window = originalWindow;
  }

  if (originalEnv === undefined) {
    delete process.env.NEXT_PUBLIC_API_BASE_URL;
  } else {
    process.env.NEXT_PUBLIC_API_BASE_URL = originalEnv;
  }
}
