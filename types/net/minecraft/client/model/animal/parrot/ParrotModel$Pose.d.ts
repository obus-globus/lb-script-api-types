import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ParrotModel$Pose extends Enum<ParrotModel$Pose> {
    static FLYING: ParrotModel$Pose;
    static ON_SHOULDER: ParrotModel$Pose;
    static PARTY: ParrotModel$Pose;
    static SITTING: ParrotModel$Pose;
    static STANDING: ParrotModel$Pose;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ParrotModel$Pose;
    static values(): (Object | null)[];
    private constructor()
    name(): "FLYING" | "STANDING" | "SITTING" | "PARTY" | "ON_SHOULDER";
}