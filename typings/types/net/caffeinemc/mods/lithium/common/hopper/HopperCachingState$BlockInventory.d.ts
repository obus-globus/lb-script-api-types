import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class HopperCachingState$BlockInventory extends Enum<HopperCachingState$BlockInventory> {
    static BLOCK_ENTITY: HopperCachingState$BlockInventory;
    static BLOCK_STATE: HopperCachingState$BlockInventory;
    static NO_BLOCK_INVENTORY: HopperCachingState$BlockInventory;
    static REMOVAL_TRACKING_BLOCK_ENTITY: HopperCachingState$BlockInventory;
    static UNKNOWN: HopperCachingState$BlockInventory;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): HopperCachingState$BlockInventory;
    static values(): HopperCachingState$BlockInventory[];
    private constructor()
    name(): "UNKNOWN" | "BLOCK_STATE" | "BLOCK_ENTITY" | "REMOVAL_TRACKING_BLOCK_ENTITY" | "NO_BLOCK_INVENTORY";
}