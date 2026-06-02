import type { GuiGraphicsExtractor } from '../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Button$Builder } from '../../../net/minecraft/client/gui/components/Button$Builder.d.ts'
import type { Button$OnPress } from '../../../net/minecraft/client/gui/components/Button$OnPress.d.ts'
import type { SpriteIconButton$Builder } from '../../../net/minecraft/client/gui/components/SpriteIconButton$Builder.d.ts'
import type { SpriteIconButton$CenteredIcon } from '../../../net/minecraft/client/gui/components/SpriteIconButton$CenteredIcon.d.ts'
import type { SoundManager } from '../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { Identifier } from '../../../net/minecraft/resources/Identifier.d.ts'
export class RealmsMainScreen$NotificationButton extends SpriteIconButton$CenteredIcon {
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
    constructor(title: Component, texture: Identifier, onPress: Button$OnPress, tooltip: Component)
    readonly notificationCount: number;
    extractContents(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    // private extractNotificationCounter(graphics: GuiGraphicsExtractor): void;
    // private notificationCount(): number;
    setNotificationCount(notificationCount: number): void;
}