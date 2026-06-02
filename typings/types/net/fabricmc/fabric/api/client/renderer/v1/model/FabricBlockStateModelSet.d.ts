import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { BlockAndTintGetter } from '../../../../../../../../net/minecraft/client/renderer/block/BlockAndTintGetter.d.ts'
import type { Material$Baked } from '../../../../../../../../net/minecraft/client/resources/model/sprite/Material$Baked.d.ts'
import type { BlockPos } from '../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockState } from '../../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export interface FabricBlockStateModelSet extends Object{
    getParticleMaterial(arg0: BlockState, arg1: BlockAndTintGetter, arg2: BlockPos): Material$Baked;
}