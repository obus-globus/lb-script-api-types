import type { BeaconScreen } from '../../../../../../net/minecraft/client/gui/screens/inventory/BeaconScreen.d.ts'
import type { BeaconScreen$BeaconSpriteScreenButton } from '../../../../../../net/minecraft/client/gui/screens/inventory/BeaconScreen$BeaconSpriteScreenButton.d.ts'
import type { InputWithModifiers } from '../../../../../../net/minecraft/client/input/InputWithModifiers.d.ts'
import type { SoundManager } from '../../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class BeaconScreen$BeaconCancelButton extends BeaconScreen$BeaconSpriteScreenButton {
    static defaultInactiveMessage(paramactiveMessage: Component): Component;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(null_: BeaconScreen, x: number, y: number)
    onPress(input: InputWithModifiers): void;
    updateStatus(levels: number): void;
}