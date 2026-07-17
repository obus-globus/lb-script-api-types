import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { BitSet } from '../../../../../../../java/util/BitSet.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MultiPartModelSharedBakedStateAccessor } from '../../../../../../../net/fabricmc/fabric/mixin/client/renderer/block/model/MultiPartModelSharedBakedStateAccessor.d.ts'
import type { BlockStateModel } from '../../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel.d.ts'
import type { MultiPartModel$Selector } from '../../../../../../../net/minecraft/client/renderer/block/dispatch/multipart/MultiPartModel$Selector.d.ts'
import type { Material$Baked } from '../../../../../../../net/minecraft/client/resources/model/sprite/Material$Baked.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class MultiPartModel$SharedBakedState extends Object implements MultiPartModelSharedBakedStateAccessor {
    constructor(selectors: MultiPartModel$Selector<BlockStateModel>[])
    // private materialFlags: number;
    // private particleMaterial: Material$Baked;
    readonly selectors: MultiPartModel$Selector<BlockStateModel>[];
    // private subsets: JavaMap<BitSet, BlockStateModel[]>;
    selectModels(state: BlockState): BlockStateModel[];
}