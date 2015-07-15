'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} = React;

var NavigationBar = require('react-native-navbar');
var ArticleView = require('./ArticleView');

var FeedItem = React.createClass({

	_onPressItem : function(href){
		console.log(href);
		var nav = this.props.nav;
		var element = this.props.elem;
		nav.push({
			navigationBar: <NavigationBar 
          						title="crater.io"
          						titleColor="#FFFFFF" 
          						backgroundColor="#CBBCDF" />,
           component: ArticleView,
           url: href
		});

	  
	},
	render: function () {

		var element = this.props.elem;
			return (
				<TouchableHighlight style={styles.touchContainer} onPress={this._onPressItem.bind(this,element.title.href)}>
				  <View style={styles.container}>
				    <View style={styles.leftContainer}>
				      <Text style={styles.title}>{element.title.text}</Text>
				      <View style={styles.bottomContainer}>
				        <Text style={styles.description}>
				          <Text style={styles.upvotes}>
				            {element.upvotes.text+'\t'}
				          </Text>
				          <Text style={styles.creator}>
				            {element.creator.text} 
				          </Text>
				        </Text>
				      </View>
				       <View style={styles.bottomContainer}>
				        <Text style={styles.description}>
				          <Text style={styles.orginalSite}>
				            {element.orginalSite.text} 
				          </Text>
				        </Text>
				      </View>
				    </View>
				    <View style={styles.rightContainer}>
				      <Text style={styles.comments}>{element.numComments.text}</Text>
				    </View>
				  </View>
				 </TouchableHighlight>
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
  touchContainer : {
  	flex: 1,
    marginBottom: -15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer : {
    flex: 4,
  },
  leftContainer : {
    flex: 4,
  },
  rightContainer: {
    flex: 1,
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  title: {
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 15,
    textAlign: 'left',
  },
  description : {
    flex: 1,
    fontSize: 12,
    marginLeft: 15,
    marginBottom: 5,
    textAlign: 'left',
  },
  comments: {
    textAlign: 'right',
    backgroundColor: 'transparent',
    marginRight: 15,
  },
  commentBubble: {
    textAlign: 'right',
    marginRight: 15,
    width: 30, 
    height: 30, 
    right: 0,
    backgroundColor: 'transparent'
  },
  upvotes: {
    fontSize: 10,
    backgroundColor: '#F5FCFF',
  },
  creator: {
    textAlign: 'right',
    marginRight: 5,
  },
  orginalSite : {
    flex: 1,
    marginLeft: 15,
    textAlign: 'left',
  },
});
module.exports = FeedItem;