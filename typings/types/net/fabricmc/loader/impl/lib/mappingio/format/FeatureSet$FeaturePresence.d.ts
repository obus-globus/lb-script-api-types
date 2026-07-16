import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class FeatureSet$FeaturePresence extends Enum<FeatureSet$FeaturePresence> {
    static ABSENT: FeatureSet$FeaturePresence;
    static OPTIONAL: FeatureSet$FeaturePresence;
    static REQUIRED: FeatureSet$FeaturePresence;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): FeatureSet$FeaturePresence;
    static values(): FeatureSet$FeaturePresence[];
    private constructor()
    name(): "REQUIRED" | "OPTIONAL" | "ABSENT";
}