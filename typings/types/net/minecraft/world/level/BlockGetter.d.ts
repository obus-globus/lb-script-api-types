import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { BiFunction } from '../../../../java/util/function/BiFunction.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FabricBlockGetter } from '../../../../net/fabricmc/fabric/api/blockgetter/v2/FabricBlockGetter.d.ts'
import type { BlockGetterMixin } from '../../../../net/fabricmc/fabric/mixin/blockgetter/BlockGetterMixin.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { ClipBlockStateContext } from '../../../../net/minecraft/world/level/ClipBlockStateContext.d.ts'
import type { ClipContext } from '../../../../net/minecraft/world/level/ClipContext.d.ts'
import type { LevelHeightAccessor } from '../../../../net/minecraft/world/level/LevelHeightAccessor.d.ts'
import type { Biome } from '../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { BlockEntity } from '../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockEntityType } from '../../../../net/minecraft/world/level/block/entity/BlockEntityType.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { FluidState } from '../../../../net/minecraft/world/level/material/FluidState.d.ts'
import type { AABB } from '../../../../net/minecraft/world/phys/AABB.d.ts'
import type { BlockHitResult } from '../../../../net/minecraft/world/phys/BlockHitResult.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { VoxelShape } from '../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export interface BlockGetter extends Object, FabricBlockGetter, BlockGetterMixin, LevelHeightAccessor {
    clip(arg0: ClipContext): BlockHitResult;
    clipWithInteractionOverride(from: Vec3, to: Vec3, pos: BlockPos, blockShape: VoxelShape, blockState: BlockState): BlockHitResult;
    getBiomeFabric(arg0: BlockPos): Holder<Biome>;
    getBlockEntity(pos: BlockPos): BlockEntity;
    getBlockEntity<T extends BlockEntity>(pos: BlockPos, type: BlockEntityType<T>): Optional<T>;
    getBlockEntityRenderData(arg0: BlockPos): Object;
    getBlockFloorHeight(pos: BlockPos): number;
    getBlockFloorHeight(blockShape: VoxelShape, belowBlockShape: () => VoxelShape): number;
    getBlockState(pos: BlockPos): BlockState;
    getBlockStates(box: AABB): Stream<BlockState>;
    getFluidState(pos: BlockPos): FluidState;
    getLightEmission(pos: BlockPos): number;
    getMaxSectionY(): number;
    getMaxY(): number;
    getMinSectionY(): number;
    getSectionIndex(blockY: number): number;
    getSectionIndexFromSectionY(sectionY: number): number;
    getSectionYFromSectionIndex(sectionIndex: number): number;
    getSectionsCount(): number;
    hasBiomes(): boolean;
    isBlockInLine(c: ClipBlockStateContext): BlockHitResult;
    isInsideBuildHeight(blockY: number): boolean;
    isInsideBuildHeight(pos: BlockPos): boolean;
    isOutsideBuildHeight(blockY: number): boolean;
    isOutsideBuildHeight(pos: BlockPos): boolean;
    // private lithium$blockHitFactory(arg0: ClipContext): (param0: Object, param1: Object) => Object;
}