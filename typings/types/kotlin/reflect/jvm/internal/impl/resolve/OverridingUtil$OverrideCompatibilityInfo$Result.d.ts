import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class OverridingUtil$OverrideCompatibilityInfo$Result extends Enum<OverridingUtil$OverrideCompatibilityInfo$Result> {
    static CONFLICT: OverridingUtil$OverrideCompatibilityInfo$Result;
    static INCOMPATIBLE: OverridingUtil$OverrideCompatibilityInfo$Result;
    static OVERRIDABLE: OverridingUtil$OverrideCompatibilityInfo$Result;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): OverridingUtil$OverrideCompatibilityInfo$Result;
    static values(): OverridingUtil$OverrideCompatibilityInfo$Result[];
    private constructor()
    name(): "OVERRIDABLE" | "INCOMPATIBLE" | "CONFLICT";
}