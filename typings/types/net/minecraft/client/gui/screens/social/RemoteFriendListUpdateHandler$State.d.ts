import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class RemoteFriendListUpdateHandler$State extends Enum<RemoteFriendListUpdateHandler$State> {
    static CONNECTION_ISSUE: RemoteFriendListUpdateHandler$State;
    static GENERIC_ERROR: RemoteFriendListUpdateHandler$State;
    static LOADING: RemoteFriendListUpdateHandler$State;
    static SUCCESS: RemoteFriendListUpdateHandler$State;
    static TEMPORARY_UNAVAILABLE: RemoteFriendListUpdateHandler$State;
    static UNAUTHORIZED: RemoteFriendListUpdateHandler$State;
    static UPGRADE_NEEDED: RemoteFriendListUpdateHandler$State;
    static USER_MAY_LACK_ACTIVE_PROFILE: RemoteFriendListUpdateHandler$State;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): RemoteFriendListUpdateHandler$State;
    static values(): RemoteFriendListUpdateHandler$State[];
    private constructor()
    name(): "LOADING" | "UPGRADE_NEEDED" | "CONNECTION_ISSUE" | "USER_MAY_LACK_ACTIVE_PROFILE" | "UNAUTHORIZED" | "TEMPORARY_UNAVAILABLE" | "GENERIC_ERROR" | "SUCCESS";
}