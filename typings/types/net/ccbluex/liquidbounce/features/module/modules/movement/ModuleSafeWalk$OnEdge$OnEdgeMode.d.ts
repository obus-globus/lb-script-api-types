import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleSafeWalk$OnEdge$OnEdgeMode extends Enum<ModuleSafeWalk$OnEdge$OnEdgeMode> implements Tagged {
    static CENTER: ModuleSafeWalk$OnEdge$OnEdgeMode;
    static Companion: Tagged$Companion;
    static INVERT: ModuleSafeWalk$OnEdge$OnEdgeMode;
    static STOP: ModuleSafeWalk$OnEdge$OnEdgeMode;
    static getEntries(): ModuleSafeWalk$OnEdge$OnEdgeMode[];
    static makeLookupTable(paramarg0: (Object | null)[]): { [key: string]: Object | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleSafeWalk$OnEdge$OnEdgeMode;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "STOP" | "INVERT" | "CENTER";
}