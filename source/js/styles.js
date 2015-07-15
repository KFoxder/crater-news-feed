'use strict'

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
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
});