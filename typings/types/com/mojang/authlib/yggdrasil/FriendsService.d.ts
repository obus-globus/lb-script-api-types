import type { FriendsService$ResultCode } from '../../../../com/mojang/authlib/yggdrasil/FriendsService$ResultCode.d.ts'
import type { FriendData } from '../../../../com/mojang/authlib/yggdrasil/response/FriendData.d.ts'
import type { PresenceResponse } from '../../../../com/mojang/authlib/yggdrasil/response/PresenceResponse.d.ts'
import type { Duration } from '../../../../java/time/Duration.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface FriendsService extends Object {
    acceptIncomingFriendRequest(arg0: UUID): FriendsService$ResultCode;
    declineIncomingFriendRequest(arg0: UUID): FriendsService$ResultCode;
    getFriendData(arg0: (param0: FriendData) => void): FriendsService$ResultCode;
    getFriendsPollInterval(): Optional<Duration>;
    getPresencePollInterval(): Optional<Duration>;
    presence(arg0: string): PresenceResponse;
    removeFriend(arg0: UUID): FriendsService$ResultCode;
    revokeOutgoingFriendRequest(arg0: UUID): FriendsService$ResultCode;
    sendFriendRequest(arg0: UUID): FriendsService$ResultCode;
    sendFriendRequest(arg0: string): FriendsService$ResultCode;
    updateFriendSettings(arg0: boolean, arg1: boolean): FriendsService$ResultCode;
}