import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleAutoBuff$Rotations$RotationTimingMode extends Enum<ModuleAutoBuff$Rotations$RotationTimingMode> implements Tagged {
    static Companion: Tagged$Companion;
    static NORMAL: ModuleAutoBuff$Rotations$RotationTimingMode;
    static ON_TICK: ModuleAutoBuff$Rotations$RotationTimingMode;
    static ON_USE: ModuleAutoBuff$Rotations$RotationTimingMode;
    static getEntries(): ModuleAutoBuff$Rotations$RotationTimingMode[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleAutoBuff$Rotations$RotationTimingMode;
    static values(): ModuleAutoBuff$Rotations$RotationTimingMode[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "NORMAL" | "ON_TICK" | "ON_USE";
}