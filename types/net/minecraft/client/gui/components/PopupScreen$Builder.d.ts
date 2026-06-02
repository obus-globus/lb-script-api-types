import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PopupScreen } from '../../../../../net/minecraft/client/gui/components/PopupScreen.d.ts'
import type { PopupScreen$ButtonOption } from '../../../../../net/minecraft/client/gui/components/PopupScreen$ButtonOption.d.ts'
import type { Screen } from '../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class PopupScreen$Builder extends Object {
    constructor(backgroundScreen: Screen, title: Component)
    // private backgroundScreen: Screen;
    // private buttons: PopupScreen$ButtonOption[];
    // private image: Identifier;
    // private messages: Component[];
    // private onClose: () => void;
    // private title: Component;
    // private width: number;
    addButton(message: Component, action: (param0: PopupScreen) => void): PopupScreen$Builder;
    addMessage(message: Component): PopupScreen$Builder;
    build(): PopupScreen;
    onClose(onClose: () => void): PopupScreen$Builder;
    setImage(image: Identifier): PopupScreen$Builder;
    setWidth(width: number): PopupScreen$Builder;
}