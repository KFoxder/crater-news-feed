/**
 * Crater.io News Feed App.
 * Built using React-Native.
 * https://github.com/facebook/react-native
 */

'use strict';

var React = require('react-native');

var {
  AppRegistry,
} = React;

var Nav = require('./source/js/components/Nav');


AppRegistry.registerComponent('CraterFeedApp', () => Nav);
