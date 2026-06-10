import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { AbstractContainerWidget } from '../../../../../net/minecraft/client/gui/components/AbstractContainerWidget.d.ts'
import type { AbstractScrollArea$ScrollbarSettings } from '../../../../../net/minecraft/client/gui/components/AbstractScrollArea$ScrollbarSettings.d.ts'
import type { AbstractWidget } from '../../../../../net/minecraft/client/gui/components/AbstractWidget.d.ts'
import type { GuiEventListener } from '../../../../../net/minecraft/client/gui/components/events/GuiEventListener.d.ts'
import type { NarratableEntry } from '../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { NarrationElementOutput } from '../../../../../net/minecraft/client/gui/narration/NarrationElementOutput.d.ts'
import type { ScreenDirection } from '../../../../../net/minecraft/client/gui/navigation/ScreenDirection.d.ts'
import type { ScreenRectangle } from '../../../../../net/minecraft/client/gui/navigation/ScreenRectangle.d.ts'
import type { SoundManager } from '../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class ScrollableLayout$Container extends AbstractContainerWidget {
    static SCROLLBAR_WIDTH: number;
    static defaultSettings(paramscrollRate: number): AbstractScrollArea$ScrollbarSettings;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(null_: ScrollableLayout$Container, minecraft: Minecraft, width: number, height: number, scrollbarSettings: AbstractScrollArea$ScrollbarSettings)
    // private children: AbstractWidget[];
    // private minecraft: Minecraft;
    children(): GuiEventListener[];
    contentHeight(): number;
    extractWidgetRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    getBorderForArrowNavigation(opposite: ScreenDirection): ScreenRectangle;
    getNarratables(): NarratableEntry[];
    // private scrollbarReserve(): number;
    setFocused(focused: boolean): void;
    setFocused(focused: GuiEventListener): void;
    setScrollAmount(scrollAmount: number): void;
    setX(x: number): void;
    setY(y: number): void;
    updateWidgetNarration(output: NarrationElementOutput): void;
}