import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { BiFunction } from '../../../../java/util/function/BiFunction.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../net/minecraft/core/Direction.d.ts'
import type { BlockGetter } from '../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { ClipBlockStateContext } from '../../../../net/minecraft/world/level/ClipBlockStateContext.d.ts'
import type { ClipContext } from '../../../../net/minecraft/world/level/ClipContext.d.ts'
import type { BlockEntityType } from '../../../../net/minecraft/world/level/block/entity/BlockEntityType.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { AABB } from '../../../../net/minecraft/world/phys/AABB.d.ts'
import type { BlockHitResult } from '../../../../net/minecraft/world/phys/BlockHitResult.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { VoxelShape } from '../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export interface SignalGetter extends Object, BlockGetter{
    clip(arg0: ClipContext): BlockHitResult;
    clipWithInteractionOverride(from: Vec3, to: Vec3, pos: BlockPos, blockShape: VoxelShape, blockState: BlockState): BlockHitResult;
    getBestNeighborSignal(pos: BlockPos): number;
    getBlockEntity(pos: BlockPos, type: BlockEntityType<T>): Optional<T>;
    getBlockFloorHeight(pos: BlockPos): number;
    getBlockFloorHeight(blockShape: VoxelShape, belowBlockShape: () => VoxelShape): number;
    getBlockStates(box: AABB): Stream<BlockState>;
    getControlInputSignal(pos: BlockPos, direction: Direction, onlyDiodes: boolean): number;
    getDirectSignal(pos: BlockPos, direction: Direction): number;
    getDirectSignalTo(pos: BlockPos): number;
    getLightEmission(pos: BlockPos): number;
    getSignal(pos: BlockPos, direction: Direction): number;
    hasNeighborSignal(blockPos: BlockPos): boolean;
    hasSignal(pos: BlockPos, direction: Direction): boolean;
    isBlockInLine(c: ClipBlockStateContext): BlockHitResult;
    // private lithium$blockHitFactory(arg0: ClipContext): (param0: Object, param1: Object) => Object;
}