import type { AbstractSliderButton } from '../../../../../../net/minecraft/client/gui/components/AbstractSliderButton.d.ts'
import type { SoundManager } from '../../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class RealmsSlotOptionsScreen$SettingsSlider extends AbstractSliderButton {
    static DEFAULT_HEIGHT: number;
    static defaultInactiveMessage(paramactiveMessage: Component): Component;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(null_: RealmsSlotOptionsScreen$SettingsSlider, x: number, y: number, width: number, currentValue: number, minValue: number, maxValue: number)
    // private maxValue: number;
    // private minValue: number;
    applyValue(): void;
    updateMessage(): void;
}