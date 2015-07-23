'use strict';
var React = require('react-native');

var {
  StyleSheet,
  Navigator,
  View,
} = React;

var NavigationBar = require('react-native-navbar');
var TabBar = require('./TabBar');
var NavButton = require('./NavButton')


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
  		      						customPrev={<NavButton imageUrl='https://crater.io/packages/telescope-theme-crater/lib/public/images/crater.png'/>} />
  		    }}/>
  		)
  }
});

var styles = StyleSheet.create({

	navigator : {
		flex: 1,
	},
});

module.exports = Nav;