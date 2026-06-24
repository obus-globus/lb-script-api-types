import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class FriendsErrorStatus extends Enum<FriendsErrorStatus> {
    static CANNOT_ADD_SELF: FriendsErrorStatus;
    static DUPLICATED_PROFILES: FriendsErrorStatus;
    static UNKNOWN_PROFILE: FriendsErrorStatus;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): FriendsErrorStatus;
    static values(): (Object | null)[];
    private constructor()
    name(): "UNKNOWN_PROFILE" | "CANNOT_ADD_SELF" | "DUPLICATED_PROFILES";
}