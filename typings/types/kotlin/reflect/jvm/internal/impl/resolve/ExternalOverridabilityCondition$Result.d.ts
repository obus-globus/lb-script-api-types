import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ExternalOverridabilityCondition$Result extends Enum<ExternalOverridabilityCondition$Result> {
    static INCOMPATIBLE: ExternalOverridabilityCondition$Result;
    static OVERRIDABLE: ExternalOverridabilityCondition$Result;
    static UNKNOWN: ExternalOverridabilityCondition$Result;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ExternalOverridabilityCondition$Result;
    static values(): (Object | null)[];
    private constructor()
    name(): "OVERRIDABLE" | "INCOMPATIBLE" | "UNKNOWN";
}