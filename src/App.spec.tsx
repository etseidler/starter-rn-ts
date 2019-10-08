import * as React from 'react';
import { Text } from 'react-native';
import * as renderer from 'react-test-renderer';

import App from './App';

describe('App', () => {
    it("create a component, but don't do anything with it", () => {
        renderer.create(
            <App />,
        );
        expect(true).toBe(true);
    });
    it('create a component, then check the contents', () => {
        const component = renderer.create(
            <App />,
        );
        const instance = component.root;
        const textEl = instance.findByType(Text);
        expect(textEl.props.children).toBe("Hello Expo!");
    });
});