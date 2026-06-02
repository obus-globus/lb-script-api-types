import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class KmVersionRequirementLevel extends Enum<KmVersionRequirementLevel> {
    static ERROR: KmVersionRequirementLevel;
    static HIDDEN: KmVersionRequirementLevel;
    static WARNING: KmVersionRequirementLevel;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): KmVersionRequirementLevel;
    static values(): (Object | null)[];
    private constructor()
    name(): "WARNING" | "ERROR" | "HIDDEN";
}