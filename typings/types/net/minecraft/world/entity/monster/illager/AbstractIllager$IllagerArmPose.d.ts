import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class AbstractIllager$IllagerArmPose extends Enum<AbstractIllager$IllagerArmPose> {
    static ATTACKING: AbstractIllager$IllagerArmPose;
    static BOW_AND_ARROW: AbstractIllager$IllagerArmPose;
    static CELEBRATING: AbstractIllager$IllagerArmPose;
    static CROSSBOW_CHARGE: AbstractIllager$IllagerArmPose;
    static CROSSBOW_HOLD: AbstractIllager$IllagerArmPose;
    static CROSSED: AbstractIllager$IllagerArmPose;
    static NEUTRAL: AbstractIllager$IllagerArmPose;
    static SPELLCASTING: AbstractIllager$IllagerArmPose;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): AbstractIllager$IllagerArmPose;
    static values(): AbstractIllager$IllagerArmPose[];
    private constructor()
    name(): "CROSSED" | "ATTACKING" | "SPELLCASTING" | "BOW_AND_ARROW" | "CROSSBOW_HOLD" | "CROSSBOW_CHARGE" | "CELEBRATING" | "NEUTRAL";
}