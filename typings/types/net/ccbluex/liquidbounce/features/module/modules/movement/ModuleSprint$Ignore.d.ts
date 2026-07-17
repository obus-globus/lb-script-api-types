import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleSprint$Ignore extends Enum<ModuleSprint$Ignore> implements Tagged {
    static BLINDNESS: ModuleSprint$Ignore;
    static COLLISION: ModuleSprint$Ignore;
    static Companion: Tagged$Companion;
    static HUNGER: ModuleSprint$Ignore;
    static getEntries(): ModuleSprint$Ignore[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleSprint$Ignore;
    static values(): ModuleSprint$Ignore[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "BLINDNESS" | "HUNGER" | "COLLISION";
}