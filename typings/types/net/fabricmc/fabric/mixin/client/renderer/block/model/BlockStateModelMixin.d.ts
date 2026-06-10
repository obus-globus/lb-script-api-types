import type { Predicate } from '../../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { QuadEmitter } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/QuadEmitter.d.ts'
import type { FabricBlockStateModel } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/model/FabricBlockStateModel.d.ts'
import type { BlockAndTintGetter } from '../../../../../../../../net/minecraft/client/renderer/block/BlockAndTintGetter.d.ts'
import type { Material$Baked } from '../../../../../../../../net/minecraft/client/resources/model/sprite/Material$Baked.d.ts'
import type { BlockPos } from '../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../../../../net/minecraft/core/Direction.d.ts'
import type { RandomSource } from '../../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { BlockState } from '../../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export interface BlockStateModelMixin extends Object, FabricBlockStateModel {
    createGeometryKey(arg0: BlockAndTintGetter, arg1: BlockPos, arg2: BlockState, arg3: RandomSource): Object;
    emitQuads(arg0: QuadEmitter, arg1: BlockAndTintGetter, arg2: BlockPos, arg3: BlockState, arg4: RandomSource, arg5: (param0: Direction) => boolean): void;
    hasMaterialFlag(arg0: BlockAndTintGetter, arg1: BlockPos, arg2: BlockState, arg3: RandomSource, arg4: number): boolean;
    materialFlags(arg0: BlockAndTintGetter, arg1: BlockPos, arg2: BlockState, arg3: RandomSource): number;
    particleMaterial(arg0: BlockAndTintGetter, arg1: BlockPos, arg2: BlockState): Material$Baked;
}