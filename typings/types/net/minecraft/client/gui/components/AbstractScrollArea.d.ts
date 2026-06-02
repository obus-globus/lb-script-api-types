import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { AbstractScrollArea$ScrollbarSettings } from '../../../../../net/minecraft/client/gui/components/AbstractScrollArea$ScrollbarSettings.d.ts'
import type { AbstractWidget } from '../../../../../net/minecraft/client/gui/components/AbstractWidget.d.ts'
import type { MouseButtonEvent } from '../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { SoundManager } from '../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export abstract class AbstractScrollArea extends AbstractWidget {
    static SCROLLBAR_WIDTH: number;
    static defaultSettings(paramscrollRate: number): AbstractScrollArea$ScrollbarSettings;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(x: number, y: number, width: number, height: number, message: Component, scrollbarSettings: AbstractScrollArea$ScrollbarSettings)
    readonly scrollAmount: number;
    // private scrollbarSettings: AbstractScrollArea$ScrollbarSettings;
    // private scrolling: boolean;
    contentHeight(): number;
    extractScrollbar(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number): void;
    isOverScrollbar(x: number, y: number): boolean;
    maxScrollAmount(): number;
    mouseDragged(event: MouseButtonEvent, dx: number, dy: number): boolean;
    mouseScrolled(mx: number, my: number, scrollX: number, scrollY: number): boolean;
    onRelease(event: MouseButtonEvent): void;
    refreshScrollAmount(): void;
    scrollAmount(): number;
    scrollBarX(): number;
    scrollBarY(): number;
    scrollRate(): number;
    scrollable(): boolean;
    scrollbarWidth(): number;
    scrollerHeight(): number;
    setScrollAmount(scrollAmount: number): void;
    updateScrolling(event: MouseButtonEvent): boolean;
}