import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { ConsumeEffect$Type } from '../../../../../net/minecraft/world/item/consume_effects/ConsumeEffect$Type.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
export interface ConsumeEffect extends Object{
    apply(level: Level, stack: ItemStack, user: LivingEntity): boolean;
    getType(): ConsumeEffect$Type<ConsumeEffect>;
}