import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleAimbot$Axis extends Enum<ModuleAimbot$Axis> implements Tagged {
    static Companion: Tagged$Companion;
    static HORIZONTAL: ModuleAimbot$Axis;
    static VERTICAL: ModuleAimbot$Axis;
    static getEntries(): ModuleAimbot$Axis[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleAimbot$Axis;
    static values(): ModuleAimbot$Axis[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "HORIZONTAL" | "VERTICAL";
}