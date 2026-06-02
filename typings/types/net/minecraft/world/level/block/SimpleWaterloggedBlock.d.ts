import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { SoundEvent } from '../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { BlockGetter } from '../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { LevelAccessor } from '../../../../../net/minecraft/world/level/LevelAccessor.d.ts'
import type { BucketPickup } from '../../../../../net/minecraft/world/level/block/BucketPickup.d.ts'
import type { LiquidBlockContainer } from '../../../../../net/minecraft/world/level/block/LiquidBlockContainer.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { Fluid } from '../../../../../net/minecraft/world/level/material/Fluid.d.ts'
import type { FluidState } from '../../../../../net/minecraft/world/level/material/FluidState.d.ts'
export interface SimpleWaterloggedBlock extends Object, BucketPickup, LiquidBlockContainer{
    canPlaceLiquid(user: LivingEntity, level: BlockGetter, pos: BlockPos, state: BlockState, type: Fluid): boolean;
    getPickupSound(): Optional<SoundEvent>;
    pickupBlock(user: LivingEntity, level: LevelAccessor, pos: BlockPos, state: BlockState): ItemStack;
    placeLiquid(level: LevelAccessor, pos: BlockPos, state: BlockState, fluidState: FluidState): boolean;
}