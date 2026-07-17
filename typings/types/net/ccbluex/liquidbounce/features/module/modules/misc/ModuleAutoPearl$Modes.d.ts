import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleAutoPearl$Modes extends Enum<ModuleAutoPearl$Modes> implements Tagged {
    static Companion: Tagged$Companion;
    static TARGET: ModuleAutoPearl$Modes;
    static TRIGGER: ModuleAutoPearl$Modes;
    static getEntries(): ModuleAutoPearl$Modes[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleAutoPearl$Modes;
    static values(): ModuleAutoPearl$Modes[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "TRIGGER" | "TARGET";
}