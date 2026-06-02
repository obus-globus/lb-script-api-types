import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Projectile } from '../../../../../net/minecraft/world/entity/projectile/Projectile.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export interface Projectile$ProjectileFactory<T extends Projectile> extends Object{
    create(level: ServerLevel, entity: LivingEntity, itemStack: ItemStack): T;
}