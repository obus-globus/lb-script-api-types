import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Button } from '../../../../../../net/minecraft/client/gui/components/Button.d.ts'
import type { EditBox } from '../../../../../../net/minecraft/client/gui/components/EditBox.d.ts'
import type { GuiEventListener } from '../../../../../../net/minecraft/client/gui/components/events/GuiEventListener.d.ts'
import type { HeaderAndFooterLayout } from '../../../../../../net/minecraft/client/gui/layouts/HeaderAndFooterLayout.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen } from '../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { SocialInteractionsPlayerList } from '../../../../../../net/minecraft/client/gui/screens/social/SocialInteractionsPlayerList.d.ts'
import type { SocialInteractionsScreen$Page } from '../../../../../../net/minecraft/client/gui/screens/social/SocialInteractionsScreen$Page.d.ts'
import type { KeyEvent } from '../../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { PlayerInfo } from '../../../../../../net/minecraft/client/multiplayer/PlayerInfo.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class SocialInteractionsScreen extends Screen {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static LIST_START: number;
    static MENU_BACKGROUND: Identifier;
    static SEARCH_START: number;
    static TITLE: Component;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: (Object | null)[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor()
    constructor(lastScreen: Screen)
    // private allButton: Button;
    // private blockedButton: Button;
    // private blockingHintButton: Button;
    // private hiddenButton: Button;
    // private lastScreen: Screen;
    // private lastSearch: string;
    // private layout: HeaderAndFooterLayout;
    // private page: SocialInteractionsScreen$Page;
    // private playerCount: number;
    // private searchBox: EditBox;
    // private serverLabel: Component;
    // private socialInteractionsPlayerList: SocialInteractionsPlayerList;
    added(): void;
    // private checkSearchStringUpdate(searchText: string): void;
    extractBackground(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    extractRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    getNarrationMessage(): Component;
    init(): void;
    init(width: number, height: number): void;
    isPauseScreen(): boolean;
    keyPressed(event: KeyEvent): boolean;
    // private listEnd(): number;
    // private marginX(): number;
    onAddPlayer(info: PlayerInfo): void;
    onClose(): void;
    onRemovePlayer(id: UUID): void;
    repositionElements(): void;
    setInitialFocus(): void;
    setInitialFocus(target: GuiEventListener): void;
    // private showPage(page: SocialInteractionsScreen$Page): void;
    // private updateServerLabel(minecraft: Minecraft): void;
    // private windowHeight(): number;
}