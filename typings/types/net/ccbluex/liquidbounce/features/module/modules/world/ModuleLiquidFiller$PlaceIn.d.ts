import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleLiquidFiller$PlaceIn extends Enum<ModuleLiquidFiller$PlaceIn> implements Tagged {
    static Companion: Tagged$Companion;
    static LAVA: ModuleLiquidFiller$PlaceIn;
    static WATER: ModuleLiquidFiller$PlaceIn;
    static getEntries(): ModuleLiquidFiller$PlaceIn[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleLiquidFiller$PlaceIn;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "WATER" | "LAVA";
}