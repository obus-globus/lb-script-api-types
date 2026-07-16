import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class CyclicalTracker$CyclicalMode extends Enum<CyclicalTracker$CyclicalMode> {
    static EXP_RANGE: CyclicalTracker$CyclicalMode;
    static TRIANGULAR: CyclicalTracker$CyclicalMode;
    static TRIANGULAR2: CyclicalTracker$CyclicalMode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): CyclicalTracker$CyclicalMode;
    static values(): CyclicalTracker$CyclicalMode[];
    private constructor()
    name(): "TRIANGULAR" | "TRIANGULAR2" | "EXP_RANGE";
}