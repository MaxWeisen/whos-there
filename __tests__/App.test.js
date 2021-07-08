import React from 'react';
import renderer from 'react-test-renderer';


import App from "../App.tsx";

jest.mock("react-native-maps", () => "MapView");

describe('<App />', () => {
  it('has at least 1 child', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree.children.length).toBeGreaterThan(1)
  })
})