import type { Object } from '../../../../java/lang/Object.d.ts'
import type { LivingEntity } from '../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export interface ItemOwner extends Object{
    asLivingEntity(): LivingEntity;
    getVisualRotationYInDegrees(): number;
    level(): Level;
    position(): Vec3;
}