import type { ComponentPath } from '../../../../../../net/minecraft/client/gui/ComponentPath.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { AbstractContainerWidget } from '../../../../../../net/minecraft/client/gui/components/AbstractContainerWidget.d.ts'
import type { AbstractScrollArea$ScrollbarSettings } from '../../../../../../net/minecraft/client/gui/components/AbstractScrollArea$ScrollbarSettings.d.ts'
import type { Renderable } from '../../../../../../net/minecraft/client/gui/components/Renderable.d.ts'
import type { TabButton } from '../../../../../../net/minecraft/client/gui/components/TabButton.d.ts'
import type { Tooltip } from '../../../../../../net/minecraft/client/gui/components/Tooltip.d.ts'
import type { GuiEventListener } from '../../../../../../net/minecraft/client/gui/components/events/GuiEventListener.d.ts'
import type { Tab } from '../../../../../../net/minecraft/client/gui/components/tabs/Tab.d.ts'
import type { TabManager } from '../../../../../../net/minecraft/client/gui/components/tabs/TabManager.d.ts'
import type { TabNavigationBar$Builder } from '../../../../../../net/minecraft/client/gui/components/tabs/TabNavigationBar$Builder.d.ts'
import type { FrameLayout } from '../../../../../../net/minecraft/client/gui/layouts/FrameLayout.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { NarratableEntry$NarrationPriority } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry$NarrationPriority.d.ts'
import type { NarrationElementOutput } from '../../../../../../net/minecraft/client/gui/narration/NarrationElementOutput.d.ts'
import type { FocusNavigationEvent } from '../../../../../../net/minecraft/client/gui/navigation/FocusNavigationEvent.d.ts'
import type { ScreenRectangle } from '../../../../../../net/minecraft/client/gui/navigation/ScreenRectangle.d.ts'
import type { KeyEvent } from '../../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { SoundManager } from '../../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class TabNavigationBar extends AbstractContainerWidget implements Renderable, NarratableEntry {
    static SCROLLBAR_WIDTH: number;
    static builder(paramtabManager: TabManager, paramx: number, paramy: number, paramwidth: number, paramheight: number): TabNavigationBar$Builder;
    static defaultSettings(paramscrollRate: number): AbstractScrollArea$ScrollbarSettings;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(x: number, y: number, width: number, height: number, tabManager: TabManager, tabButtons: TabButton[], tabs: Tab[])
    // private layout: FrameLayout;
    // private tabButtons: TabButton[];
    // private tabManager: TabManager;
    readonly tabs: Tab[];
    arrangeElements(width: number): void;
    children(): GuiEventListener[];
    contentHeight(): number;
    // private currentTabButton(): TabButton;
    // private currentTabIndex(): number;
    extractWidgetRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    getNarratables(): NarratableEntry[];
    // private getNextTabIndex(currentTab: number, event: KeyEvent): number;
    // private getNextTabIndex(event: KeyEvent): number;
    getRectangle(): ScreenRectangle;
    getTabs(): Tab[];
    isActive(): boolean;
    isMouseOver(mouseX: number, mouseY: number): boolean;
    keyPressed(event: KeyEvent): boolean;
    narrateListElementPosition(output: NarrationElementOutput, widget: TabButton): void;
    narrationPriority(): NarratableEntry$NarrationPriority;
    nextFocusPath(navigationEvent: FocusNavigationEvent): ComponentPath;
    selectTab(index: number, playSound: boolean): void;
    setFocused(focused: boolean): void;
    setFocused(focused: GuiEventListener): void;
    setTabActiveState(index: number, active: boolean): void;
    setTabTooltip(index: number, hint: Tooltip): void;
    updateWidgetNarration(output: NarrationElementOutput): void;
}