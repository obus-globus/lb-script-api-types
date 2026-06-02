import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { BlockStateModel } from '../../../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel.d.ts'
export interface CompositeBlockStateModel extends Object, BlockStateModel{
    hasMaterialFlag(flag: number): boolean;
    models(): BlockStateModel[];
}