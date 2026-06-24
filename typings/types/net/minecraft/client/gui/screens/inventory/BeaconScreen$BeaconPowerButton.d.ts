import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { BeaconScreen } from '../../../../../../net/minecraft/client/gui/screens/inventory/BeaconScreen.d.ts'
import type { BeaconScreen$BeaconScreenButton } from '../../../../../../net/minecraft/client/gui/screens/inventory/BeaconScreen$BeaconScreenButton.d.ts'
import type { InputWithModifiers } from '../../../../../../net/minecraft/client/input/InputWithModifiers.d.ts'
import type { SoundManager } from '../../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { MobEffect } from '../../../../../../net/minecraft/world/effect/MobEffect.d.ts'
export class BeaconScreen$BeaconPowerButton extends BeaconScreen$BeaconScreenButton {
    static defaultInactiveMessage(paramactiveMessage: Component): Component;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(null_: BeaconScreen, x: number, y: number, effect: Holder<MobEffect>, isPrimary: boolean, tier: number)
    // private effect: Holder<MobEffect>;
    // private isPrimary: boolean;
    // private sprite: Identifier;
    // private tier: number;
    createEffectDescription(effect: Holder<MobEffect>): MutableComponent;
    createNarrationMessage(): MutableComponent;
    extractIcon(graphics: GuiGraphicsExtractor): void;
    onPress(input: InputWithModifiers): void;
    setEffect(effect: Holder<MobEffect>): void;
    updateStatus(levels: number): void;
}