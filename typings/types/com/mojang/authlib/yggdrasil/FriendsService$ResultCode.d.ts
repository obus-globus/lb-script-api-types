import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class FriendsService$ResultCode extends Enum<FriendsService$ResultCode> {
    static CONNECTION_ISSUE: FriendsService$ResultCode;
    static ERROR: FriendsService$ResultCode;
    static FORBIDDEN: FriendsService$ResultCode;
    static GENERIC_ERROR: FriendsService$ResultCode;
    static SERVICE_NOT_AVAILABLE: FriendsService$ResultCode;
    static SUCCESS: FriendsService$ResultCode;
    static TEMPORARY_UNAVAILABLE: FriendsService$ResultCode;
    static TOO_MANY_REQUESTS: FriendsService$ResultCode;
    static UNAUTHORIZED: FriendsService$ResultCode;
    static UNKNOWN_PROFILE: FriendsService$ResultCode;
    static UPGRADE_NEEDED: FriendsService$ResultCode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): FriendsService$ResultCode;
    static values(): FriendsService$ResultCode[];
    private constructor()
    name(): "SUCCESS" | "ERROR" | "SERVICE_NOT_AVAILABLE" | "TOO_MANY_REQUESTS" | "FORBIDDEN" | "UPGRADE_NEEDED" | "CONNECTION_ISSUE" | "TEMPORARY_UNAVAILABLE" | "UNKNOWN_PROFILE" | "UNAUTHORIZED" | "GENERIC_ERROR";
}