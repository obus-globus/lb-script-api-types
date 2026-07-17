import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SodiumModelData } from '../../../../../../net/caffeinemc/mods/sodium/client/services/SodiumModelData.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
export class SodiumModelDataContainer extends Object {
    constructor(arg0: JavaMap<any, any>)
    // private isEmpty: boolean;
    // private modelDataMap: JavaMap<any, any>;
    getModelData(arg0: BlockPos): SodiumModelData;
    isEmpty(): boolean;
}