import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PopupScreen } from '../../../../../net/minecraft/client/gui/components/PopupScreen.d.ts'
import type { Screen } from '../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class RealmsPopups extends Object {
    static customPopupScreen(parambackgroundScreen: Screen, parampopupTitle: Component, parampopupMessage: Component, paramonContinue: (param0: PopupScreen) => void): PopupScreen;
    static infoPopupScreen(parambackgroundScreen: Screen, parampopupMessage: Component, paramonContinue: (param0: PopupScreen) => void): PopupScreen;
    static warningAcknowledgePopupScreen(parambackgroundScreen: Screen, parampopupMessage: Component, paramonContinue: (param0: PopupScreen) => void): PopupScreen;
    static warningPopupScreen(parambackgroundScreen: Screen, parampopupMessage: Component, paramonContinue: (param0: PopupScreen) => void): PopupScreen;
    constructor()
}