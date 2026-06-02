import type { AbstractIterator } from '../../../../com/google/common/collect/AbstractIterator.d.ts'
import type { BiFunction } from '../../../../java/util/function/BiFunction.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos$MutableBlockPos } from '../../../../net/minecraft/core/BlockPos$MutableBlockPos.d.ts'
import type { Cursor3D } from '../../../../net/minecraft/core/Cursor3D.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { BlockGetter } from '../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { CollisionGetter } from '../../../../net/minecraft/world/level/CollisionGetter.d.ts'
import type { AABB } from '../../../../net/minecraft/world/phys/AABB.d.ts'
import type { CollisionContext } from '../../../../net/minecraft/world/phys/shapes/CollisionContext.d.ts'
import type { VoxelShape } from '../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export class BlockCollisions<T extends Object | number | string | boolean> extends AbstractIterator<T> {
    constructor(collisionGetter: CollisionGetter, source: Entity, box: AABB, onlySuffocatingBlocks: boolean, resultProvider: (param0: BlockPos$MutableBlockPos, param1: VoxelShape) => T)
    constructor(collisionGetter: CollisionGetter, context: CollisionContext, box: AABB, onlySuffocatingBlocks: boolean, resultProvider: (param0: BlockPos$MutableBlockPos, param1: VoxelShape) => T)
    // private box: AABB;
    // private cachedBlockGetter: BlockGetter;
    // private cachedBlockGetterPos: number;
    // private collisionGetter: CollisionGetter;
    // private context: CollisionContext;
    // private cursor: Cursor3D;
    // private entityShape: VoxelShape;
    // private onlySuffocatingBlocks: boolean;
    // private pos: BlockPos$MutableBlockPos;
    // private resultProvider: (param0: BlockPos$MutableBlockPos, param1: VoxelShape) => T;
    computeNext(): T;
    // private getChunk(x: number, z: number): BlockGetter;
}