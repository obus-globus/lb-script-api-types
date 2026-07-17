import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleTargetLock$Temporary$NoLockMode extends Enum<ModuleTargetLock$Temporary$NoLockMode> implements Tagged {
    static ALLOW_ALL: ModuleTargetLock$Temporary$NoLockMode;
    static ALLOW_NONE: ModuleTargetLock$Temporary$NoLockMode;
    static Companion: Tagged$Companion;
    static getEntries(): ModuleTargetLock$Temporary$NoLockMode[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleTargetLock$Temporary$NoLockMode;
    static values(): ModuleTargetLock$Temporary$NoLockMode[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "ALLOW_ALL" | "ALLOW_NONE";
}