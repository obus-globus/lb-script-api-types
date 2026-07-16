import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class PiglinArmPose extends Enum<PiglinArmPose> {
    static ADMIRING_ITEM: PiglinArmPose;
    static ATTACKING_WITH_MELEE_WEAPON: PiglinArmPose;
    static CROSSBOW_CHARGE: PiglinArmPose;
    static CROSSBOW_HOLD: PiglinArmPose;
    static DANCING: PiglinArmPose;
    static DEFAULT: PiglinArmPose;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): PiglinArmPose;
    static values(): PiglinArmPose[];
    private constructor()
    name(): "ATTACKING_WITH_MELEE_WEAPON" | "CROSSBOW_HOLD" | "CROSSBOW_CHARGE" | "ADMIRING_ITEM" | "DANCING" | "DEFAULT";
}