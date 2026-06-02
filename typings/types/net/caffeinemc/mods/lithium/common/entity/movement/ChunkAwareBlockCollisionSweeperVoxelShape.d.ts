import type { ChunkAwareBlockCollisionSweeper } from '../../../../../../../net/caffeinemc/mods/lithium/common/entity/movement/ChunkAwareBlockCollisionSweeper.d.ts'
import type { Entity } from '../../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Level } from '../../../../../../../net/minecraft/world/level/Level.d.ts'
import type { AABB } from '../../../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { VoxelShape } from '../../../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export class ChunkAwareBlockCollisionSweeperVoxelShape extends ChunkAwareBlockCollisionSweeper<VoxelShape> {
    constructor(arg0: Level, arg1: Entity, arg2: AABB)
    constructor(arg0: Level, arg1: Entity, arg2: AABB, arg3: boolean)
    // private hideLastCollision: boolean;
    // private maxHitX: number;
    // private maxHitY: number;
    // private maxHitZ: number;
    // private maxShape: VoxelShape;
    collectAll(): VoxelShape[];
    computeNext(): VoxelShape;
    getLastCollision(): VoxelShape;
}