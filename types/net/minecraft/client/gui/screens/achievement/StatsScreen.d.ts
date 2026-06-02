import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { TabManager } from '../../../../../../net/minecraft/client/gui/components/tabs/TabManager.d.ts'
import type { TabNavigationBar } from '../../../../../../net/minecraft/client/gui/components/tabs/TabNavigationBar.d.ts'
import type { HeaderAndFooterLayout } from '../../../../../../net/minecraft/client/gui/layouts/HeaderAndFooterLayout.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen } from '../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { KeyEvent } from '../../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { StatsCounter } from '../../../../../../net/minecraft/stats/StatsCounter.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class StatsScreen extends Screen {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: (Object | null)[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(lastScreen: Screen, stats: StatsCounter)
    // private isLoading: boolean;
    // private lastScreen: Screen;
    // private layout: HeaderAndFooterLayout;
    // private stats: StatsCounter;
    // private tabManager: TabManager;
    // private tabNavigationBar: TabNavigationBar;
    extractMenuBackground(graphics: GuiGraphicsExtractor): void;
    extractRenderState(graphics: GuiGraphicsExtractor, xm: number, ym: number, a: number): void;
    init(): void;
    keyPressed(event: KeyEvent): boolean;
    onClose(): void;
    onStatsUpdated(): void;
    repositionElements(): void;
    // private setTabActiveStateAndTooltip(index: number): void;
}