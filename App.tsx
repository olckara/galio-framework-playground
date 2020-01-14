import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Accordion, Block, Button, NavBar, Text } from 'galio-framework'

const data = [
  {
    title: "First Chapter", content: "Lorem ipsum dolor sit amet",
    icon: {
      name: 'keyboard-arrow-up',
      family: 'material',
      size: 16,
    }
  },
  { title: "2nd Chapter", content: "Lorem ipsum dolor sit amet" },
  { title: "3rd Chapter", content: "Lorem ipsum dolor sit amet" }
];

export default function App() {
  return (
    <View style={styles.container}>
      <Block>
        <NavBar title="Screen Title" />
      </Block>
      <Block>
        <Text p muted>Hi, I'm an app made using Galio Components</Text>
        <Button
          round
          onlyIcon
          icon="tags"
          iconFamily="antdesign"
          iconColor={'white'}
          iconSize={30}
          color="success"
          style={{ width: 40, height: 40 }}>
          Tebrikler
        </Button>
      </Block>
      <Block style={{ height: 200 }}>
        <Accordion dataArray={data} />
      </Block>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
