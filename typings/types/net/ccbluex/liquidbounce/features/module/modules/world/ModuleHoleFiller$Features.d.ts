import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleHoleFiller$Features extends Enum<ModuleHoleFiller$Features> implements Tagged {
    static CHECK_MOVEMENT: ModuleHoleFiller$Features;
    static Companion: Tagged$Companion;
    static ONLY_ONE_BY_ONE: ModuleHoleFiller$Features;
    static ONLY_WHEN_SELF_IN_HOLE: ModuleHoleFiller$Features;
    static PREVENT_SELF_FILL: ModuleHoleFiller$Features;
    static SMART: ModuleHoleFiller$Features;
    static getEntries(): ModuleHoleFiller$Features[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleHoleFiller$Features;
    static values(): ModuleHoleFiller$Features[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "SMART" | "PREVENT_SELF_FILL" | "ONLY_WHEN_SELF_IN_HOLE" | "CHECK_MOVEMENT" | "ONLY_ONE_BY_ONE";
}