import type { UserApiService } from '../../../../../../com/mojang/authlib/minecraft/UserApiService.d.ts'
import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { CompletableFuture } from '../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { PlayerInfo } from '../../../../../../net/minecraft/client/multiplayer/PlayerInfo.d.ts'
export class PlayerSocialManager extends Object {
    constructor(minecraft: Minecraft, service: UserApiService)
    // private discoveredNamesToUUID: { [key: string]: UUID };
    readonly hiddenPlayers: UUID[];
    // private minecraft: Minecraft;
    // private onlineMode: boolean;
    // private pendingBlockListRefresh: CompletableFuture<Object>;
    // private service: UserApiService;
    addPlayer(info: PlayerInfo): void;
    getDiscoveredUUID(name: string): UUID;
    getHiddenPlayers(): UUID[];
    hidePlayer(id: UUID): void;
    isBlocked(id: UUID): boolean;
    isHidden(id: UUID): boolean;
    removePlayer(id: UUID): void;
    shouldHideMessageFrom(id: UUID): boolean;
    showPlayer(id: UUID): void;
    startOnlineMode(): void;
    stopOnlineMode(): void;
}