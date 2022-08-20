/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
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

import {FirstScene} from './FirstScene'
import {HelloWorldScene} from './HelloWorldVR'

const HelloWorldSceneAR = () => {
  const [text, setText] = useState('Initializing AR...');
  const t = torch.tensor([1, 2, 3]);
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
    // <ViroARSceneNavigator
    //   autofocus={true}
    //   initialScene={{
    //     scene: HelloWorldSceneAR,
    //   }}
    //   style={styles.f1}
    // />
    <ViroVRSceneNavigator style={styles.f1} initialScene={{ scene: FirstScene }} />
  );
};

var styles = StyleSheet.create({
  f1: { flex: 1 },
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
