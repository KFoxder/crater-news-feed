'use strict';
var React = require('react-native');

var {
  StyleSheet,
  Navigator,
  View,
  TouchableOpacity,
} = React;

var TabBar = require('./TabBar');
var NavigationBar = require('react-native-navbar');
var prevImage = 'https://crater.io/packages/telescope-theme-crater/lib/public/images/crater.png';
/**
 * Custom `Prev` button component
 */
class CustomPrev extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={() => alert('prev') }>
        <React.Image
          source={{uri: prevImage}}
          style={styles.customButton}
        />
      </TouchableOpacity>
    );
  }
}

var Nav = React.createClass({
  getInitialState: function() {
    return {
     
    };
  },
  renderScene: function(route, navigator) {
    var Component = route.component;
    var navBar = route.navigationBar;

    if (navBar) {
      navBar = React.addons.cloneWithProps(navBar, {
        navigator: navigator,
        route: route
      });
    }

    return (
      <View style={styles.navigator}>
        {navBar}
        <Component navigator={navigator} route={route} />
      </View>
    );
  },
  render : function(){

  	return (
  			<Navigator
  		    style={styles.navigator}
  		    renderScene={this.renderScene}
  		    initialRoute={{
  		      component: TabBar,
  		      navigationBar: <NavigationBar 
  		      						title="crater.io"
  		      						titleColor="#FFFFFF" 
  		      						backgroundColor="#CBBCDF"
  		      						customPrev={<CustomPrev/>} />
  		    }}/>
  		)
  }
});

var styles = StyleSheet.create({

	navigator : {
		flex: 1,
	},
	customButton: {
	    width: 24,
	    height: 24,
	    left: 10,
	    bottom: 5
  },
});

module.exports = Nav;