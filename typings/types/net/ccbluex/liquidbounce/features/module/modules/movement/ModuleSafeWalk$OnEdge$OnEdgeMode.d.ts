import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleSafeWalk$OnEdge$OnEdgeMode extends Enum<ModuleSafeWalk$OnEdge$OnEdgeMode> implements Tagged {
    static CENTER: ModuleSafeWalk$OnEdge$OnEdgeMode;
    static Companion: Tagged$Companion;
    static INVERT: ModuleSafeWalk$OnEdge$OnEdgeMode;
    static STOP: ModuleSafeWalk$OnEdge$OnEdgeMode;
    static getEntries(): ModuleSafeWalk$OnEdge$OnEdgeMode[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleSafeWalk$OnEdge$OnEdgeMode;
    static values(): ModuleSafeWalk$OnEdge$OnEdgeMode[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "STOP" | "INVERT" | "CENTER";
}