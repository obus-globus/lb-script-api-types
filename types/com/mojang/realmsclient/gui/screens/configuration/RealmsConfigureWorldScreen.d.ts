import type { RealmsMainScreen } from '../../../../../../com/mojang/realmsclient/RealmsMainScreen.d.ts'
import type { PreferredRegionsDto } from '../../../../../../com/mojang/realmsclient/dto/PreferredRegionsDto.d.ts'
import type { RealmsRegion } from '../../../../../../com/mojang/realmsclient/dto/RealmsRegion.d.ts'
import type { RealmsServer } from '../../../../../../com/mojang/realmsclient/dto/RealmsServer.d.ts'
import type { RealmsSlot } from '../../../../../../com/mojang/realmsclient/dto/RealmsSlot.d.ts'
import type { RegionSelectionPreference } from '../../../../../../com/mojang/realmsclient/dto/RegionSelectionPreference.d.ts'
import type { ServiceQuality } from '../../../../../../com/mojang/realmsclient/dto/ServiceQuality.d.ts'
import type { RealmsServiceException } from '../../../../../../com/mojang/realmsclient/exception/RealmsServiceException.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Button } from '../../../../../../net/minecraft/client/gui/components/Button.d.ts'
import type { Tab } from '../../../../../../net/minecraft/client/gui/components/tabs/Tab.d.ts'
import type { TabManager } from '../../../../../../net/minecraft/client/gui/components/tabs/TabManager.d.ts'
import type { TabNavigationBar } from '../../../../../../net/minecraft/client/gui/components/tabs/TabNavigationBar.d.ts'
import type { HeaderAndFooterLayout } from '../../../../../../net/minecraft/client/gui/layouts/HeaderAndFooterLayout.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen } from '../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { KeyEvent } from '../../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { RealmsScreen } from '../../../../../../net/minecraft/realms/RealmsScreen.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class RealmsConfigureWorldScreen extends RealmsScreen {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: (Object | null)[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(lastScreen: RealmsMainScreen, serverId: number)
    constructor(lastScreen: RealmsMainScreen, serverId: number, serverData: RealmsServer, regions: PreferredRegionsDto)
    readonly lastScreen: RealmsMainScreen;
    // private layout: HeaderAndFooterLayout;
    // private playButton: Button;
    // private regionServiceQuality: { [key in RealmsRegion]: ServiceQuality };
    // private regions: PreferredRegionsDto;
    // private serverData: RealmsServer;
    // private serverId: number;
    // private stateChanged: boolean;
    // private tabManager: TabManager;
    // private tabNavigationBar: TabNavigationBar;
    closeTheWorld(): void;
    createErrorScreen(exception: RealmsServiceException): Screen;
    extractMenuBackground(graphics: GuiGraphicsExtractor): void;
    extractRenderState(graphics: GuiGraphicsExtractor, xm: number, ym: number, a: number): void;
    fetchRegionData(): void;
    fetchServerData(realmId: number): void;
    getContentHeight(): number;
    getHeaderHeight(): number;
    getLastScreen(): Screen;
    getNewScreen(): RealmsConfigureWorldScreen;
    getNewScreenWithKnownData(serverData: RealmsServer): RealmsConfigureWorldScreen;
    init(): void;
    invitePlayer(serverId: number, name: string): boolean;
    keyPressed(event: KeyEvent): boolean;
    onClose(): void;
    // private onRealmsDataFetched(): void;
    // private onTabDeselected(tab: Tab): void;
    // private onTabSelected(tab: Tab): void;
    openTheWorld(join: boolean): void;
    repositionElements(): void;
    saveSettings(name: string, desc: string, preference: RegionSelectionPreference, region: RealmsRegion): void;
    saveSlotSettings(slot: RealmsSlot): void;
    stateChanged(): void;
    // private updateButtonStates(): void;
}