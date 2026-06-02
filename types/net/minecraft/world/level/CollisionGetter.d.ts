import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { BiFunction } from '../../../../java/util/function/BiFunction.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { BlockGetter } from '../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { ClipBlockStateContext } from '../../../../net/minecraft/world/level/ClipBlockStateContext.d.ts'
import type { ClipContext } from '../../../../net/minecraft/world/level/ClipContext.d.ts'
import type { BlockEntityType } from '../../../../net/minecraft/world/level/block/entity/BlockEntityType.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { WorldBorder } from '../../../../net/minecraft/world/level/border/WorldBorder.d.ts'
import type { AABB } from '../../../../net/minecraft/world/phys/AABB.d.ts'
import type { BlockHitResult } from '../../../../net/minecraft/world/phys/BlockHitResult.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { CollisionContext } from '../../../../net/minecraft/world/phys/shapes/CollisionContext.d.ts'
import type { VoxelShape } from '../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export interface CollisionGetter extends Object, BlockGetter{
    // private borderCollision(source: Entity, box: AABB): VoxelShape;
    clip(arg0: ClipContext): BlockHitResult;
    clipIncludingBorder(c: ClipContext): BlockHitResult;
    clipWithInteractionOverride(from: Vec3, to: Vec3, pos: BlockPos, blockShape: VoxelShape, blockState: BlockState): BlockHitResult;
    collidesWithSuffocatingBlock(source: Entity, box: AABB): boolean;
    findFreePosition(source: Entity, allowedCenters: VoxelShape, preferredCenter: Vec3, sizeX: number, sizeY: number, sizeZ: number): Optional<Vec3>;
    findSupportingBlock(source: Entity, box: AABB): Optional<BlockPos>;
    getBlockAndLiquidCollisions(source: Entity, box: AABB): VoxelShape[];
    getBlockCollisions(source: Entity, box: AABB): VoxelShape[];
    // private getBlockCollisionsFromContext(source: CollisionContext, box: AABB): VoxelShape[];
    getBlockEntity(pos: BlockPos, type: BlockEntityType<T>): Optional<T>;
    getBlockFloorHeight(pos: BlockPos): number;
    getBlockFloorHeight(blockShape: VoxelShape, belowBlockShape: () => VoxelShape): number;
    getBlockStates(box: AABB): Stream<BlockState>;
    getChunkForCollisions(chunkX: number, chunkZ: number): BlockGetter;
    getCollisions(source: Entity, box: AABB): VoxelShape[];
    getEntityCollisions(source: Entity, testArea: AABB): VoxelShape[];
    getLightEmission(pos: BlockPos): number;
    getPreMoveCollisions(source: Entity, box: AABB, oldPos: Vec3): VoxelShape[];
    getWorldBorder(): WorldBorder;
    isBlockInLine(c: ClipBlockStateContext): BlockHitResult;
    isUnobstructed(ignore: Entity): boolean;
    isUnobstructed(source: Entity, shape: VoxelShape): boolean;
    isUnobstructed(state: BlockState, pos: BlockPos, context: CollisionContext): boolean;
    // private lithium$blockHitFactory(arg0: ClipContext): (param0: Object, param1: Object) => Object;
    noBlockCollision(entity: Entity, aabb: AABB): boolean;
    noBlockCollision(entity: Entity, aabb: AABB, alwaysCollideWithFluids: boolean): boolean;
    noBorderCollision(entity: Entity, aabb: AABB): boolean;
    noCollision(source: Entity): boolean;
    noCollision(entity: Entity, aabb: AABB): boolean;
    noCollision(entity: Entity, aabb: AABB, alwaysCollideWithFluids: boolean): boolean;
    noCollision(aabb: AABB): boolean;
    noEntityCollision(entity: Entity, aabb: AABB): boolean;
}