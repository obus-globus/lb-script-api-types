import type { RealmsDataFetcher } from '../../../../../com/mojang/realmsclient/gui/RealmsDataFetcher.d.ts'
import type { RealmsNotificationsScreen$DataFetcherConfiguration } from '../../../../../com/mojang/realmsclient/gui/screens/RealmsNotificationsScreen$DataFetcherConfiguration.d.ts'
import type { DataFetcher$Subscription } from '../../../../../com/mojang/realmsclient/gui/task/DataFetcher$Subscription.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { NarratableEntry } from '../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { RealmsScreen } from '../../../../../net/minecraft/realms/RealmsScreen.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class RealmsNotificationsScreen extends RealmsScreen {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: (Object | null)[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor()
    // private currentConfiguration: RealmsNotificationsScreen$DataFetcherConfiguration;
    // private numberOfPendingInvites: number;
    // private onlyNotifications: RealmsNotificationsScreen$DataFetcherConfiguration;
    // private realmsDataSubscription: DataFetcher$Subscription;
    // private showAll: RealmsNotificationsScreen$DataFetcherConfiguration;
    // private validClient: CompletableFuture<boolean>;
    // private addNewsAndInvitesSubscriptions(dataSource: RealmsDataFetcher, result: DataFetcher$Subscription): void;
    // private addNotificationsSubscriptions(dataSource: RealmsDataFetcher, result: DataFetcher$Subscription): void;
    added(): void;
    extractBackground(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    // private extractIcons(graphics: GuiGraphicsExtractor): void;
    extractRenderState(graphics: GuiGraphicsExtractor, xm: number, ym: number, a: number): void;
    // private getConfiguration(): RealmsNotificationsScreen$DataFetcherConfiguration;
    // private getRealmsNotificationsEnabled(): boolean;
    // private inTitleScreen(): boolean;
    init(): void;
    init(width: number, height: number): void;
    tick(): void;
}