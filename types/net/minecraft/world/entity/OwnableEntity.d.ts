import type { Object } from '../../../../java/lang/Object.d.ts'
import type { EntityReference } from '../../../../net/minecraft/world/entity/EntityReference.d.ts'
import type { LivingEntity } from '../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
export interface OwnableEntity extends Object{
    getOwner(): LivingEntity;
    getOwnerReference(): EntityReference<LivingEntity>;
    getRootOwner(): LivingEntity;
    level(): Level;
}