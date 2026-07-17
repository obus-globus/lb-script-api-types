import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleBacktrack$Mode extends Enum<ModuleBacktrack$Mode> implements Tagged {
    static ATTACK: ModuleBacktrack$Mode;
    static Companion: Tagged$Companion;
    static RANGE: ModuleBacktrack$Mode;
    static getEntries(): ModuleBacktrack$Mode[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleBacktrack$Mode;
    static values(): ModuleBacktrack$Mode[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "ATTACK" | "RANGE";
}