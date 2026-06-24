import type { BeaconScreen } from '../../../../../../net/minecraft/client/gui/screens/inventory/BeaconScreen.d.ts'
import type { BeaconScreen$BeaconPowerButton } from '../../../../../../net/minecraft/client/gui/screens/inventory/BeaconScreen$BeaconPowerButton.d.ts'
import type { SoundManager } from '../../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { MobEffect } from '../../../../../../net/minecraft/world/effect/MobEffect.d.ts'
export class BeaconScreen$BeaconUpgradePowerButton extends BeaconScreen$BeaconPowerButton {
    static defaultInactiveMessage(paramactiveMessage: Component): Component;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(null_: BeaconScreen, x: number, y: number, effect: Holder<MobEffect>)
    createEffectDescription(effect: Holder<MobEffect>): MutableComponent;
    updateStatus(levels: number): void;
}