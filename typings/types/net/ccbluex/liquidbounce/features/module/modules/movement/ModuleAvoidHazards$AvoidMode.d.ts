import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleAvoidHazards$AvoidMode extends Enum<ModuleAvoidHazards$AvoidMode> implements Tagged {
    static Companion: Tagged$Companion;
    static INPUT: ModuleAvoidHazards$AvoidMode;
    static SHAPE: ModuleAvoidHazards$AvoidMode;
    static getEntries(): ModuleAvoidHazards$AvoidMode[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleAvoidHazards$AvoidMode;
    static values(): ModuleAvoidHazards$AvoidMode[];
    private constructor(tag: string, tagAliases: string[])
    readonly tag: string;
    readonly tagAliases: string[];
    name(): "SHAPE" | "INPUT";
}