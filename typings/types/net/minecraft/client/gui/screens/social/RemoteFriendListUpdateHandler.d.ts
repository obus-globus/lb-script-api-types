import type { FriendsService } from '../../../../../../com/mojang/authlib/yggdrasil/FriendsService.d.ts'
import type { FriendData } from '../../../../../../com/mojang/authlib/yggdrasil/response/FriendData.d.ts'
import type { FriendDto } from '../../../../../../com/mojang/authlib/yggdrasil/response/FriendDto.d.ts'
import type { Runnable } from '../../../../../../java/lang/Runnable.d.ts'
import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { CompletableFuture } from '../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { ScheduledExecutorService } from '../../../../../../java/util/concurrent/ScheduledExecutorService.d.ts'
import type { ScheduledFuture } from '../../../../../../java/util/concurrent/ScheduledFuture.d.ts'
import type { AtomicBoolean } from '../../../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { FriendToast$SkinToastEmitter } from '../../../../../../net/minecraft/client/gui/components/toasts/FriendToast$SkinToastEmitter.d.ts'
import type { RemoteFriendListUpdateHandler$State } from '../../../../../../net/minecraft/client/gui/screens/social/RemoteFriendListUpdateHandler$State.d.ts'
export class RemoteFriendListUpdateHandler extends Object {
    constructor(friendsService: FriendsService, minecraft: Minecraft)
    // private enabled: AtomicBoolean;
    // private friendsService: FriendsService;
    // private knownFriends: FriendDto[];
    // private knownIncoming: FriendDto[];
    // private knownOutgoing: FriendDto[];
    // private lastUpdateNanos: number;
    readonly latestFriendData: FriendData;
    // private minecraft: Minecraft;
    // private scheduledTick: ScheduledFuture<Object>;
    // private scheduler: ScheduledExecutorService;
    readonly state: RemoteFriendListUpdateHandler$State;
    // private updateInProgress: AtomicBoolean;
    // private updateListeners: () => void[];
    addUpdateListener(listener: () => void): void;
    close(): void;
    // private detectChangesAndShowToast(friendData: FriendData, previousState: RemoteFriendListUpdateHandler$State): boolean;
    // private emitToastWithSkin(playerId: UUID, playerName: string, emitter: (param0: Minecraft, param1: string, param2: UUID) => void): void;
    forceUpdate(): CompletableFuture<void>;
    getLatestFriendData(): FriendData;
    getState(): RemoteFriendListUpdateHandler$State;
    // private getUpdateIntervalNanos(): number;
    // private isInGameAndToastsDisabled(): boolean;
    // private notifyListeners(): void;
    removeUpdateListener(listener: () => void): void;
    // private runBackgroundTick(): void;
    runUpdateFriendDataInternal(): void;
    start(): void;
    stop(): void;
}