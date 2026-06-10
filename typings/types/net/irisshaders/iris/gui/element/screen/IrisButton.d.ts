import type { FloatSupplier } from '../../../../../../net/irisshaders/iris/gl/uniform/FloatSupplier.d.ts'
import type { IrisButton$Builder } from '../../../../../../net/irisshaders/iris/gui/element/screen/IrisButton$Builder.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Button } from '../../../../../../net/minecraft/client/gui/components/Button.d.ts'
import type { Button$Builder } from '../../../../../../net/minecraft/client/gui/components/Button$Builder.d.ts'
import type { Button$CreateNarration } from '../../../../../../net/minecraft/client/gui/components/Button$CreateNarration.d.ts'
import type { Button$OnPress } from '../../../../../../net/minecraft/client/gui/components/Button$OnPress.d.ts'
import type { SoundManager } from '../../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class IrisButton extends Button {
    static BIG_WIDTH: number;
    static DEFAULT_HEIGHT: number;
    static DEFAULT_SPACING: number;
    static DEFAULT_WIDTH: number;
    static SMALL_WIDTH: number;
    static builder(parammessage: Component, paramonPress: Button$OnPress): Button$Builder;
    static defaultInactiveMessage(paramactiveMessage: Component): Component;
    static iris$builder(paramarg0: Component, paramarg1: Button$OnPress, paramarg2: () => number): IrisButton$Builder;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Component, arg5: Button$OnPress, arg6: Button$CreateNarration, arg7: () => number)
    // private alphaSupplier: () => number;
    extractContents(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: number): void;
    getAlpha(): number;
}