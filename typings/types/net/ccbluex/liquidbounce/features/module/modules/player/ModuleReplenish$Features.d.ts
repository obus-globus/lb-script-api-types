import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleReplenish$Features extends Enum<ModuleReplenish$Features> implements Tagged {
    static CLEANUP: ModuleReplenish$Features;
    static Companion: Tagged$Companion;
    static USE_PICKUP_ALL: ModuleReplenish$Features;
    static USE_SWAP: ModuleReplenish$Features;
    static getEntries(): ModuleReplenish$Features[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleReplenish$Features;
    static values(): ModuleReplenish$Features[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "CLEANUP" | "USE_PICKUP_ALL" | "USE_SWAP";
}