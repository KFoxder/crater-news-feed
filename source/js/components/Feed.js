'use strict';

var React = require('react-native');

var {
  ListView,
  StyleSheet,
  Text,
  View,
} = React;

var RefreshableListView = require('react-native-refreshable-listview');
var FeedItem = require('./FeedItem');
var FeedDataService = require('../services/FeedDataService');

var CraterFeed = React.createClass({
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  },
  componentDidMount: function() {
    if(this.props.feed){
      this.fetchData();
    }
  },
  fetchData: function(callback) {
  	console.log('Feed Type = '+this.props.feed);
    var promise = FeedDataService.getFeedData(this.props.feed);

    promise.then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.results.Posts),
          loaded: true,
        });
      }).then(function(){
          callback();
      });

  },
  render: function() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }
    return (
      <RefreshableListView
        dataSource={this.state.dataSource}
        renderRow={this.renderFeedItem}
        refreshDescription="Refreshing..."
        loadData={this.fetchData}
        style={styles.listView} />
    );
  },
  renderLoadingView: function() {
    return (
      <View style={styles.container}>
        <Text>
          Loading Articles...
        </Text>
      </View>
    );
  },
  renderFeedItem: function(element) {
    return (
     <FeedItem elem={element} nav={this.props.navigator}/>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    borderBottomColor: '#EBE5F4',
    borderBottomWidth: 1

  },
  listView: {
    backgroundColor: '#F5FCFF',
  }

});

module.exports = CraterFeed;