import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

const MainHeader = props => {
  return (
    <View style={styles.viewStyle}>
      <Header
        placement="left"
        leftComponent={{ icon: 'menu', color: '#fff', size: 20 }}
        centerComponent={{ text: props.headerText, style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff', size: 20 }}
        containerStyle={styles.containerStyle}
        ViewComponent={LinearGradient}
        linearGradientProps={{
          colors: ['#3700b3', '#6200ee'],
          start: { x: 0.5, y: 0 },
          end: { x: 0.5, y: 1 },
        }}
        barStyle="light-content"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    position: 'relative',
  },
  viewStyle: {
    flex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.9,
    shadowRadius: 10,
  },
});

export { MainHeader };
