'use strict';
var React = require('react-native');

var {
  
} = React;

var apiKey = 'kJVkitxBOpZeSt9wwkkc1u4pjDj6FID8';
var trendingURL = 'https://www.kimonolabs.com/api/4npxz2z8';
var recentURL = 'https://www.kimonolabs.com/api/2nn1qwje';
var bestURL = 'https://www.kimonolabs.com/api/9vg11a66';

var FeedDataService = {

	getFeedData : function(feedType){

		var URL = '';
		switch(feedType) {
		  case 'Trending':
		      URL = trendingURL;
		      break;
		  case 'Recent':
		      URL = recentURL;
		      break;
		  case 'Best':
		      URL = bestURL;
		      break;
		}

		var promise = new Promise(function(resolve, reject) {

		  fetch(URL+'?apikey='+apiKey)
		  .then((response) => response.json())
		  .then((responseData) => {
		     if (responseData) {
			    resolve(responseData);
			  }
			  else {
			    reject(Error("Error 1001 : Issue loading feed from API."));
			  }
		  }).done();
		});

		return promise;
	}

};

module.exports = FeedDataService;