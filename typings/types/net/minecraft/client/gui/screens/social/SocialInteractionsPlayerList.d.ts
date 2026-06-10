import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { AbstractScrollArea$ScrollbarSettings } from '../../../../../../net/minecraft/client/gui/components/AbstractScrollArea$ScrollbarSettings.d.ts'
import type { ContainerObjectSelectionList } from '../../../../../../net/minecraft/client/gui/components/ContainerObjectSelectionList.d.ts'
import type { PlayerEntry } from '../../../../../../net/minecraft/client/gui/screens/social/PlayerEntry.d.ts'
import type { SocialInteractionsScreen } from '../../../../../../net/minecraft/client/gui/screens/social/SocialInteractionsScreen.d.ts'
import type { SocialInteractionsScreen$Page } from '../../../../../../net/minecraft/client/gui/screens/social/SocialInteractionsScreen$Page.d.ts'
import type { PlayerInfo } from '../../../../../../net/minecraft/client/multiplayer/PlayerInfo.d.ts'
import type { SoundManager } from '../../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class SocialInteractionsPlayerList extends ContainerObjectSelectionList<PlayerEntry> {
    static SCROLLBAR_WIDTH: number;
    static defaultSettings(paramscrollRate: number): AbstractScrollArea$ScrollbarSettings;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(socialInteractionsScreen: SocialInteractionsScreen, minecraft: Minecraft, width: number, height: number, y: number, itemHeight: number)
    readonly filter: string;
    // private players: PlayerEntry[];
    // private socialInteractionsScreen: SocialInteractionsScreen;
    // private addOnlinePlayers(playersToAdd: UUID[], output: Map<UUID, PlayerEntry>): void;
    addPlayer(player: PlayerInfo, page: SocialInteractionsScreen$Page): void;
    // private addSeenPlayers(newEntries: Map<UUID, PlayerEntry>): void;
    enableScissor(graphics: GuiGraphicsExtractor): void;
    extractListBackground(graphics: GuiGraphicsExtractor): void;
    extractListSeparators(graphics: GuiGraphicsExtractor): void;
    isEmpty(): boolean;
    // private makePlayerEntry(id: UUID, playerInfo: PlayerInfo): PlayerEntry;
    refreshHasDraftReport(): void;
    removePlayer(id: UUID): void;
    setFilter(filter: string): void;
    // private sortPlayerEntries(): void;
    // private updateFilteredPlayers(): void;
    // private updateFiltersAndScroll(newEntries: PlayerEntry[], scrollAmount: number): void;
    updatePlayerList(playersToAdd: UUID[], scrollAmount: number, addOfflineEntries: boolean): void;
    // private updatePlayersFromChatLog(entries: Map<UUID, PlayerEntry>, addOfflineEntries: boolean): void;
}