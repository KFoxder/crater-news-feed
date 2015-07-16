'use strict';

var React = require('react-native');

var RefreshableListView = require('react-native-refreshable-listview');

var {
  ListView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} = React;

var FeedItem = require('./FeedItem');

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
      this.fetchData(this.props.feed.feedType);
    }else{
      this.fetchData('Trending');
    }
  },
  fetchData: function(feedType) {
  	console.log(feedType);
    var URL = '';
    switch(feedType) {

      case 'Trending':
          URL = 'https://www.kimonolabs.com/api/4npxz2z8';
          break;
      case 'Recent':
          URL = 'https://www.kimonolabs.com/api/2nn1qwje';
          break;
      case 'Best':
          URL = 'https://www.kimonolabs.com/api/9vg11a66';
          break;
      default:
          URL = 'https://www.kimonolabs.com/api/4npxz2z8';
    }

    fetch(URL+'?apikey=kJVkitxBOpZeSt9wwkkc1u4pjDj6FID8')
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.results.Posts),
          loaded: true,
        });
      })
      .done();
  },
  render: function() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }
    return (
      <RefreshableListView
        dataSource={this.state.dataSource}
        renderRow={this.renderMovie}
        refreshDescription="Refreshing..."
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
  renderMovie: function(element) {
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
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  }

});

module.exports = CraterFeed;