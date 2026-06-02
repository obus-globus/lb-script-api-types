import type { RateLimiter } from '../../../com/google/common/util/concurrent/RateLimiter.d.ts'
import type { RealmsAvailability$Result } from '../../../com/mojang/realmsclient/RealmsAvailability$Result.d.ts'
import type { RealmsMainScreen$LayoutState } from '../../../com/mojang/realmsclient/RealmsMainScreen$LayoutState.d.ts'
import type { RealmsMainScreen$NotificationButton } from '../../../com/mojang/realmsclient/RealmsMainScreen$NotificationButton.d.ts'
import type { RealmsMainScreen$RealmSelectionList } from '../../../com/mojang/realmsclient/RealmsMainScreen$RealmSelectionList.d.ts'
import type { RealmsNotification } from '../../../com/mojang/realmsclient/dto/RealmsNotification.d.ts'
import type { RealmsServer } from '../../../com/mojang/realmsclient/dto/RealmsServer.d.ts'
import type { RealmsServerPlayerLists } from '../../../com/mojang/realmsclient/dto/RealmsServerPlayerLists.d.ts'
import type { RealmsDataFetcher } from '../../../com/mojang/realmsclient/gui/RealmsDataFetcher.d.ts'
import type { DataFetcher$Subscription } from '../../../com/mojang/realmsclient/gui/task/DataFetcher$Subscription.d.ts'
import type { UUID } from '../../../java/util/UUID.d.ts'
import type { CompletableFuture } from '../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Button } from '../../../net/minecraft/client/gui/components/Button.d.ts'
import type { HeaderAndFooterLayout } from '../../../net/minecraft/client/gui/layouts/HeaderAndFooterLayout.d.ts'
import type { Layout } from '../../../net/minecraft/client/gui/layouts/Layout.d.ts'
import type { LinearLayout } from '../../../net/minecraft/client/gui/layouts/LinearLayout.d.ts'
import type { NarratableEntry } from '../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen } from '../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Screen$NarratableSearchResult } from '../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { Component } from '../../../net/minecraft/network/chat/Component.d.ts'
import type { RealmsScreen } from '../../../net/minecraft/realms/RealmsScreen.d.ts'
import type { Identifier } from '../../../net/minecraft/resources/Identifier.d.ts'
import type { ItemStack } from '../../../net/minecraft/world/item/ItemStack.d.ts'
export class RealmsMainScreen extends RealmsScreen {
    static FOOTER_SEPARATOR: Identifier;
    static HARDCORE_MODE_SPRITE: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: (Object | null)[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getGameModeComponent(paramgameMode: number, paramhardcore: boolean): Component;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    static getVersionComponent(paramversion: string, paramisCompatible: boolean): Component;
    static getVersionComponent(paramversion: string, paramcolor: number): Component;
    static isSnapshot(): boolean;
    static play(paramserver: RealmsServer, paramcancelScreen: Screen): void;
    static play(paramserver: RealmsServer, paramcancelScreen: Screen, paramskipCompatibility: boolean): void;
    static refreshPendingInvites(): void;
    static refreshServerList(): void;
    constructor(lastScreen: Screen)
    // private activeLayoutState: RealmsMainScreen$LayoutState;
    // private addRealmButton: Button;
    // private availability: CompletableFuture<RealmsAvailability$Result>;
    // private availableSnapshotServers: RealmsServer[];
    // private backButton: Button;
    // private configureButton: Button;
    // private dataSubscription: DataFetcher$Subscription;
    // private handledSeenNotifications: UUID[];
    // private inviteNarrationLimiter: RateLimiter;
    // private lastScreen: Screen;
    // private layout: HeaderAndFooterLayout;
    // private leaveButton: Button;
    // private newsButton: RealmsMainScreen$NotificationButton;
    // private newsLink: string;
    // private notifications: RealmsNotification[];
    // private onlinePlayersPerRealm: RealmsServerPlayerLists;
    // private pendingInvitesButton: RealmsMainScreen$NotificationButton;
    // private playButton: Button;
    // private realmSelectionList: RealmsMainScreen$RealmSelectionList;
    // private renewButton: Button;
    // private serverList: RealmsServer[];
    // private trialsAvailable: boolean;
    // private configureClicked(selectedServer: RealmsServer): void;
    // private createFooter(state: RealmsMainScreen$LayoutState): Layout;
    // private createHeader(): Layout;
    // private createLayout(state: RealmsMainScreen$LayoutState): HeaderAndFooterLayout;
    // private createNoRealmsContent(): LinearLayout;
    // private debugRefreshDataFetchers(): void;
    // private dismissNotification(uuid: UUID): void;
    // private extractEnvironment(graphics: GuiGraphicsExtractor, text: string, color: number): void;
    extractRenderState(graphics: GuiGraphicsExtractor, xm: number, ym: number, a: number): void;
    getNarrationMessage(): Component;
    // private getOwnedNonExpiredRealmIds(): number[];
    // private getSelectedServer(): RealmsServer;
    init(): void;
    // private initDataFetcher(dataSource: RealmsDataFetcher): DataFetcher$Subscription;
    // private isSelfOwnedNonExpiredServer(serverData: RealmsServer): boolean;
    // private leaveClicked(selectedServer: RealmsServer): void;
    // private leaveServer(server: RealmsServer): void;
    // private markNotificationsAsSeen(notifications: E[]): void;
    onClose(): void;
    // private onRenew(server: RealmsServer): void;
    // private openTrialAvailablePopup(): void;
    // private pingRegions(): void;
    // private refreshListAndLayout(): void;
    repositionElements(): void;
    resetScreen(): void;
    // private shouldConfigureButtonBeActive(server: RealmsServer): boolean;
    // private shouldLeaveButtonBeActive(server: RealmsServer): boolean;
    // private shouldRenewButtonBeActive(server: RealmsServer): boolean;
    tick(): void;
    // private updateButtonStates(): void;
    // private updateLayout(): void;
    // private updateLayout(state: RealmsMainScreen$LayoutState): void;
}