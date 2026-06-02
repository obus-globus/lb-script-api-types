import type { ComponentPath } from '../../../../../../net/minecraft/client/gui/ComponentPath.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Renderable } from '../../../../../../net/minecraft/client/gui/components/Renderable.d.ts'
import type { TabButton } from '../../../../../../net/minecraft/client/gui/components/TabButton.d.ts'
import type { Tooltip } from '../../../../../../net/minecraft/client/gui/components/Tooltip.d.ts'
import type { AbstractContainerEventHandler } from '../../../../../../net/minecraft/client/gui/components/events/AbstractContainerEventHandler.d.ts'
import type { GuiEventListener } from '../../../../../../net/minecraft/client/gui/components/events/GuiEventListener.d.ts'
import type { Tab } from '../../../../../../net/minecraft/client/gui/components/tabs/Tab.d.ts'
import type { TabManager } from '../../../../../../net/minecraft/client/gui/components/tabs/TabManager.d.ts'
import type { TabNavigationBar$Builder } from '../../../../../../net/minecraft/client/gui/components/tabs/TabNavigationBar$Builder.d.ts'
import type { LinearLayout } from '../../../../../../net/minecraft/client/gui/layouts/LinearLayout.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { NarratableEntry$NarrationPriority } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry$NarrationPriority.d.ts'
import type { NarrationElementOutput } from '../../../../../../net/minecraft/client/gui/narration/NarrationElementOutput.d.ts'
import type { FocusNavigationEvent } from '../../../../../../net/minecraft/client/gui/navigation/FocusNavigationEvent.d.ts'
import type { ScreenRectangle } from '../../../../../../net/minecraft/client/gui/navigation/ScreenRectangle.d.ts'
import type { KeyEvent } from '../../../../../../net/minecraft/client/input/KeyEvent.d.ts'
export class TabNavigationBar extends AbstractContainerEventHandler implements Renderable, NarratableEntry {
    static builder(paramtabManager: TabManager, paramwidth: number): TabNavigationBar$Builder;
    private constructor(width: number, tabManager: TabManager, tabs: Tab[])
    // private layout: LinearLayout;
    // private tabButtons: TabButton[];
    // private tabManager: TabManager;
    readonly tabs: Tab[];
    // private width: number;
    arrangeElements(): void;
    children(): GuiEventListener[];
    // private currentTabButton(): TabButton;
    // private currentTabIndex(): number;
    extractRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    getNarratables(): E[];
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
    updateNarration(output: NarrationElementOutput): void;
    updateWidth(width: number): void;
}