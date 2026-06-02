import type { Button$Builder } from '../../../net/minecraft/client/gui/components/Button$Builder.d.ts'
import type { Button$OnPress } from '../../../net/minecraft/client/gui/components/Button$OnPress.d.ts'
import type { ImageButton } from '../../../net/minecraft/client/gui/components/ImageButton.d.ts'
import type { SoundManager } from '../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class RealmsMainScreen$CrossButton extends ImageButton {
    static BIG_WIDTH: number;
    static DEFAULT_HEIGHT: number;
    static DEFAULT_SPACING: number;
    static DEFAULT_WIDTH: number;
    static SMALL_WIDTH: number;
    static builder(parammessage: Component, paramonPress: Button$OnPress): Button$Builder;
    static defaultInactiveMessage(paramactiveMessage: Component): Component;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(onPress: Button$OnPress, tooltip: Component)
}