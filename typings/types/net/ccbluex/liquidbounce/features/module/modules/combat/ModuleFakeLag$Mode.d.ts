import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleFakeLag$Mode extends Enum<ModuleFakeLag$Mode> implements Tagged {
    static CONSTANT: ModuleFakeLag$Mode;
    static Companion: Tagged$Companion;
    static DYNAMIC: ModuleFakeLag$Mode;
    static getEntries(): ModuleFakeLag$Mode[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleFakeLag$Mode;
    static values(): ModuleFakeLag$Mode[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "CONSTANT" | "DYNAMIC";
}