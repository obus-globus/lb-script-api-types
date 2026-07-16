import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class DeprecationLevelValue extends Enum<DeprecationLevelValue> {
    static ERROR: DeprecationLevelValue;
    static HIDDEN: DeprecationLevelValue;
    static WARNING: DeprecationLevelValue;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): DeprecationLevelValue;
    static values(): DeprecationLevelValue[];
    private constructor()
    name(): "WARNING" | "ERROR" | "HIDDEN";
}