import type { Font } from '../../../../../net/minecraft/client/gui/Font.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { AbstractScrollArea$ScrollbarSettings } from '../../../../../net/minecraft/client/gui/components/AbstractScrollArea$ScrollbarSettings.d.ts'
import type { AbstractTextAreaWidget } from '../../../../../net/minecraft/client/gui/components/AbstractTextAreaWidget.d.ts'
import type { MultiLineTextWidget } from '../../../../../net/minecraft/client/gui/components/MultiLineTextWidget.d.ts'
import type { NarrationElementOutput } from '../../../../../net/minecraft/client/gui/narration/NarrationElementOutput.d.ts'
import type { SoundManager } from '../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class FittingMultiLineTextWidget extends AbstractTextAreaWidget {
    static DEFAULT_TOTAL_PADDING: number;
    static SCROLLBAR_WIDTH: number;
    static defaultSettings(paramscrollRate: number): AbstractScrollArea$ScrollbarSettings;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(x: number, y: number, width: number, height: number, message: Component, font: Font)
    // private multilineWidget: MultiLineTextWidget;
    extractBackground(graphics: GuiGraphicsExtractor): void;
    extractContents(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    getInnerHeight(): number;
    minimizeHeight(): void;
    setMessage(message: Component): void;
    setWidth(width: number): void;
    showingScrollBar(): boolean;
    updateWidgetNarration(output: NarrationElementOutput): void;
}