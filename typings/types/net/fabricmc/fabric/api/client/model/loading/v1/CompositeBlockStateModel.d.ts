import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { BlockStateModel } from '../../../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel.d.ts'
import type { Material$Baked } from '../../../../../../../../net/minecraft/client/resources/model/sprite/Material$Baked.d.ts'
export interface CompositeBlockStateModel extends Object, BlockStateModel{
    hasMaterialFlag(flag: number): boolean;
    materialFlags(): number;
    models(): BlockStateModel[];
    particleMaterial(): Material$Baked;
}