import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AdvancementHolder } from '../../../../../../net/minecraft/advancements/AdvancementHolder.d.ts'
import type { AdvancementNode } from '../../../../../../net/minecraft/advancements/AdvancementNode.d.ts'
import type { AdvancementProgress } from '../../../../../../net/minecraft/advancements/AdvancementProgress.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { HeaderAndFooterLayout } from '../../../../../../net/minecraft/client/gui/layouts/HeaderAndFooterLayout.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen } from '../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { AdvancementTab } from '../../../../../../net/minecraft/client/gui/screens/advancements/AdvancementTab.d.ts'
import type { AdvancementWidget } from '../../../../../../net/minecraft/client/gui/screens/advancements/AdvancementWidget.d.ts'
import type { KeyEvent } from '../../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { MouseButtonEvent } from '../../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { ClientAdvancements } from '../../../../../../net/minecraft/client/multiplayer/ClientAdvancements.d.ts'
import type { ClientAdvancements$Listener } from '../../../../../../net/minecraft/client/multiplayer/ClientAdvancements$Listener.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class AdvancementsScreen extends Screen implements ClientAdvancements$Listener {
    static BACKGROUND_TILE_COUNT_X: number;
    static BACKGROUND_TILE_COUNT_Y: number;
    static BACKGROUND_TILE_HEIGHT: number;
    static BACKGROUND_TILE_WIDTH: number;
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static WINDOW_HEIGHT: number;
    static WINDOW_INSIDE_HEIGHT: number;
    static WINDOW_INSIDE_WIDTH: number;
    static WINDOW_WIDTH: number;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: (Object | null)[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(advancements: ClientAdvancements)
    constructor(advancements: ClientAdvancements, lastScreen: Screen)
    // private advancements: ClientAdvancements;
    // private isScrolling: boolean;
    // private lastScreen: Screen;
    // private layout: HeaderAndFooterLayout;
    // private selectedTab: AdvancementTab;
    // private tabs: Map<AdvancementHolder, AdvancementTab>;
    // private extractInside(graphics: GuiGraphicsExtractor, xo: number, yo: number): void;
    extractRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    // private extractTooltips(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, xo: number, yo: number): void;
    extractWindow(graphics: GuiGraphicsExtractor, xo: number, yo: number, mouseX: number, mouseY: number): void;
    getAdvancementWidget(node: AdvancementNode): AdvancementWidget;
    // private getTab(node: AdvancementNode): AdvancementTab;
    init(): void;
    init(width: number, height: number): void;
    keyPressed(event: KeyEvent): boolean;
    mouseClicked(event: MouseButtonEvent, doubleClick: boolean): boolean;
    mouseDragged(event: MouseButtonEvent, dx: number, dy: number): boolean;
    mouseReleased(event: MouseButtonEvent): boolean;
    mouseScrolled(x: number, y: number, scrollX: number, scrollY: number): boolean;
    onAddAdvancementRoot(root: AdvancementNode): void;
    onAddAdvancementTask(task: AdvancementNode): void;
    onAdvancementsCleared(): void;
    onClose(): void;
    onRemoveAdvancementRoot(root: AdvancementNode): void;
    onRemoveAdvancementTask(task: AdvancementNode): void;
    onSelectedTabChanged(selectedTab: AdvancementHolder): void;
    onUpdateAdvancementProgress(advancement: AdvancementNode, progress: AdvancementProgress): void;
    removed(): void;
    repositionElements(): void;
}