/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../src/App';

// Note: import React before renderer
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});