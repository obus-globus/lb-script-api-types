import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ShootTongue$State extends Enum<ShootTongue$State> {
    static CATCH_ANIMATION: ShootTongue$State;
    static DONE: ShootTongue$State;
    static EAT_ANIMATION: ShootTongue$State;
    static MOVE_TO_TARGET: ShootTongue$State;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ShootTongue$State;
    static values(): (Object | null)[];
    private constructor()
    name(): "MOVE_TO_TARGET" | "CATCH_ANIMATION" | "EAT_ANIMATION" | "DONE";
}