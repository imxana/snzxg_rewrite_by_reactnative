/*!
 *
 * 封装Navigator
 * 所有的切换过场动画都是从底部往上；回退是从上往下
 * 这里需要注意是使用{...route.passProps}模仿NavigatorIOS的passProps
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

class navigation extends Component {
  render() {
    return(
      <Navigator
        initialRoute={{name: '', component: this.props.component, index:0}}
        configureScene={()=>{return Navigator.SceneConfigs.FloatFromBottom;}}
        renderScene={(route, navigator) => {
          const Component = route.component;
          return (
            <View style={{flex: 1}}>
              <Component navigator={navigator} route={route} {...route.passProps}/>
            </View>
          );
        }}/>
    );
  }
}

module.exports = navigation
