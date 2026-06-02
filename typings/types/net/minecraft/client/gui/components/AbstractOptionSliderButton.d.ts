import type { Options } from '../../../../../net/minecraft/client/Options.d.ts'
import type { AbstractSliderButton } from '../../../../../net/minecraft/client/gui/components/AbstractSliderButton.d.ts'
import type { SoundManager } from '../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export abstract class AbstractOptionSliderButton extends AbstractSliderButton {
    static DEFAULT_HEIGHT: number;
    static defaultInactiveMessage(paramactiveMessage: Component): Component;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(options: Options, x: number, y: number, width: number, height: number, initialValue: number)
    // private options: Options;
}