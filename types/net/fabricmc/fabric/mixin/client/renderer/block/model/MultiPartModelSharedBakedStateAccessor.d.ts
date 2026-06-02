import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { BlockStateModel } from '../../../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel.d.ts'
import type { MultiPartModel$Selector } from '../../../../../../../../net/minecraft/client/renderer/block/dispatch/multipart/MultiPartModel$Selector.d.ts'
export interface MultiPartModelSharedBakedStateAccessor extends Object{
    getSelectors(): MultiPartModel$Selector<BlockStateModel>[];
}