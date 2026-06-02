import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class FeatureSet$FeaturePresence extends Enum<FeatureSet$FeaturePresence> {
    static ABSENT: FeatureSet$FeaturePresence;
    static OPTIONAL: FeatureSet$FeaturePresence;
    static REQUIRED: FeatureSet$FeaturePresence;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): FeatureSet$FeaturePresence;
    static values(): (Object | null)[];
    private constructor()
    name(): "REQUIRED" | "OPTIONAL" | "ABSENT";
}