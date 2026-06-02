import type { Class } from '../../../../java/lang/Class.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Player } from '../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { EntityTypeTest } from '../../../../net/minecraft/world/level/entity/EntityTypeTest.d.ts'
import type { AABB } from '../../../../net/minecraft/world/phys/AABB.d.ts'
import type { VoxelShape } from '../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export interface EntityGetter extends Object{
    getEntities(except: Entity, bb: AABB): Entity[];
    getEntities(except: Entity, bb: AABB, selector: (param0: Entity) => kotlin.Boolean): Entity[];
    getEntities(type: EntityTypeTest<Entity, T>, bb: AABB, selector: (param0: T) => kotlin.Boolean): T[];
    getEntitiesOfClass(baseClass: Class<T>, bb: AABB): T[];
    getEntitiesOfClass(baseClass: Class<T>, bb: AABB, selector: (param0: T) => kotlin.Boolean): T[];
    getEntityCollisions(source: Entity, testArea: AABB): VoxelShape[];
    getNearestPlayer(x: number, y: number, z: number, range: number, predicate: (param0: Entity) => kotlin.Boolean): Player;
    getNearestPlayer(x: number, y: number, z: number, maxDist: number, filterOutCreative: boolean): Player;
    getNearestPlayer(source: Entity, maxDist: number): Player;
    getPlayerByUUID(uuid: UUID): Player;
    hasNearbyAlivePlayer(x: number, y: number, z: number, range: number): boolean;
    isUnobstructed(source: Entity, shape: VoxelShape): boolean;
    players(): Player[];
}