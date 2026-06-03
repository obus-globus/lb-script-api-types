import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { BiFunction } from '../../../../../../../java/util/function/BiFunction.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../../../java/util/function/Supplier.d.ts'
import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Entity } from '../../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { BlockGetter } from '../../../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { BlockGetter$BlockStepVisitor } from '../../../../../../../net/minecraft/world/level/BlockGetter$BlockStepVisitor.d.ts'
import type { ClipBlockStateContext } from '../../../../../../../net/minecraft/world/level/ClipBlockStateContext.d.ts'
import type { ClipContext } from '../../../../../../../net/minecraft/world/level/ClipContext.d.ts'
import type { CollisionGetter } from '../../../../../../../net/minecraft/world/level/CollisionGetter.d.ts'
import type { BlockEntity } from '../../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockEntityType } from '../../../../../../../net/minecraft/world/level/block/entity/BlockEntityType.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { WorldBorder } from '../../../../../../../net/minecraft/world/level/border/WorldBorder.d.ts'
import type { FluidState } from '../../../../../../../net/minecraft/world/level/material/FluidState.d.ts'
import type { AABB } from '../../../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { BlockHitResult } from '../../../../../../../net/minecraft/world/phys/BlockHitResult.d.ts'
import type { Vec3 } from '../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { CollisionContext } from '../../../../../../../net/minecraft/world/phys/shapes/CollisionContext.d.ts'
import type { VoxelShape } from '../../../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export class SingleBlockBlockView extends Record implements BlockGetter, CollisionGetter {
    static forEachBlockIntersectedBetween(paramfrom: Vec3, paramto: Vec3, paramaabbAtTarget: AABB, paramvisitor: (param0: BlockPos, param1: number) => kotlin.Boolean): boolean;
    static of(paramarg0: BlockState, paramarg1: BlockPos): SingleBlockBlockView;
    static traverseBlocks(paramfrom: Vec3, paramto: Vec3, paramcontext: Object | null, paramconsumer: (param0: Object | null, param1: BlockPos) => Object | null, parammissFactory: (param0: Object | null) => Object | null): Object | null;
    constructor(state: BlockState, blockPos: BlockPos)
    // private blockPos: BlockPos;
    // private state: BlockState;
    blockPos(): BlockPos;
    // private borderCollision(source: Entity, box: AABB): VoxelShape;
    clip(arg0: ClipContext): BlockHitResult;
    clipIncludingBorder(c: ClipContext): BlockHitResult;
    clipWithInteractionOverride(from: Vec3, to: Vec3, pos: BlockPos, blockShape: VoxelShape, blockState: BlockState): BlockHitResult;
    collidesWithSuffocatingBlock(arg0: Entity, arg1: AABB): boolean;
    collidesWithSuffocatingBlock(source: Entity, box: AABB): boolean;
    equals(arg0: Object | null): boolean;
    findFreePosition(arg0: Entity, arg1: VoxelShape, arg2: Vec3, arg3: number, arg4: number, arg5: number): Optional<Vec3>;
    findFreePosition(source: Entity, allowedCenters: VoxelShape, preferredCenter: Vec3, sizeX: number, sizeY: number, sizeZ: number): Optional<Vec3>;
    findSupportingBlock(source: Entity, box: AABB): Optional<BlockPos>;
    getBlockAndLiquidCollisions(source: Entity, box: AABB): VoxelShape[];
    getBlockCollisions(arg0: Entity, arg1: AABB): VoxelShape[];
    getBlockCollisions(source: Entity, box: AABB): VoxelShape[];
    // private getBlockCollisionsFromContext(source: CollisionContext, box: AABB): VoxelShape[];
    getBlockEntity(arg0: BlockPos): BlockEntity;
    getBlockEntity(pos: BlockPos, type: BlockEntityType<T>): Optional<T>;
    getBlockEntity(pos: BlockPos, type: BlockEntityType<T>): Optional<T>;
    getBlockFloorHeight(pos: BlockPos): number;
    getBlockFloorHeight(blockShape: VoxelShape, belowBlockShape: () => VoxelShape): number;
    getBlockState(arg0: BlockPos): BlockState;
    getBlockStates(box: AABB): Stream<BlockState>;
    getChunkForCollisions(arg0: number, arg1: number): BlockGetter;
    getCollisions(arg0: Entity, arg1: AABB): VoxelShape[];
    getCollisions(source: Entity, box: AABB): VoxelShape[];
    getEntityCollisions(arg0: Entity, arg1: AABB): VoxelShape[];
    getFluidState(arg0: BlockPos): FluidState;
    getHeight(): number;
    getLightEmission(pos: BlockPos): number;
    getMinY(): number;
    getPreMoveCollisions(source: Entity, box: AABB, oldPos: Vec3): VoxelShape[];
    getWorldBorder(): WorldBorder;
    hashCode(): number;
    isBlockInLine(c: ClipBlockStateContext): BlockHitResult;
    isUnobstructed(arg0: Entity): boolean;
    isUnobstructed(arg0: Entity, arg1: VoxelShape): boolean;
    isUnobstructed(arg0: BlockState, arg1: BlockPos, arg2: CollisionContext): boolean;
    isUnobstructed(ignore: Entity): boolean;
    isUnobstructed(source: Entity, shape: VoxelShape): boolean;
    isUnobstructed(state: BlockState, pos: BlockPos, context: CollisionContext): boolean;
    // private lithium$blockHitFactory(arg0: ClipContext): (param0: Object, param1: Object) => Object;
    noBlockCollision(entity: Entity, aabb: AABB): boolean;
    noBlockCollision(entity: Entity, aabb: AABB, alwaysCollideWithFluids: boolean): boolean;
    noBorderCollision(entity: Entity, aabb: AABB): boolean;
    noCollision(source: Entity): boolean;
    noCollision(arg0: Entity, arg1: AABB): boolean;
    noCollision(entity: Entity, aabb: AABB, alwaysCollideWithFluids: boolean): boolean;
    noCollision(aabb: AABB): boolean;
    noCollision(source: Entity): boolean;
    noCollision(entity: Entity, aabb: AABB): boolean;
    noCollision(entity: Entity, aabb: AABB, alwaysCollideWithFluids: boolean): boolean;
    noCollision(aabb: AABB): boolean;
    noEntityCollision(entity: Entity, aabb: AABB): boolean;
    state(): BlockState;
    toString(): string;
}