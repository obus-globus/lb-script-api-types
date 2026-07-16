import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class ModuleFlagCheck$AlertReason extends Enum<ModuleFlagCheck$AlertReason> {
    static FORCEROTATE: ModuleFlagCheck$AlertReason;
    static INVALID: ModuleFlagCheck$AlertReason;
    static LAGBACK: ModuleFlagCheck$AlertReason;
    static getEntries(): ModuleFlagCheck$AlertReason[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleFlagCheck$AlertReason;
    static values(): ModuleFlagCheck$AlertReason[];
    private constructor(key: string)
    readonly key: string;
    name(): "INVALID" | "FORCEROTATE" | "LAGBACK";
}