import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PlatformModCompat } from '../../../../../net/caffeinemc/mods/lithium/common/services/PlatformModCompat.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class FabricModCompat extends Object implements PlatformModCompat {
    static INSTANCE: PlatformModCompat;
    constructor()
    canHopperInteractWithApiBlockInventory(arg0: (Object | null)[], arg1: BlockState, arg2: boolean): boolean;
}