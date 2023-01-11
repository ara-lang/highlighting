import { window } from 'vscode';
import { assert } from 'chai';

suite('Extension Test Suite', function () {
    window.showInformationMessage('Start all tests.');

    test('Sample test', function () {
        assert.strictEqual(-1, [1, 2, 3].indexOf(5));
        assert.strictEqual(-1, [1, 2, 3].indexOf(0));
    });
});
