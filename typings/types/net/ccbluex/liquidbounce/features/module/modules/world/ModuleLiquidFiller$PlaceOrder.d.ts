import type { Class } from '../../../../../../../java/lang/Class.d.ts'
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
    static makeLookupTable<T extends Tagged>(self: T[]): { [key: string]: T };
    static of(self: string): Tagged;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleLiquidFiller$PlaceOrder;
    static values(): ModuleLiquidFiller$PlaceOrder[];
    private constructor(tag: string)
    readonly tag: string;
    sort(positions: BlockPos[], eyePos: Vec3): void;
    name(): "RANDOM" | "CLOSER_FIRST" | "FURTHER_FIRST" | "BOTTOM_TOP" | "TOP_BOTTOM";
}