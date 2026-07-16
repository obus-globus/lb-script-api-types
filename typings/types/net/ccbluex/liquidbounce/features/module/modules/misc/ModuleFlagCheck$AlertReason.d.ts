import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class ModuleFlagCheck$AlertReason extends Enum<ModuleFlagCheck$AlertReason> {
    static FORCEROTATE: ModuleFlagCheck$AlertReason;
    static INVALID: ModuleFlagCheck$AlertReason;
    static LAGBACK: ModuleFlagCheck$AlertReason;
    static getEntries(): ModuleFlagCheck$AlertReason[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleFlagCheck$AlertReason;
    static values(): ModuleFlagCheck$AlertReason[];
    private constructor(key: string)
    readonly key: string;
    name(): "INVALID" | "FORCEROTATE" | "LAGBACK";
}