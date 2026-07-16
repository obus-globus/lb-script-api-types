import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ExternalOverridabilityCondition$Result extends Enum<ExternalOverridabilityCondition$Result> {
    static INCOMPATIBLE: ExternalOverridabilityCondition$Result;
    static OVERRIDABLE: ExternalOverridabilityCondition$Result;
    static UNKNOWN: ExternalOverridabilityCondition$Result;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ExternalOverridabilityCondition$Result;
    static values(): ExternalOverridabilityCondition$Result[];
    private constructor()
    name(): "OVERRIDABLE" | "INCOMPATIBLE" | "UNKNOWN";
}