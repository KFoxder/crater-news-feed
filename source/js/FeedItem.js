'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} = React;

var { Icon, } = require('react-native-icons');
var NavigationBar = require('react-native-navbar');
var ArticleView = require('./ArticleView');

var FeedItem = React.createClass({

	_onPressItem : function(href){
		console.log(href);
		var nav = this.props.nav;
		var element = this.props.elem;
    var title = element.title.text;
    if(title.length >30){
      title = title.substring(0,30) + '...';
    }else{
      title = title.substring(0,30);
    }
		nav.push({
			navigationBar: <NavigationBar 
          						title={title}
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
				          <Text style={styles.upvotes}>
				            {element.upvotes.text}
				          </Text>
				          <Text style={styles.creator}>
				            {element.creator.text} 
				          </Text>
				      </View>
				       <View style={styles.bottomContainer}>
                <Icon
                      name='ion|ios-world-outline'
                      size={globeDiameter}
                      color={textColor}
                      style={styles.globe}/>
			          <Text style={styles.orginalSite}>
                  {element.orginalSite.text} 
			          </Text>
				      </View>
				    </View>
				    <View style={styles.rightContainer}>
              <Icon
                      name='ion|ios-chatbubble-outline'
                      size={commentDiameter}
                      color={textColor}
                      style={styles.commentBubble}/>
				      <Text style={styles.comments}>{element.numComments.text}</Text>
				    </View>
				  </View>
				 </TouchableHighlight>
			);
		
    
	}
});

var textColor = '#5B3B86';
var globeDiameter = 15;
var commentDiameter = 15;

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
  topContainer : {
    flex: 4,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  bottomContainer : {
    flex: 4,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  leftContainer : {
    flex: 4,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  title: {
    fontSize: 13,
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 15,
    textAlign: 'left',
  },
  comments: {
    flex: 1,
    textAlign: 'left',
    backgroundColor: 'transparent',
    marginRight: 0,
    color: textColor, 
  },
  commentBubble: {
    flex: 1,
    width: commentDiameter, 
    height: commentDiameter, 
    backgroundColor: 'transparent',
    marginLeft: 15,
  },
  upvotes: {
    flex: 1,  
    textAlign: 'left',
    fontSize: 12,
    marginLeft: 15,
    color: textColor,
    textAlign: 'center',
  },
  creator: {
    flex: 9,  
    textAlign: 'left',
    fontSize: 12,
    color: textColor,

  },
  orginalSite : {
    flex: 9,  
    textAlign: 'left',
    color: textColor,
    fontSize: 12,

  },
  globe : {
    flex: 1,
    marginLeft: 15,
    width: globeDiameter, 
    height: globeDiameter, 
  }
});
module.exports = FeedItem;