import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { RedStoneWireBlock } from '../../../../../net/minecraft/world/level/block/RedStoneWireBlock.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { Orientation } from '../../../../../net/minecraft/world/level/redstone/Orientation.d.ts'
import type { RedstoneWireEvaluator } from '../../../../../net/minecraft/world/level/redstone/RedstoneWireEvaluator.d.ts'
export class ExperimentalRedstoneWireEvaluator extends RedstoneWireEvaluator {
    constructor(wireBlock: RedStoneWireBlock)
    // private updatedWires: { [key: string]: any };
    // private wiresToTurnOff: BlockPos[];
    // private wiresToTurnOn: BlockPos[];
    // private calculateCurrentChanges(level: Level, initialPosition: BlockPos, initialOrientation: Orientation): void;
    // private causeNeighborUpdates(level: Level): void;
    // private enqueueNeighborWire(level: Level, pos: BlockPos, newFromPower: number, orientation: Orientation, allowTurningOff: boolean): void;
    getWireSignal(pos: BlockPos, state: BlockState): number;
    // private propagateChangeToNeighbors(level: Level, pos: BlockPos, newPower: number, orientation: Orientation, allowTurningOff: boolean): void;
    // private setPower(pos: BlockPos, newPower: number, orientation: Orientation): void;
    updatePowerStrength(level: Level, initialPos: BlockPos, ignored: BlockState, orientation: Orientation, shapeUpdateWiresAroundInitialPosition: boolean): void;
}