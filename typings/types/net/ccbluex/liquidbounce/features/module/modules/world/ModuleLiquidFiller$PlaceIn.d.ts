import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleLiquidFiller$PlaceIn extends Enum<ModuleLiquidFiller$PlaceIn> implements Tagged {
    static Companion: Tagged$Companion;
    static LAVA: ModuleLiquidFiller$PlaceIn;
    static WATER: ModuleLiquidFiller$PlaceIn;
    static getEntries(): ModuleLiquidFiller$PlaceIn[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleLiquidFiller$PlaceIn;
    static values(): ModuleLiquidFiller$PlaceIn[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "WATER" | "LAVA";
}