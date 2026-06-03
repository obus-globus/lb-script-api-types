import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { AbstractContainerWidget } from '../../../../../net/minecraft/client/gui/components/AbstractContainerWidget.d.ts'
import type { AbstractScrollArea$ScrollbarSettings } from '../../../../../net/minecraft/client/gui/components/AbstractScrollArea$ScrollbarSettings.d.ts'
import type { AbstractSelectionList$Entry } from '../../../../../net/minecraft/client/gui/components/AbstractSelectionList$Entry.d.ts'
import type { GuiEventListener } from '../../../../../net/minecraft/client/gui/components/events/GuiEventListener.d.ts'
import type { HeaderAndFooterLayout } from '../../../../../net/minecraft/client/gui/layouts/HeaderAndFooterLayout.d.ts'
import type { NarratableEntry$NarrationPriority } from '../../../../../net/minecraft/client/gui/narration/NarratableEntry$NarrationPriority.d.ts'
import type { NarrationElementOutput } from '../../../../../net/minecraft/client/gui/narration/NarrationElementOutput.d.ts'
import type { ScreenDirection } from '../../../../../net/minecraft/client/gui/navigation/ScreenDirection.d.ts'
import type { SoundManager } from '../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export abstract class AbstractSelectionList<E extends AbstractSelectionList$Entry<E>> extends AbstractContainerWidget {
    static SCROLLBAR_WIDTH: number;
    static defaultSettings(paramscrollRate: number): AbstractScrollArea$ScrollbarSettings;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(minecraft: Minecraft, width: number, height: number, y: number, defaultEntryHeight: number)
    // private centerListVertically: boolean;
    // private children: E[];
    // private defaultEntryHeight: number;
    readonly hovered: E;
    // private minecraft: Minecraft;
    readonly selected: E;
    addEntry(entry: E): number;
    addEntry(entry: E, height: number): number;
    addEntryToTop(entry: E): void;
    addEntryToTop(entry: E, height: number): void;
    // private bindEntryToSelf(entry: AbstractSelectionList$Entry<E>): void;
    centerScrollOn(entry: E): void;
    children(): E[];
    clearEntries(): void;
    clearEntriesExcept(exception: E): void;
    contentHeight(): number;
    enableScissor(graphics: GuiGraphicsExtractor): void;
    entriesCanBeSelected(): boolean;
    extractItem(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number, entry: E): void;
    extractListBackground(graphics: GuiGraphicsExtractor): void;
    extractListItems(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    extractListSeparators(graphics: GuiGraphicsExtractor): void;
    extractSelection(graphics: GuiGraphicsExtractor, entry: E, outlineColor: number): void;
    extractWidgetRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    getChildAt(x: number, y: number): Optional<GuiEventListener>;
    getEntryAtPosition(posX: number, posY: number): E;
    // private getFirstEntryY(): number;
    getFocused(): E;
    getHovered(): E;
    getItemCount(): number;
    getNextY(): number;
    getRowBottom(row: number): number;
    getRowLeft(): number;
    getRowRight(): number;
    getRowTop(row: number): number;
    getRowWidth(): number;
    getSelected(): E;
    narrateListElementPosition(output: NarrationElementOutput, element: E): void;
    narrationPriority(): NarratableEntry$NarrationPriority;
    nextEntry(dir: ScreenDirection): E;
    nextEntry(dir: ScreenDirection, canSelect: (param0: E) => kotlin.Boolean): E;
    nextEntry(dir: ScreenDirection, canSelect: (param0: E) => kotlin.Boolean, startEntry: E): E;
    removeEntries(entries: E[]): void;
    removeEntry(entry: E): void;
    removeEntryFromTop(entry: E): void;
    replaceEntries(newChildren: E[]): void;
    // private repositionEntries(): void;
    // private scroll(amount: number): void;
    scrollBarX(): number;
    scrollToEntry(entry: E): void;
    setFocused(focused: boolean): void;
    setFocused(focused: GuiEventListener): void;
    setScrollAmount(scrollAmount: number): void;
    setSelected(selected: E): void;
    sort(comparator: (param0: E) => kotlin.Boolean): void;
    swap(firstIndex: number, secondIndex: number): void;
    updateSize(width: number, layout: HeaderAndFooterLayout): void;
    updateSizeAndPosition(width: number, height: number, y: number): void;
    updateSizeAndPosition(width: number, height: number, x: number, y: number): void;
}