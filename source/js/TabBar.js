'use strict';
/*      <CraterFeed feed={feedType}/>*/
var React = require('react-native');

var {
  StyleSheet,
  TabBarIOS,
  NavigatorIOS,
  Navigator,
  View,
    TouchableOpacity,
} = React;

var { 
	TabBarIOS,
} = require('react-native-icons');

var CraterFeed = require('./Feed');
var NavigationBar = require('react-native-navbar');

var TabBarItemIOS = TabBarIOS.Item;


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

var TabBar = React.createClass({
  getInitialState: function() {
    return {
      selectedTab: 'trending',
      notifCount: 0,
      presses: 0,
    };
  },
   _renderContent: function(feedType: string) {
    return (
    		<Navigator
        style={styles.navigator}
        renderScene={this.renderScene}
        initialRoute={{
          component: CraterFeed,
          feed: {feedType},
          navigationBar: <NavigationBar 
          						title="crater.io"
          						titleColor="#FFFFFF" 
          						backgroundColor="#CBBCDF"
          						customPrev={<CustomPrev/>} />
        }}/>

    );
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
        <Component feed={route.feed} url={route.url} navigator={navigator} route={route} />
      </View>
    );
  },

  render: function () {
    return (
      <TabBarIOS
        selectedTab={this.state.selectedTab}
        tintColor={'#FFFFFF'}
        barTintColor={'#CBBCDF'}
        styles={styles.tabBar}>
        <TabBarItemIOS
          name="Best"
          iconName={'ion|ios-star-outline'}
          title={'Best'}
          iconSize={32}
          accessibilityLabel="Best"
          selected={this.state.selectedTab === 'best'}
          onPress={() => {
            this.setState({
              selectedTab: 'best',
            });
          }}>
          {this._renderContent('Best')}
        </TabBarItemIOS>
        <TabBarItemIOS
            name="Trending"
            iconName={'ion|ios-pulse'}
            title={'Trending'}
            iconSize={32}
            accessibilityLabel="Trending"
            selected={this.state.selectedTab === 'trending'}
            onPress={() => {
              this.setState({
                selectedTab: 'trending',
              });
          }}>
          {this._renderContent('Trending')}
        </TabBarItemIOS>
        <TabBarItemIOS
            name="Recent"
            iconName={'ion|ios-clock-outline'}
            title={'Recent'}
            iconSize={32}
            accessibilityLabel="Recent"
            selected={this.state.selectedTab === 'recent'}
            onPress={() => {
              this.setState({
                selectedTab: 'recent',
              });
          }}>
          {this._renderContent('Recent')}
        </TabBarItemIOS>
      </TabBarIOS>
    );
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

module.exports = TabBar;
