import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class KmVersionRequirementLevel extends Enum<KmVersionRequirementLevel> {
    static ERROR: KmVersionRequirementLevel;
    static HIDDEN: KmVersionRequirementLevel;
    static WARNING: KmVersionRequirementLevel;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): KmVersionRequirementLevel;
    static values(): KmVersionRequirementLevel[];
    private constructor()
    name(): "WARNING" | "ERROR" | "HIDDEN";
}