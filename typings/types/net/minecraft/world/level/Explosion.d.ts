import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { LivingEntity } from '../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Explosion$BlockInteraction } from '../../../../net/minecraft/world/level/Explosion$BlockInteraction.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export interface Explosion extends Object{
    canTriggerBlocks(): boolean;
    center(): Vec3;
    getBlockInteraction(): Explosion$BlockInteraction;
    getDirectSourceEntity(): Entity;
    getIndirectSourceEntity(): LivingEntity;
    level(): ServerLevel;
    radius(): number;
    shouldAffectBlocklikeEntities(): boolean;
}