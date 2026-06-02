import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class DeprecationLevelValue extends Enum<DeprecationLevelValue> {
    static ERROR: DeprecationLevelValue;
    static HIDDEN: DeprecationLevelValue;
    static WARNING: DeprecationLevelValue;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): DeprecationLevelValue;
    static values(): (Object | null)[];
    private constructor()
    name(): "WARNING" | "ERROR" | "HIDDEN";
}