import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleEntityControl$Enforce extends Enum<ModuleEntityControl$Enforce> implements Tagged {
    static Companion: Tagged$Companion;
    static JUMP_STRENGTH: ModuleEntityControl$Enforce;
    static SADDLED: ModuleEntityControl$Enforce;
    static getEntries(): ModuleEntityControl$Enforce[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleEntityControl$Enforce;
    static values(): ModuleEntityControl$Enforce[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "SADDLED" | "JUMP_STRENGTH";
}