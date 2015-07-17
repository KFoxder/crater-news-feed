'use strict';
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

var TabBarItemIOS = TabBarIOS.Item;


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
    		<CraterFeed navigator={this.props.navigator} feed={feedType}/>
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

	tabBar : {
	}
});

module.exports = TabBar;
