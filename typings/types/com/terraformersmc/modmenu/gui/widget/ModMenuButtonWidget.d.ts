import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Button$Builder } from '../../../../../net/minecraft/client/gui/components/Button$Builder.d.ts'
import type { Button$OnPress } from '../../../../../net/minecraft/client/gui/components/Button$OnPress.d.ts'
import type { Button$Plain } from '../../../../../net/minecraft/client/gui/components/Button$Plain.d.ts'
import type { Screen } from '../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { SoundManager } from '../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class ModMenuButtonWidget extends Button$Plain {
    static BIG_WIDTH: number;
    static DEFAULT_HEIGHT: number;
    static DEFAULT_SPACING: number;
    static DEFAULT_WIDTH: number;
    static SMALL_WIDTH: number;
    static builder(parammessage: Component, paramonPress: Button$OnPress): Button$Builder;
    static defaultInactiveMessage(paramactiveMessage: Component): Component;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Component, arg5: Screen)
    extractContents(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: number): void;
}