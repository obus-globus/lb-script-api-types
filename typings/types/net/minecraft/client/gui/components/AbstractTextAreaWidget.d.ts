import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { AbstractScrollArea } from '../../../../../net/minecraft/client/gui/components/AbstractScrollArea.d.ts'
import type { AbstractScrollArea$ScrollbarSettings } from '../../../../../net/minecraft/client/gui/components/AbstractScrollArea$ScrollbarSettings.d.ts'
import type { KeyEvent } from '../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { MouseButtonEvent } from '../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { SoundManager } from '../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export abstract class AbstractTextAreaWidget extends AbstractScrollArea {
    static DEFAULT_TOTAL_PADDING: number;
    static SCROLLBAR_WIDTH: number;
    static defaultSettings(paramscrollRate: number): AbstractScrollArea$ScrollbarSettings;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(x: number, y: number, width: number, height: number, narration: Component, scrollbarSettings: AbstractScrollArea$ScrollbarSettings)
    constructor(x: number, y: number, width: number, height: number, narration: Component, scrollbarSettings: AbstractScrollArea$ScrollbarSettings, showBackground: boolean, showDecorations: boolean)
    // private showBackground: boolean;
    // private showDecorations: boolean;
    contentHeight(): number;
    extractBackground(graphics: GuiGraphicsExtractor): void;
    extractBorder(graphics: GuiGraphicsExtractor, x: number, y: number, width: number, height: number): void;
    extractContents(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    extractDecorations(graphics: GuiGraphicsExtractor): void;
    extractWidgetRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    getInnerHeight(): number;
    getInnerLeft(): number;
    getInnerTop(): number;
    innerPadding(): number;
    isMouseOver(mouseX: number, mouseY: number): boolean;
    keyPressed(event: KeyEvent): boolean;
    mouseClicked(event: MouseButtonEvent, doubleClick: boolean): boolean;
    playDownSound(soundManager: SoundManager): void;
    scrollBarX(): number;
    totalInnerPadding(): number;
    withinContentAreaTopBottom(top: number, bottom: number): boolean;
}