import * as React from 'react';
import * as renderer from 'react-test-renderer';

import App from './App';

describe('App', () => {
    it("create a component, but don't do anything with it", () => {
        renderer.create(
            <App />,
        );
        expect(true).toBe(true);
    });
});