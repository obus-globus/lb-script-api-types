import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SodiumModelData } from '../../../../../../net/caffeinemc/mods/sodium/client/services/SodiumModelData.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
export class SodiumModelDataContainer extends Object {
    constructor(arg0: Long2ObjectMap<SodiumModelData>)
    // private isEmpty: boolean;
    // private modelDataMap: Long2ObjectMap<SodiumModelData>;
    getModelData(arg0: BlockPos): SodiumModelData;
    isEmpty(): boolean;
}