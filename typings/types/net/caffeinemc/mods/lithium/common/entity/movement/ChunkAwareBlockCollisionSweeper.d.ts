import type { AbstractIterator } from '../../../../../../../com/google/common/collect/AbstractIterator.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos$MutableBlockPos } from '../../../../../../../net/minecraft/core/BlockPos$MutableBlockPos.d.ts'
import type { Entity } from '../../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Level } from '../../../../../../../net/minecraft/world/level/Level.d.ts'
import type { ChunkAccess } from '../../../../../../../net/minecraft/world/level/chunk/ChunkAccess.d.ts'
import type { LevelChunkSection } from '../../../../../../../net/minecraft/world/level/chunk/LevelChunkSection.d.ts'
import type { AABB } from '../../../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { CollisionContext } from '../../../../../../../net/minecraft/world/phys/shapes/CollisionContext.d.ts'
import type { VoxelShape } from '../../../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export abstract class ChunkAwareBlockCollisionSweeper<T extends unknown> extends AbstractIterator<T> {
    constructor(arg0: Level, arg1: Entity, arg2: AABB, arg3: boolean)
    // private box: AABB;
    // private cEndX: number;
    // private cEndZ: number;
    // private cIterated: number;
    // private cStartX: number;
    // private cStartZ: number;
    // private cTotalSize: number;
    // private cX: number;
    // private cY: number;
    // private cZ: number;
    // private cachedChunk: ChunkAccess;
    // private cachedChunkSection: LevelChunkSection;
    // private chunkX: number;
    // private chunkYIndex: number;
    // private chunkZ: number;
    // private context: CollisionContext;
    // private maxX: number;
    // private maxY: number;
    // private maxZ: number;
    // private minX: number;
    // private minY: number;
    // private minZ: number;
    // private pos: BlockPos$MutableBlockPos;
    // private sectionOversizedBlocks: boolean;
    // private shape: VoxelShape;
    // private world: Level;
    nextSection(): boolean;
}