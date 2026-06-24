import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Button$Builder } from '../../../../../net/minecraft/client/gui/components/Button$Builder.d.ts'
import type { Button$CreateNarration } from '../../../../../net/minecraft/client/gui/components/Button$CreateNarration.d.ts'
import type { Button$OnPress } from '../../../../../net/minecraft/client/gui/components/Button$OnPress.d.ts'
import type { SpriteIconButton$Builder } from '../../../../../net/minecraft/client/gui/components/SpriteIconButton$Builder.d.ts'
import type { SpriteIconButton$CenteredIcon } from '../../../../../net/minecraft/client/gui/components/SpriteIconButton$CenteredIcon.d.ts'
import type { WidgetSprites } from '../../../../../net/minecraft/client/gui/components/WidgetSprites.d.ts'
import type { SoundManager } from '../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class SmallModMenuButtonWidget extends SpriteIconButton$CenteredIcon {
    static BIG_WIDTH: number;
    static DEFAULT_HEIGHT: number;
    static DEFAULT_SPACING: number;
    static DEFAULT_WIDTH: number;
    static MODS_SPRITE_DISABLED: Identifier;
    static MODS_SPRITE_ENABLED: Identifier;
    static MODS_SPRITE_FOCUSED: Identifier;
    static SMALL_WIDTH: number;
    static builder(parammessage: Component, paramonPress: Button$OnPress): Button$Builder;
    static builder(parammessage: Component, paramonPress: Button$OnPress, paramiconOnly: boolean): SpriteIconButton$Builder;
    static defaultInactiveMessage(paramactiveMessage: Component): Component;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Component, arg5: number, arg6: number, arg7: number, arg8: number, arg9: WidgetSprites, arg10: Button$OnPress, arg11: Component, arg12: Button$CreateNarration, arg13: boolean)
    extractContents(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: number): void;
}