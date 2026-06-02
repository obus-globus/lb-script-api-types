import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { AbstractWidget$WithInactiveMessage } from '../../../../../net/minecraft/client/gui/components/AbstractWidget$WithInactiveMessage.d.ts'
import type { NarrationElementOutput } from '../../../../../net/minecraft/client/gui/narration/NarrationElementOutput.d.ts'
import type { KeyEvent } from '../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { MouseButtonEvent } from '../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { SoundManager } from '../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export abstract class AbstractSliderButton extends AbstractWidget$WithInactiveMessage {
    static DEFAULT_HEIGHT: number;
    static defaultInactiveMessage(paramactiveMessage: Component): Component;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(x: number, y: number, width: number, height: number, message: Component, initialValue: number)
    // private canChangeValue: boolean;
    // private dragging: boolean;
    // private value: number;
    applyValue(): void;
    createNarrationMessage(): MutableComponent;
    extractWidgetRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    // private getHandleSprite(): Identifier;
    // private getSprite(): Identifier;
    handleCursor(graphics: GuiGraphicsExtractor): void;
    keyPressed(event: KeyEvent): boolean;
    onClick(event: MouseButtonEvent, doubleClick: boolean): void;
    onDrag(event: MouseButtonEvent, dx: number, dy: number): void;
    onRelease(event: MouseButtonEvent): void;
    playDownSound(soundManager: SoundManager): void;
    setFocused(focused: boolean): void;
    setValue(newValue: number): void;
    // private setValueFromMouse(event: MouseButtonEvent): void;
    updateMessage(): void;
    updateWidgetNarration(output: NarrationElementOutput): void;
}