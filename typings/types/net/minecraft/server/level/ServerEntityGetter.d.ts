import type { Class } from '../../../../java/lang/Class.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { TagKey } from '../../../../net/minecraft/tags/TagKey.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EntityType } from '../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { LivingEntity } from '../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { TargetingConditions } from '../../../../net/minecraft/world/entity/ai/targeting/TargetingConditions.d.ts'
import type { Player } from '../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { EntityGetter } from '../../../../net/minecraft/world/level/EntityGetter.d.ts'
import type { AABB } from '../../../../net/minecraft/world/phys/AABB.d.ts'
import type { VoxelShape } from '../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export interface ServerEntityGetter extends Object, EntityGetter {
    getEntities(except: Entity, bb: AABB): Entity[];
    getEntitiesOfClass<T extends Entity>(baseClass: Class<T>, bb: AABB): T[];
    getEntitiesOfClass<T extends Entity>(baseClass: Class<T>, bb: AABB, selector: (param0: T) => boolean): T[];
    getEntityCollisions(source: Entity, testArea: AABB): VoxelShape[];
    getLevel(): ServerLevel;
    getNearbyEntities<T extends LivingEntity>(type: Class<T>, targetConditions: TargetingConditions, source: LivingEntity, bb: AABB): T[];
    getNearbyPlayers(targetConditions: TargetingConditions, source: LivingEntity, bb: AABB): Player[];
    getNearestEntity<T extends Entity>(entities: T[], x: number, y: number, z: number): T;
    getNearestEntity<T extends LivingEntity>(entities: T[], targetConditions: TargetingConditions, source: LivingEntity, x: number, y: number, z: number): T;
    getNearestEntity<T extends LivingEntity>(type: Class<T>, targetConditions: TargetingConditions, source: LivingEntity, x: number, y: number, z: number, bb: AABB): T;
    getNearestEntity(tag: TagKey<EntityType<any>>, targetConditions: TargetingConditions, source: LivingEntity, x: number, y: number, z: number, bb: AABB): LivingEntity;
    getNearestPlayer(x: number, y: number, z: number, range: number, predicate: (param0: Entity) => boolean): Player;
    getNearestPlayer(x: number, y: number, z: number, maxDist: number, filterOutCreative: boolean): Player;
    getNearestPlayer(source: Entity, maxDist: number): Player;
    getNearestPlayer(targetConditions: TargetingConditions, x: number, y: number, z: number): Player;
    getNearestPlayer(targetConditions: TargetingConditions, source: LivingEntity): Player;
    getNearestPlayer(targetConditions: TargetingConditions, source: LivingEntity, x: number, y: number, z: number): Player;
    getPlayerByUUID(uuid: UUID): Player;
    hasNearbyAlivePlayer(x: number, y: number, z: number, range: number): boolean;
    isUnobstructed(source: Entity, shape: VoxelShape): boolean;
}