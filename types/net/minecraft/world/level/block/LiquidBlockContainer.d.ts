import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { BlockGetter } from '../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { LevelAccessor } from '../../../../../net/minecraft/world/level/LevelAccessor.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { Fluid } from '../../../../../net/minecraft/world/level/material/Fluid.d.ts'
import type { FluidState } from '../../../../../net/minecraft/world/level/material/FluidState.d.ts'
export interface LiquidBlockContainer extends Object{
    canPlaceLiquid(user: LivingEntity, level: BlockGetter, pos: BlockPos, state: BlockState, type: Fluid): boolean;
    placeLiquid(level: LevelAccessor, pos: BlockPos, state: BlockState, fluidState: FluidState): boolean;
}