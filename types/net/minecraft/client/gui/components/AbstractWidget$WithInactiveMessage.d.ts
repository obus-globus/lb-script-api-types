import type { AbstractWidget } from '../../../../../net/minecraft/client/gui/components/AbstractWidget.d.ts'
import type { SoundManager } from '../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export abstract class AbstractWidget$WithInactiveMessage extends AbstractWidget {
    static defaultInactiveMessage(paramactiveMessage: Component): Component;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(x: number, y: number, width: number, height: number, message: Component)
    // private inactiveMessage: Component;
    getMessage(): Component;
    setMessage(message: Component): void;
}