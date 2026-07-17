import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleSurround$DisableOn extends Enum<ModuleSurround$DisableOn> implements Tagged {
    static Companion: Tagged$Companion;
    static XZ_MOVE: ModuleSurround$DisableOn;
    static XZ_SPEED: ModuleSurround$DisableOn;
    static Y_CHANGE: ModuleSurround$DisableOn;
    static getEntries(): ModuleSurround$DisableOn[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleSurround$DisableOn;
    static values(): ModuleSurround$DisableOn[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "Y_CHANGE" | "XZ_MOVE" | "XZ_SPEED";
}