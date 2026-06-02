import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { SoundEvent } from '../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { LevelAccessor } from '../../../../../net/minecraft/world/level/LevelAccessor.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export interface BucketPickup extends Object{
    getPickupSound(): Optional<SoundEvent>;
    pickupBlock(user: LivingEntity, level: LevelAccessor, pos: BlockPos, state: BlockState): ItemStack;
}