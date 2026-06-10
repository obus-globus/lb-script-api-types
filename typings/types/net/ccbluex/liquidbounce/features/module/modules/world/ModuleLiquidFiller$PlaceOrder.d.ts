import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Vec3 } from '../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ModuleLiquidFiller$PlaceOrder extends Enum<ModuleLiquidFiller$PlaceOrder> implements Tagged {
    static BOTTOM_TOP: ModuleLiquidFiller$PlaceOrder;
    static CLOSER_FIRST: ModuleLiquidFiller$PlaceOrder;
    static Companion: Tagged$Companion;
    static FURTHER_FIRST: ModuleLiquidFiller$PlaceOrder;
    static RANDOM: ModuleLiquidFiller$PlaceOrder;
    static TOP_BOTTOM: ModuleLiquidFiller$PlaceOrder;
    static getEntries(): ModuleLiquidFiller$PlaceOrder[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleLiquidFiller$PlaceOrder;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    sort(positions: BlockPos[], eyePos: Vec3): void;
    name(): "RANDOM" | "CLOSER_FIRST" | "FURTHER_FIRST" | "BOTTOM_TOP" | "TOP_BOTTOM";
}