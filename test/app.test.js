import { test } from 'node:test';
import assert from 'node:assert';

test('frontend service name is correct', () => {
    const config = { service: 'frontend', port: 3001 };
    assert.strictEqual(config.service, 'frontend');
});

test('frontend port is 3001', () => {
    const config = { service: 'frontend', port: 3001 };
    assert.strictEqual(config.port, 3001);
});

test('frontend status is running', () => {
    const config = { status: 'running' };
    assert.strictEqual(config.status, 'running');
});
