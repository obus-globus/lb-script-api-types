import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class ProfileActionType extends Enum<ProfileActionType> {
    static FORCED_NAME_CHANGE: ProfileActionType;
    static USING_BANNED_SKIN: ProfileActionType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ProfileActionType;
    static values(): ProfileActionType[];
    private constructor()
    name(): "FORCED_NAME_CHANGE" | "USING_BANNED_SKIN";
}