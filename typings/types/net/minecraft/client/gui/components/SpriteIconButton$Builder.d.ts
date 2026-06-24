import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Button$CreateNarration } from '../../../../../net/minecraft/client/gui/components/Button$CreateNarration.d.ts'
import type { Button$OnPress } from '../../../../../net/minecraft/client/gui/components/Button$OnPress.d.ts'
import type { SpriteIconButton } from '../../../../../net/minecraft/client/gui/components/SpriteIconButton.d.ts'
import type { WidgetSprites } from '../../../../../net/minecraft/client/gui/components/WidgetSprites.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class SpriteIconButton$Builder extends Object {
    private constructor(message: Component, onPress: Button$OnPress, iconOnly: boolean)
    // private height: number;
    // private iconOnly: boolean;
    // private message: Component;
    // private narration: Button$CreateNarration;
    // private onPress: Button$OnPress;
    // private sprite: WidgetSprites;
    // private spriteHeight: number;
    // private spriteOffsetX: number;
    // private spriteOffsetY: number;
    // private spriteWidth: number;
    // private switchToLoadingAfterPress: boolean;
    // private tooltip: Component;
    // private width: number;
    build(): SpriteIconButton;
    narration(narration: Button$CreateNarration): SpriteIconButton$Builder;
    size(width: number, height: number): SpriteIconButton$Builder;
    sprite(sprite: WidgetSprites, spriteWidth: number, spriteHeight: number): SpriteIconButton$Builder;
    sprite(sprite: Identifier, spriteWidth: number, spriteHeight: number): SpriteIconButton$Builder;
    spriteOffset(spriteOffsetX: number, spriteOffsetY: number): SpriteIconButton$Builder;
    switchToLoadingAfterPress(): SpriteIconButton$Builder;
    tooltip(tooltip: Component): SpriteIconButton$Builder;
    width(width: number): SpriteIconButton$Builder;
    withTootip(): SpriteIconButton$Builder;
}