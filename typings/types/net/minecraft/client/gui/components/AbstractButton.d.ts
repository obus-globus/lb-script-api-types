import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { ActiveTextCollector } from '../../../../../net/minecraft/client/gui/ActiveTextCollector.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { AbstractWidget$WithInactiveMessage } from '../../../../../net/minecraft/client/gui/components/AbstractWidget$WithInactiveMessage.d.ts'
import type { InputWithModifiers } from '../../../../../net/minecraft/client/input/InputWithModifiers.d.ts'
import type { KeyEvent } from '../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { MouseButtonEvent } from '../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { SoundManager } from '../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export abstract class AbstractButton extends AbstractWidget$WithInactiveMessage {
    static defaultInactiveMessage(paramactiveMessage: Component): Component;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(x: number, y: number, width: number, height: number, message: Component)
    readonly overrideRenderHighlightedSprite: () => boolean;
    extractContents(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    extractDefaultLabel(output: ActiveTextCollector): void;
    extractDefaultSprite(graphics: GuiGraphicsExtractor): void;
    extractWidgetRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    keyPressed(event: KeyEvent): boolean;
    onClick(event: MouseButtonEvent, doubleClick: boolean): void;
    onPress(input: InputWithModifiers): void;
    setOverrideRenderHighlightedSprite(overrideRenderHighlightedSprite: () => boolean): void;
}