import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleScaffold$ScaffoldRotationValueGroup$RotationTimingMode extends Enum<ModuleScaffold$ScaffoldRotationValueGroup$RotationTimingMode> implements Tagged {
    static Companion: Tagged$Companion;
    static NORMAL: ModuleScaffold$ScaffoldRotationValueGroup$RotationTimingMode;
    static ON_TICK: ModuleScaffold$ScaffoldRotationValueGroup$RotationTimingMode;
    static ON_TICK_SNAP: ModuleScaffold$ScaffoldRotationValueGroup$RotationTimingMode;
    static getEntries(): ModuleScaffold$ScaffoldRotationValueGroup$RotationTimingMode[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleScaffold$ScaffoldRotationValueGroup$RotationTimingMode;
    static values(): ModuleScaffold$ScaffoldRotationValueGroup$RotationTimingMode[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "NORMAL" | "ON_TICK" | "ON_TICK_SNAP";
}