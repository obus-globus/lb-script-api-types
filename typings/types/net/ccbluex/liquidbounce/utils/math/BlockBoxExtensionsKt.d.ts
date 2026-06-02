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
    static centerOnSide(paramarg0: BoundingBox, paramarg1: Direction): Vec3;
    static contains(paramarg0: BoundingBox, paramarg1: BoundingBox): boolean;
    static copy(paramarg0: BoundingBox, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): BoundingBox;
    static expandToBoundingBox(paramarg0: BlockPos, paramarg1: number, paramarg2: number, paramarg3: number): BoundingBox;
    static getBoundingBox(paramarg0: BoundingBox): AABB;
    static getBox(paramarg0: BoundingBox): AABB;
    static getFrom(paramarg0: BoundingBox): BlockPos;
    static getSize(paramarg0: BoundingBox): number;
    static getTo(paramarg0: BoundingBox): BlockPos;
    static iterate(paramarg0: BoundingBox): BlockPos[];
    static iterator(paramarg0: BoundingBox): Iterator<BlockPos>;
    static toBlockBox(paramarg0: ChunkPos): BoundingBox;
    static toBlockBox(paramarg0: ChunkPos, paramarg1: number): BoundingBox;
    static toBlockBox(paramarg0: ChunkPos, paramarg1: number, paramarg2: number): BoundingBox;
    static toBlockBox(paramarg0: ChunkAccess): BoundingBox;
}