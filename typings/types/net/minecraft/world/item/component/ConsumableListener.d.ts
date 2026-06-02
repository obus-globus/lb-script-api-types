import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Consumable } from '../../../../../net/minecraft/world/item/component/Consumable.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
export interface ConsumableListener extends Object{
    onConsume(level: Level, user: LivingEntity, stack: ItemStack, consumable: Consumable): void;
}