import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleBlockIn$DisableOn extends Enum<ModuleBlockIn$DisableOn> implements Tagged {
    static Companion: Tagged$Companion;
    static FINISH: ModuleBlockIn$DisableOn;
    static MOVE: ModuleBlockIn$DisableOn;
    static getEntries(): ModuleBlockIn$DisableOn[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleBlockIn$DisableOn;
    static values(): ModuleBlockIn$DisableOn[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "FINISH" | "MOVE";
}