import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Button } from '../../../../../net/minecraft/client/gui/components/Button.d.ts'
import type { Button$Builder } from '../../../../../net/minecraft/client/gui/components/Button$Builder.d.ts'
import type { Button$CreateNarration } from '../../../../../net/minecraft/client/gui/components/Button$CreateNarration.d.ts'
import type { Button$OnPress } from '../../../../../net/minecraft/client/gui/components/Button$OnPress.d.ts'
import type { SpriteIconButton$Builder } from '../../../../../net/minecraft/client/gui/components/SpriteIconButton$Builder.d.ts'
import type { WidgetSprites } from '../../../../../net/minecraft/client/gui/components/WidgetSprites.d.ts'
import type { SoundManager } from '../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export abstract class SpriteIconButton extends Button {
    static BIG_WIDTH: number;
    static DEFAULT_HEIGHT: number;
    static DEFAULT_SPACING: number;
    static DEFAULT_WIDTH: number;
    static SMALL_WIDTH: number;
    static builder(parammessage: Component, paramonPress: Button$OnPress): Button$Builder;
    static builder(parammessage: Component, paramonPress: Button$OnPress, paramiconOnly: boolean): SpriteIconButton$Builder;
    static defaultInactiveMessage(paramactiveMessage: Component): Component;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    private constructor(width: number, height: number, message: Component, spriteWidth: number, spriteHeight: number, sprite: WidgetSprites, onPress: Button$OnPress, tooltip: Component, narration: Button$CreateNarration)
    // private sprite: WidgetSprites;
    // private spriteHeight: number;
    // private spriteWidth: number;
    extractSprite(graphics: GuiGraphicsExtractor, x: number, y: number): void;
}