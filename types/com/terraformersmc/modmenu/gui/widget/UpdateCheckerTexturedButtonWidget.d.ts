import type { LegacyTexturedButtonWidget } from '../../../../../com/terraformersmc/modmenu/gui/widget/LegacyTexturedButtonWidget.d.ts'
import type { LegacyTexturedButtonWidget$Builder } from '../../../../../com/terraformersmc/modmenu/gui/widget/LegacyTexturedButtonWidget$Builder.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Button$Builder } from '../../../../../net/minecraft/client/gui/components/Button$Builder.d.ts'
import type { Button$OnPress } from '../../../../../net/minecraft/client/gui/components/Button$OnPress.d.ts'
import type { SoundManager } from '../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class UpdateCheckerTexturedButtonWidget extends LegacyTexturedButtonWidget {
    static BIG_WIDTH: number;
    static DEFAULT_HEIGHT: number;
    static DEFAULT_SPACING: number;
    static DEFAULT_WIDTH: number;
    static SMALL_WIDTH: number;
    static builder(parammessage: Component, paramonPress: Button$OnPress): Button$Builder;
    static defaultInactiveMessage(paramactiveMessage: Component): Component;
    static legacyTexturedBuilder(paramarg0: Component, paramarg1: Button$OnPress): LegacyTexturedButtonWidget$Builder;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: Identifier, arg8: number, arg9: number, arg10: Button$OnPress, arg11: Component)
    extractContents(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: number): void;
}