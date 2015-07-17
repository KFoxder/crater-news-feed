'use strict';

var React = require('react-native');

var {
  StyleSheet,
  TouchableOpacity,
} = React;

/**
 * Custom button component
 */
var CustomNavButton = React.createClass({

  render :function() {
    return (
      <TouchableOpacity onPress={() => alert('prev') }>
        <React.Image
          source={{uri: this.props.imageUrl}}
          style={styles.customButton}/>
      </TouchableOpacity>
    );
  }
});

var styles = StyleSheet.create({
	customButton: {
	    width: 24,
	    height: 24,
	    left: 10,
	    bottom: 5
  },
});

module.exports = CustomNavButton;