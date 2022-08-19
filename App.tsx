import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  ViroARScene,
  ViroText,
  ViroTrackingStateConstants as ViroConstants,
  ViroARSceneNavigator,
  ViroScene,
  ViroNode,
  ViroVRSceneNavigator,
  ViroTrackingState,
  ViroTrackingReason,
} from '@viro-community/react-viro';

import {
  torch
} from 'react-native-pytorch-core';

const HelloWorldSceneAR = () => {
  const [text, setText] = useState('Initializing AR...');
  const t = torch.tensor([1,2,3]);
  console.log(t.data().toString());


  function onInitialized(state: ViroTrackingState, reason: ViroTrackingReason): void {
    console.log('guncelleme', state, reason);
    if (state === ViroConstants.TRACKING_NORMAL) {
      setText("Hello Tensor" + t.data().toString() + "!!");
    } else {
      // Handle loss of tracking
    }
  }
  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      <ViroText
        text={text}
        scale={[0.5, 0.5, 0.5]}
        position={[0, 0, -1]}
        style={styles.helloWorldTextStyle}
      />
    </ViroARScene>
  );
};

export default () => {

  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: HelloWorldSceneAR,
      }}
      style={styles.f1}
    />
  );
};

var styles = StyleSheet.create({
  f1: {flex: 1},
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
