import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
import type { BlockGetter } from '../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { LevelReader } from '../../../../../net/minecraft/world/level/LevelReader.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { Fluid } from '../../../../../net/minecraft/world/level/material/Fluid.d.ts'
import type { FluidState } from '../../../../../net/minecraft/world/level/material/FluidState.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { VoxelShape } from '../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export class EmptyFluid extends Fluid {
    static FLUID_STATE_REGISTRY: FluidState[];
    constructor()
    canBeReplacedWith(state: FluidState, level: BlockGetter, pos: BlockPos, other: Fluid, direction: Direction): boolean;
    createLegacyBlock(fluidState: FluidState): BlockState;
    getAmount(fluidState: FluidState): number;
    getBucket(): Item;
    getExplosionResistance(): number;
    getFlow(level: BlockGetter, pos: BlockPos, fluidState: FluidState): Vec3;
    getHeight(fluidState: FluidState, level: BlockGetter, pos: BlockPos): number;
    getOwnHeight(fluidState: FluidState): number;
    getShape(state: FluidState, level: BlockGetter, pos: BlockPos): VoxelShape;
    getTickDelay(level: LevelReader): number;
    isEmpty(): boolean;
    isSource(fluidState: FluidState): boolean;
}