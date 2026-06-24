import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class UserApiService$UserFlag extends Enum<UserApiService$UserFlag> {
    static ACCEPT_FRIEND_INVITES: UserApiService$UserFlag;
    static CHAT_ALLOWED: UserApiService$UserFlag;
    static CHAT_FRIENDS_ONLY: UserApiService$UserFlag;
    static FRIENDS_ENABLED: UserApiService$UserFlag;
    static OPTIONAL_TELEMETRY_AVAILABLE: UserApiService$UserFlag;
    static PROFANITY_FILTER_ENABLED: UserApiService$UserFlag;
    static REALMS_ALLOWED: UserApiService$UserFlag;
    static SERVERS_ALLOWED: UserApiService$UserFlag;
    static TELEMETRY_ENABLED: UserApiService$UserFlag;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): UserApiService$UserFlag;
    static values(): (Object | null)[];
    private constructor()
    name(): "SERVERS_ALLOWED" | "REALMS_ALLOWED" | "CHAT_ALLOWED" | "CHAT_FRIENDS_ONLY" | "TELEMETRY_ENABLED" | "PROFANITY_FILTER_ENABLED" | "OPTIONAL_TELEMETRY_AVAILABLE" | "FRIENDS_ENABLED" | "ACCEPT_FRIEND_INVITES";
}