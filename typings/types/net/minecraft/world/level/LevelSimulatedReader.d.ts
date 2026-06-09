import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockEntityType } from '../../../../net/minecraft/world/level/block/entity/BlockEntityType.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { Heightmap$Types } from '../../../../net/minecraft/world/level/levelgen/Heightmap$Types.d.ts'
import type { FluidState } from '../../../../net/minecraft/world/level/material/FluidState.d.ts'
export interface LevelSimulatedReader extends Object {
    getBlockEntity(pos: BlockPos, type: BlockEntityType<T>): Optional<T>;
    getHeightmapPos(type: Heightmap$Types, pos: BlockPos): BlockPos;
    isFluidAtPosition(pos: BlockPos, predicate: (param0: FluidState) => kotlin.Boolean): boolean;
    isStateAtPosition(pos: BlockPos, predicate: (param0: BlockState) => kotlin.Boolean): boolean;
}