import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ChunkAwareBlockCollisionSweeperVoxelShape } from '../../../../../../net/caffeinemc/mods/lithium/common/entity/movement/ChunkAwareBlockCollisionSweeperVoxelShape.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { CollisionGetter } from '../../../../../../net/minecraft/world/level/CollisionGetter.d.ts'
import type { EntityGetter } from '../../../../../../net/minecraft/world/level/EntityGetter.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { WorldBorder } from '../../../../../../net/minecraft/world/level/border/WorldBorder.d.ts'
import type { AABB } from '../../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { VoxelShape } from '../../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export class LithiumEntityCollisions extends Object {
    static EPSILON: number;
    static addEntityCollisionsIfRequired(paramarg0: boolean, paramarg1: Entity, paramarg2: Level, paramarg3: VoxelShape[], paramarg4: AABB): boolean;
    static addLastBlockCollisionIfRequired(paramarg0: boolean, paramarg1: ChunkAwareBlockCollisionSweeperVoxelShape, paramarg2: VoxelShape[]): boolean;
    static addWorldBorderCollisionIfRequired(paramarg0: boolean, paramarg1: Entity, paramarg2: VoxelShape[], paramarg3: AABB): boolean;
    static appendEntityCollisions(paramarg0: VoxelShape[], paramarg1: Level, paramarg2: Entity, paramarg3: AABB): void;
    static appendWorldBorderCollision(paramarg0: VoxelShape[], paramarg1: Entity, paramarg2: AABB): void;
    static doesBoxCollideWithBlocks(paramarg0: Level, paramarg1: Entity, paramarg2: AABB): boolean;
    static doesBoxCollideWithHardEntities(paramarg0: EntityGetter, paramarg1: Entity, paramarg2: AABB): boolean;
    static doesBoxCollideWithWorldBorder(paramarg0: CollisionGetter, paramarg1: Entity, paramarg2: AABB): boolean;
    static getBlockCollisions(paramarg0: Level, paramarg1: Entity, paramarg2: AABB): VoxelShape[];
    static getEntityWorldBorderCollisionIterable(paramarg0: EntityGetter, paramarg1: Entity, paramarg2: AABB, paramarg3: boolean): VoxelShape[];
    static getSmallerBoxForSingleAxisMovement(paramarg0: Vec3, paramarg1: AABB, paramarg2: number, paramarg3: number, paramarg4: number): AABB;
    static getSupportingCollisionForEntity(paramarg0: Level, paramarg1: Entity, paramarg2: AABB): VoxelShape;
    static getWorldBorderCollision(paramarg0: CollisionGetter, paramarg1: Entity, paramarg2: AABB): VoxelShape;
    static isWithinWorldBorder(paramarg0: WorldBorder, paramarg1: AABB): boolean;
    constructor()
}