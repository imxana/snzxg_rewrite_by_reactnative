/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

var order = require('./component/order/order_list');
var price = require('./component/price/price_list');
var upload = require('./component/upload/upload');
var usercenter = require('./component/usercenter/usercenter');
var Navigation = require('./component/common/navigation');

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  ScrollView,
  StatusBarIOS,
  Navigator
} from 'react-native';



class shit extends Component {
  constructor() {
    super();
    this.state = {selectedTab : 'order'}
  }
  setTab(tabId) { this.setState({selectedTab: tabId}) }
  render() {
    return (
      <TabBarIOS
        // tintColor="white"
        // barTintColor="darkslateblue">
        barTintColor="white">
        <TabBarIOS.Item
           title="我的订单"
           selected={this.state.selectedTab === 'order'}
           icon={require('image!camera')}
           onPress={() => {this.setTab('order')}}>
         <Navigation component={order}/>
       </TabBarIOS.Item>
       <TabBarIOS.Item
          title="提交订单"
          selected={this.state.selectedTab === 'upload'}
          icon={require('image!upload')}
          onPress={() => {this.setTab('upload')}}>
        <Navigation component={upload}/>
      </TabBarIOS.Item>
      <TabBarIOS.Item
         title="价格表"
         selected={this.state.selectedTab === 'price'}
         icon={require('image!fa-dollar (alias)')}
         onPress={() => {this.setTab('price')}}>
       <Navigation component={price}/>
     </TabBarIOS.Item>
     <TabBarIOS.Item
        title="个人中心"
        selected={this.state.selectedTab === 'usercenter'}
        icon={require('image!center')}
        onPress={() => {this.setTab('usercenter')}}>
      <Navigation component={usercenter}/>
    </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

/* hello world~
<View style={styles.container}>
  <Text style={styles.welcome}>
    Welcome to React Native!
  </Text>
  <Text style={styles.instructions}>
    To get started, edit index.ios.js
  </Text>
  <Text style={styles.instructions}>
    Press Cmd+R to reload,{'\n'}
    Cmd+D or shake for dev menu
  </Text>
</View>
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('shit', () => shit);
