import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleScaffold$ScaffoldRotationValueGroup$RotationTimingMode extends Enum<ModuleScaffold$ScaffoldRotationValueGroup$RotationTimingMode> implements Tagged {
    static Companion: Tagged$Companion;
    static NORMAL: ModuleScaffold$ScaffoldRotationValueGroup$RotationTimingMode;
    static ON_TICK: ModuleScaffold$ScaffoldRotationValueGroup$RotationTimingMode;
    static ON_TICK_SNAP: ModuleScaffold$ScaffoldRotationValueGroup$RotationTimingMode;
    static getEntries(): ModuleScaffold$ScaffoldRotationValueGroup$RotationTimingMode[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleScaffold$ScaffoldRotationValueGroup$RotationTimingMode;
    static values(): ModuleScaffold$ScaffoldRotationValueGroup$RotationTimingMode[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "NORMAL" | "ON_TICK" | "ON_TICK_SNAP";
}