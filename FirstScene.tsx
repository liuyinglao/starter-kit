

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
    ViroImage,
} from '@viro-community/react-viro';

const FirstScene = () => {
    const handleClick = () => {
        console.log('clicked');
    }
    return (<ViroScene onClick={handleClick} >
        <ViroText
            text="Hello World"
            // textAlign="left"
            // textAlignVertical="top"
            // textLineBreakMode="justify"
            // textClipMode="clipToBounds"
            color="#ff0000"
            width={2}
            height={2}
            style={{
                fontFamily: "Arial",
                fontSize: 20,
                fontStyle: "italic",
                color: "#0000FF",
            }}
            position={[0, 0, -5]}
        />
    </ViroScene>)
}

export { FirstScene };
