import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ParrotModel$Pose extends Enum<ParrotModel$Pose> {
    static FLYING: ParrotModel$Pose;
    static ON_SHOULDER: ParrotModel$Pose;
    static PARTY: ParrotModel$Pose;
    static SITTING: ParrotModel$Pose;
    static STANDING: ParrotModel$Pose;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ParrotModel$Pose;
    static values(): ParrotModel$Pose[];
    private constructor()
    name(): "FLYING" | "STANDING" | "SITTING" | "PARTY" | "ON_SHOULDER";
}