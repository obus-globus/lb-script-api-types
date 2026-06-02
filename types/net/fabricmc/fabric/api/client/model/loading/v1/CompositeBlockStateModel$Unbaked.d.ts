import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { CustomUnbakedBlockStateModel } from '../../../../../../../../net/fabricmc/fabric/api/client/model/loading/v1/CustomUnbakedBlockStateModel.d.ts'
import type { BlockStateModel$Unbaked } from '../../../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel$Unbaked.d.ts'
export interface CompositeBlockStateModel$Unbaked extends Object, CustomUnbakedBlockStateModel{
    models(): BlockStateModel$Unbaked[];
}