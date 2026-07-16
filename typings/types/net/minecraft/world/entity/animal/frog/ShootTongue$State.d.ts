import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ShootTongue$State extends Enum<ShootTongue$State> {
    static CATCH_ANIMATION: ShootTongue$State;
    static DONE: ShootTongue$State;
    static EAT_ANIMATION: ShootTongue$State;
    static MOVE_TO_TARGET: ShootTongue$State;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ShootTongue$State;
    static values(): ShootTongue$State[];
    private constructor()
    name(): "MOVE_TO_TARGET" | "CATCH_ANIMATION" | "EAT_ANIMATION" | "DONE";
}