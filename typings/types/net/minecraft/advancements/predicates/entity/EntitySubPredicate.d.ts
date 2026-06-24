import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export interface EntitySubPredicate extends Object{
    and(other: EntitySubPredicate): EntitySubPredicate;
    matches(entity: Entity, level: ServerLevel, position: Vec3): boolean;
}