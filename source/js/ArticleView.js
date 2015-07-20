'use strict';

var React = require('react-native');

var {
  StyleSheet,
  WebView
} = React;

var HEADER = '#3b5998';
var BGWASH = 'rgba(255,255,255,0.8)';
var DISABLED_WASH = 'rgba(255,255,255,0.25)';

var TEXT_INPUT_REF = 'urlInput';
var WEBVIEW_REF = 'webview';
var DEFAULT_URL = 'https://facebook.github.io/react-native/docs/navigatorios.html#content';

var ArticleView = React.createClass({

	getInitialState: function() {
	    return {
	      url: DEFAULT_URL,
	      status: 'No Page Loaded',
	      backButtonEnabled: false,
	      forwardButtonEnabled: false,
	      loading: true,
	      scalesPageToFit: true,
	    };
	},

	render: function() {

		var URL = this.props.route.url;
		return (
			<WebView
		          ref={WEBVIEW_REF}
		          automaticallyAdjustContentInsets={false}
		          style={styles.webView}
		          url={URL}
		          javaScriptEnabledAndroid={true}
		          onNavigationStateChange={this.onNavigationStateChange}
		          startInLoadingState={true}
		          scalesPageToFit={this.state.scalesPageToFit} />

		)
	}

});

var styles = StyleSheet.create({
  webView: {
    backgroundColor: BGWASH,
  },
  spinner: {
    width: 30,
    marginRight: 6,
  },
});

module.exports = ArticleView;