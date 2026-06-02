import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { LivingEntity } from '../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
import type { BlockHitResult } from '../../../../net/minecraft/world/phys/BlockHitResult.d.ts'
export interface DispensibleContainerItem extends Object{
    checkExtraContent(user: LivingEntity, level: Level, itemStack: ItemStack, pos: BlockPos): void;
    emptyContents(user: LivingEntity, level: Level, pos: BlockPos, hitResult: BlockHitResult): boolean;
}