import type { Runnable } from '../../../../../../java/lang/Runnable.d.ts'
import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Tab } from '../../../../../../net/minecraft/client/gui/components/tabs/Tab.d.ts'
import type { TabManager } from '../../../../../../net/minecraft/client/gui/components/tabs/TabManager.d.ts'
import type { TabNavigationBar } from '../../../../../../net/minecraft/client/gui/components/tabs/TabNavigationBar.d.ts'
import type { LinearLayout } from '../../../../../../net/minecraft/client/gui/layouts/LinearLayout.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen } from '../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { FriendsOverlayTabButton } from '../../../../../../net/minecraft/client/gui/screens/friends/FriendsOverlayTabButton.d.ts'
import type { FriendsTab } from '../../../../../../net/minecraft/client/gui/screens/friends/FriendsTab.d.ts'
import type { PendingTab } from '../../../../../../net/minecraft/client/gui/screens/friends/PendingTab.d.ts'
import type { PlayerSocialManager } from '../../../../../../net/minecraft/client/gui/screens/social/PlayerSocialManager.d.ts'
import type { KeyEvent } from '../../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { MouseButtonEvent } from '../../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class FriendsOverlayScreen extends Screen {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static TAB_BUTTON_WIDTH: number;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: NarratableEntry[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(backgroundScreen: Screen)
    // private backgroundScreen: Screen;
    // private contentLayout: LinearLayout;
    // private friendListUpdateListener: () => void;
    // private friendsTab: FriendsTab;
    // private layout: LinearLayout;
    // private pendingFriendRemovals: UUID[];
    // private pendingTab: PendingTab;
    // private pendingTabButton: FriendsOverlayTabButton;
    // private tabManager: TabManager;
    // private tabNavigationBar: TabNavigationBar;
    added(): void;
    applyPresenceUpdate(): void;
    // private deselectTab(tab: Tab): void;
    extractBackground(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    getOverlayWidth(): number;
    init(): void;
    init(width: number, height: number): void;
    keyPressed(event: KeyEvent): boolean;
    mouseClicked(event: MouseButtonEvent, doubleClick: boolean): boolean;
    // private onActionFailed(ex: Throwable): void;
    onClose(): void;
    // private onFriendListUpdate(): void;
    // private populateLists(playerSocialManager: PlayerSocialManager): void;
    refreshLists(): void;
    removed(): void;
    repositionElements(): void;
    // private selectTab(tab: Tab): void;
    // private showError(message: Component): void;
    startFriendAction(): void;
    tick(): void;
}