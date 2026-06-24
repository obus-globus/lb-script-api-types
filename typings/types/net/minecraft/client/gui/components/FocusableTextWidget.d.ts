import type { Font } from '../../../../../net/minecraft/client/gui/Font.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { FocusableTextWidget$BackgroundFill } from '../../../../../net/minecraft/client/gui/components/FocusableTextWidget$BackgroundFill.d.ts'
import type { FocusableTextWidget$Builder } from '../../../../../net/minecraft/client/gui/components/FocusableTextWidget$Builder.d.ts'
import type { MultiLineTextWidget } from '../../../../../net/minecraft/client/gui/components/MultiLineTextWidget.d.ts'
import type { NarrationElementOutput } from '../../../../../net/minecraft/client/gui/narration/NarrationElementOutput.d.ts'
import type { KeyEvent } from '../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { SoundManager } from '../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class FocusableTextWidget extends MultiLineTextWidget {
    static DEFAULT_PADDING: number;
    static builder(parammessage: Component, paramfont: Font): FocusableTextWidget$Builder;
    static builder(parammessage: Component, paramfont: Font, parampadding: number): FocusableTextWidget$Builder;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    private constructor(message: Component, font: Font, padding: number, maxWidth: number, backgroundFill: FocusableTextWidget$BackgroundFill, alwaysShowBorder: boolean)
    // private alwaysShowBorder: boolean;
    // private backgroundFill: FocusableTextWidget$BackgroundFill;
    // private focusedUsageNarration: Component;
    // private hoveredUsageNarration: Component;
    // private maxWidth: number;
    readonly narrateMessage: boolean;
    readonly padding: number;
    extractWidgetRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    getHeight(): number;
    getPadding(): number;
    getTextX(): number;
    getTextY(): number;
    getWidth(): number;
    keyPressed(event: KeyEvent): boolean;
    playDownSound(soundManager: SoundManager): void;
    setMaxWidth(maxWidth: number): MultiLineTextWidget;
    setMessage(message: Component): void;
    setNarrateMessage(narrateMessage: boolean): void;
    setUsageNarration(focused: Component, hovered: Component): void;
    updateHeight(): void;
    updateWidgetNarration(output: NarrationElementOutput): void;
    updateWidth(): void;
}