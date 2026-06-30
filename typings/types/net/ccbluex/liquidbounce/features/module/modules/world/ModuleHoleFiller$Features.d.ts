import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
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
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleHoleFiller$Features;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "SMART" | "PREVENT_SELF_FILL" | "ONLY_WHEN_SELF_IN_HOLE" | "CHECK_MOVEMENT" | "ONLY_ONE_BY_ONE";
}