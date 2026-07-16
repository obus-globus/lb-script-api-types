import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { BlockGetter } from '../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { LevelAccessor } from '../../../../../net/minecraft/world/level/LevelAccessor.d.ts'
import type { LevelReader } from '../../../../../net/minecraft/world/level/LevelReader.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { StateDefinition$Builder } from '../../../../../net/minecraft/world/level/block/state/StateDefinition$Builder.d.ts'
import type { BooleanProperty } from '../../../../../net/minecraft/world/level/block/state/properties/BooleanProperty.d.ts'
import type { IntegerProperty } from '../../../../../net/minecraft/world/level/block/state/properties/IntegerProperty.d.ts'
import type { FlowingFluid$SpreadContext } from '../../../../../net/minecraft/world/level/material/FlowingFluid$SpreadContext.d.ts'
import type { Fluid } from '../../../../../net/minecraft/world/level/material/Fluid.d.ts'
import type { FluidState } from '../../../../../net/minecraft/world/level/material/FluidState.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { VoxelShape } from '../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export abstract class FlowingFluid extends Fluid {
    static FALLING: BooleanProperty;
    static FLUID_STATE_REGISTRY: FluidState[];
    static LEVEL: IntegerProperty;
    constructor()
    // private shapes: Map<FluidState, VoxelShape>;
    // private affectsFlow(neighbourFluid: FluidState): boolean;
    beforeDestroyingBlock(level: LevelAccessor, pos: BlockPos, state: BlockState): void;
    // private calculateComplexFluidFlowDirections(arg0: ServerLevel, arg1: BlockPos, arg2: BlockState, arg3: BlockState[], arg4: Map<Object | null, Object | null>): void;
    canConvertToSource(level: ServerLevel): boolean;
    // private canMaybeFlowIntoBlock(arg0: Level, arg1: BlockState, arg2: BlockPos): boolean;
    // private canMaybePassThrough(level: BlockGetter, sourcePos: BlockPos, sourceState: BlockState, direction: Direction, testPos: BlockPos, testState: BlockState, testFluidState: FluidState): boolean;
    // private canPassThrough(arg0: BlockGetter, arg1: Fluid, arg2: BlockPos, arg3: BlockState, arg4: Direction, arg5: BlockPos, arg6: BlockState, arg7: FluidState): boolean;
    createFluidStateDefinition(builder: StateDefinition$Builder<Fluid, FluidState>): void;
    getAmount(fluidState: FluidState): number;
    // private getBlock(arg0: Level, arg1: BlockPos, arg2: BlockState[], arg3: number): BlockState;
    getDropOff(level: LevelReader): number;
    getFlow(level: BlockGetter, pos: BlockPos, fluidState: FluidState): Vec3;
    getFlowing(): Fluid;
    getFlowing(amount: number, falling: boolean): FluidState;
    getHeight(fluidState: FluidState, level: BlockGetter, pos: BlockPos): number;
    getNewLiquid(level: ServerLevel, pos: BlockPos, state: BlockState): FluidState;
    getOwnHeight(fluidState: FluidState): number;
    getShape(state: FluidState, level: BlockGetter, pos: BlockPos): VoxelShape;
    getSlopeDistance(level: LevelReader, pos: BlockPos, pass: number, from: Direction, state: BlockState, context: FlowingFluid$SpreadContext): number;
    getSlopeFindDistance(level: LevelReader): number;
    getSource(): Fluid;
    getSource(falling: boolean): FluidState;
    getSpread(level: ServerLevel, pos: BlockPos, state: BlockState): Map<Direction, FluidState>;
    getSpreadDelay(level: Level, pos: BlockPos, oldFluidState: FluidState, newFluidState: FluidState): number;
    // private isHoleBelow(arg0: LevelReader, arg1: { [key: string]: any }, arg2: number, arg3: BlockPos, arg4: BlockState): boolean;
    isSolidFace(level: BlockGetter, pos: BlockPos, direction: Direction): boolean;
    // private isSourceBlockOfThisType(state: FluidState): boolean;
    isWaterHole(arg0: BlockGetter, arg1: BlockPos, arg2: BlockState, arg3: BlockPos, arg4: BlockState): boolean;
    // private removeDirectionsWithoutHoleAccess(arg0: number, arg1: Map<Object | null, Object | null>): void;
    // private sourceNeighborCount(level: LevelReader, pos: BlockPos): number;
    spread(level: ServerLevel, pos: BlockPos, state: BlockState, fluidState: FluidState): void;
    spreadTo(level: LevelAccessor, pos: BlockPos, state: BlockState, direction: Direction, target: FluidState): void;
    // private spreadToSides(level: ServerLevel, pos: BlockPos, fluidState: FluidState, state: BlockState): void;
    tick(level: ServerLevel, pos: BlockPos, blockState: BlockState, fluidState: FluidState): void;
}