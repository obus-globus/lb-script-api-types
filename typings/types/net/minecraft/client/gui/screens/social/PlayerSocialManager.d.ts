import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { UserApiService } from '../../../../../../com/mojang/authlib/minecraft/UserApiService.d.ts'
import type { FriendsService } from '../../../../../../com/mojang/authlib/yggdrasil/FriendsService.d.ts'
import type { FriendsService$ResultCode } from '../../../../../../com/mojang/authlib/yggdrasil/FriendsService$ResultCode.d.ts'
import type { Runnable } from '../../../../../../java/lang/Runnable.d.ts'
import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { CompletableFuture } from '../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { PlayerSocialManager$PlayerData } from '../../../../../../net/minecraft/client/gui/screens/social/PlayerSocialManager$PlayerData.d.ts'
import type { PresenceHandler } from '../../../../../../net/minecraft/client/gui/screens/social/PresenceHandler.d.ts'
import type { RemoteFriendListUpdateHandler } from '../../../../../../net/minecraft/client/gui/screens/social/RemoteFriendListUpdateHandler.d.ts'
import type { RemoteFriendListUpdateHandler$State } from '../../../../../../net/minecraft/client/gui/screens/social/RemoteFriendListUpdateHandler$State.d.ts'
import type { PlayerInfo } from '../../../../../../net/minecraft/client/multiplayer/PlayerInfo.d.ts'
export class PlayerSocialManager extends Object {
    constructor(minecraft: Minecraft, service: UserApiService, friendsService: FriendsService, remoteFriendListUpdateHandler: RemoteFriendListUpdateHandler)
    readonly allowFriendRequests: boolean;
    // private discoveredNamesToUUID: JavaMap<string, UUID>;
    readonly friendListEnabled: boolean;
    // private friendsService: FriendsService;
    readonly hiddenPlayers: UUID[];
    // private minecraft: Minecraft;
    // private onlineMode: boolean;
    // private pendingBlockListRefresh: CompletableFuture<Object>;
    readonly presenceHandler: PresenceHandler;
    // private remoteFriendListUpdateHandler: RemoteFriendListUpdateHandler;
    // private service: UserApiService;
    acceptIncomingFriendRequest(id: UUID): CompletableFuture<FriendsService$ResultCode>;
    addFriendListUpdateListener(listener: () => void): void;
    addPlayer(info: PlayerInfo): void;
    declineIncomingFriendRequest(id: UUID): CompletableFuture<FriendsService$ResultCode>;
    getDiscoveredUUID(name: string): UUID;
    getFriendListState(): RemoteFriendListUpdateHandler$State;
    getFriends(): PlayerSocialManager$PlayerData[];
    getHiddenPlayers(): UUID[];
    getIncomingRequests(): PlayerSocialManager$PlayerData[];
    getOutgoingRequests(): PlayerSocialManager$PlayerData[];
    getPresenceHandler(): PresenceHandler;
    // private handleResult(result: FriendsService$ResultCode): void;
    hidePlayer(id: UUID): void;
    isAllowFriendRequests(): boolean;
    isBlocked(id: UUID): boolean;
    isFriend(uuid: UUID): boolean;
    isFriendListEnabled(): boolean;
    isHidden(id: UUID): boolean;
    removeFriend(id: UUID): CompletableFuture<FriendsService$ResultCode>;
    removeFriendListUpdateListener(listener: () => void): void;
    removePlayer(id: UUID): void;
    revokeOutgoingFriendRequest(id: UUID): CompletableFuture<FriendsService$ResultCode>;
    // private runAction(action: () => FriendsService$ResultCode): CompletableFuture<FriendsService$ResultCode>;
    sendFriendRequest(name: string): CompletableFuture<FriendsService$ResultCode>;
    setAllowFriendRequests(allowFriendRequests: boolean): void;
    setFriendListEnabled(friendListEnabled: boolean): void;
    shouldHideMessageFrom(id: UUID): boolean;
    // private showFailureToast(resultCode: FriendsService$ResultCode): void;
    showPlayer(id: UUID): void;
    startOnlineMode(): void;
    stopOnlineMode(): void;
    updateFriendSettings(friendsListEnabled: boolean, allowInvites: boolean): CompletableFuture<FriendsService$ResultCode>;
}