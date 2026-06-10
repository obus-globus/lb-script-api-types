import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { BiFunction } from '../../../../java/util/function/BiFunction.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockGetter } from '../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { BlockGetter$BlockStepVisitor } from '../../../../net/minecraft/world/level/BlockGetter$BlockStepVisitor.d.ts'
import type { ClipBlockStateContext } from '../../../../net/minecraft/world/level/ClipBlockStateContext.d.ts'
import type { ClipContext } from '../../../../net/minecraft/world/level/ClipContext.d.ts'
import type { BlockEntity } from '../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockEntityType } from '../../../../net/minecraft/world/level/block/entity/BlockEntityType.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { FluidState } from '../../../../net/minecraft/world/level/material/FluidState.d.ts'
import type { AABB } from '../../../../net/minecraft/world/phys/AABB.d.ts'
import type { BlockHitResult } from '../../../../net/minecraft/world/phys/BlockHitResult.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { VoxelShape } from '../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export class EmptyBlockGetter extends Enum<EmptyBlockGetter> implements BlockGetter {
    static INSTANCE: EmptyBlockGetter;
    static forEachBlockIntersectedBetween(paramfrom: Vec3, paramto: Vec3, paramaabbAtTarget: AABB, paramvisitor: (param0: BlockPos, param1: number) => boolean): boolean;
    static traverseBlocks(paramfrom: Vec3, paramto: Vec3, paramcontext: Object | null, paramconsumer: (param0: Object | null, param1: BlockPos) => Object | null, parammissFactory: (param0: Object | null) => Object | null): Object | null;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): EmptyBlockGetter;
    static values(): (Object | null)[];
    private constructor()
    clip(arg0: ClipContext): BlockHitResult;
    clipWithInteractionOverride(from: Vec3, to: Vec3, pos: BlockPos, blockShape: VoxelShape, blockState: BlockState): BlockHitResult;
    getBlockEntity<T extends BlockEntity>(pos: BlockPos, type: BlockEntityType<T>): Optional<T>;
    getBlockEntity(pos: BlockPos): BlockEntity;
    getBlockFloorHeight(pos: BlockPos): number;
    getBlockFloorHeight(blockShape: VoxelShape, belowBlockShape: () => VoxelShape): number;
    getBlockState(pos: BlockPos): BlockState;
    getBlockStates(box: AABB): Stream<BlockState>;
    getFluidState(pos: BlockPos): FluidState;
    getHeight(): number;
    getLightEmission(pos: BlockPos): number;
    getMinY(): number;
    isBlockInLine(c: ClipBlockStateContext): BlockHitResult;
    // private lithium$blockHitFactory(arg0: ClipContext): (param0: Object, param1: Object) => Object;
    name(): "INSTANCE";
}