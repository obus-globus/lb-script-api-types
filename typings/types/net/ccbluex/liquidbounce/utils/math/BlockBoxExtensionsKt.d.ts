import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { ChunkPos } from '../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { ChunkAccess } from '../../../../../net/minecraft/world/level/chunk/ChunkAccess.d.ts'
import type { BoundingBox } from '../../../../../net/minecraft/world/level/levelgen/structure/BoundingBox.d.ts'
import type { AABB } from '../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class BlockBoxExtensionsKt extends Object {
    static centerOnSide(self: BoundingBox, side: Direction): Vec3;
    static contains(self: BoundingBox, other: BoundingBox): boolean;
    static copy(self: BoundingBox, minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number): BoundingBox;
    static expandToBoundingBox(self: BlockPos, offsetX: number, offsetY: number, offsetZ: number): BoundingBox;
    static getBoundingBox(paramarg0: BoundingBox): AABB;
    static getBox(paramarg0: BoundingBox): AABB;
    static getFrom(paramarg0: BoundingBox): BlockPos;
    static getSize(paramarg0: BoundingBox): number;
    static getTo(paramarg0: BoundingBox): BlockPos;
    static iterate(self: BoundingBox): BlockPos[];
    static iterator(self: BoundingBox): Iterator<BlockPos>;
    static toBlockBox(chunkAccess: ChunkPos): BoundingBox;
    static toBlockBox(paramarg0: ChunkPos, paramarg1: number): BoundingBox;
    static toBlockBox(self: ChunkPos, minY: number, maxY: number): BoundingBox;
    static toBlockBox(self: ChunkAccess): BoundingBox;
}