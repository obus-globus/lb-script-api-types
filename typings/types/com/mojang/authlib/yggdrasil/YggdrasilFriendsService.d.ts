import type { Environment } from '../../../../com/mojang/authlib/Environment.d.ts'
import type { MinecraftClientHttpException } from '../../../../com/mojang/authlib/exceptions/MinecraftClientHttpException.d.ts'
import type { MinecraftClient } from '../../../../com/mojang/authlib/minecraft/client/MinecraftClient.d.ts'
import type { FriendsService } from '../../../../com/mojang/authlib/yggdrasil/FriendsService.d.ts'
import type { FriendsService$ResultCode } from '../../../../com/mojang/authlib/yggdrasil/FriendsService$ResultCode.d.ts'
import type { FriendActionRequest } from '../../../../com/mojang/authlib/yggdrasil/request/FriendActionRequest.d.ts'
import type { FriendData } from '../../../../com/mojang/authlib/yggdrasil/response/FriendData.d.ts'
import type { PresenceResponse } from '../../../../com/mojang/authlib/yggdrasil/response/PresenceResponse.d.ts'
import type { Proxy } from '../../../../java/net/Proxy.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { Duration } from '../../../../java/time/Duration.d.ts'
import type { Instant } from '../../../../java/time/Instant.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { AtomicBoolean } from '../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class YggdrasilFriendsService extends Object implements FriendsService {
    constructor(arg0: string, arg1: Proxy, arg2: Environment)
    // private friendsCache: FriendData;
    // private friendsEtag: string;
    readonly friendsPollInterval: Duration;
    // private minecraftClient: MinecraftClient;
    // private presenceCache: PresenceResponse;
    // private presenceEtag: string;
    readonly presencePollInterval: Duration;
    // private requestCooldown: Instant;
    // private requestPending: AtomicBoolean;
    // private routeFriends: URL;
    // private routePresence: URL;
    // private routePrivileges: URL;
    acceptIncomingFriendRequest(arg0: UUID): FriendsService$ResultCode;
    // private canMakeRequest(): boolean;
    declineIncomingFriendRequest(arg0: UUID): FriendsService$ResultCode;
    getFriendData(arg0: (param0: FriendData) => void): FriendsService$ResultCode;
    getFriendsPollInterval(): Optional<Duration>;
    getPresencePollInterval(): Optional<Duration>;
    // private handleHttpError(arg0: MinecraftClientHttpException): FriendsService$ResultCode;
    presence(arg0: string): PresenceResponse;
    // private putFriendAction(arg0: FriendActionRequest): FriendsService$ResultCode;
    removeFriend(arg0: UUID): FriendsService$ResultCode;
    // private requestFriendData(arg0: (param0: FriendData) => void): FriendsService$ResultCode;
    revokeOutgoingFriendRequest(arg0: UUID): FriendsService$ResultCode;
    sendFriendRequest(arg0: UUID): FriendsService$ResultCode;
    sendFriendRequest(arg0: string): FriendsService$ResultCode;
    updateFriendSettings(arg0: boolean, arg1: boolean): FriendsService$ResultCode;
}