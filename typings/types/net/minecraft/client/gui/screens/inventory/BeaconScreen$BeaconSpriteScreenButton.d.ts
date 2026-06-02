import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { BeaconScreen$BeaconScreenButton } from '../../../../../../net/minecraft/client/gui/screens/inventory/BeaconScreen$BeaconScreenButton.d.ts'
import type { SoundManager } from '../../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export abstract class BeaconScreen$BeaconSpriteScreenButton extends BeaconScreen$BeaconScreenButton {
    static defaultInactiveMessage(paramactiveMessage: Component): Component;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(x: number, y: number, sprite: Identifier, label: Component)
    // private sprite: Identifier;
    extractIcon(graphics: GuiGraphicsExtractor): void;
}