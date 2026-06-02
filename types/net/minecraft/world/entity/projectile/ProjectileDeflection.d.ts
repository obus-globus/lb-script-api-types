import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RandomSource } from '../../../../../net/minecraft/util/RandomSource.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Projectile } from '../../../../../net/minecraft/world/entity/projectile/Projectile.d.ts'
export interface ProjectileDeflection extends Object{
    deflect(projectile: Projectile, entity: Entity, random: RandomSource): void;
}