import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleTargetLock$Filter$FilterType extends Enum<ModuleTargetLock$Filter$FilterType> implements Tagged {
    static BLACKLIST: ModuleTargetLock$Filter$FilterType;
    static Companion: Tagged$Companion;
    static WHITELIST: ModuleTargetLock$Filter$FilterType;
    static getEntries(): ModuleTargetLock$Filter$FilterType[];
    static makeLookupTable<T extends Tagged>(self: T[]): { [key: string]: T };
    static of(self: string): Tagged;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleTargetLock$Filter$FilterType;
    static values(): ModuleTargetLock$Filter$FilterType[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "WHITELIST" | "BLACKLIST";
}