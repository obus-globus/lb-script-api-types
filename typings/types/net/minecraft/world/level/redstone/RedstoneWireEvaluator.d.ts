import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { RedStoneWireBlock } from '../../../../../net/minecraft/world/level/block/RedStoneWireBlock.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { Orientation } from '../../../../../net/minecraft/world/level/redstone/Orientation.d.ts'
export abstract class RedstoneWireEvaluator extends Object {
    constructor(wireBlock: RedStoneWireBlock)
    // private wireBlock: RedStoneWireBlock;
    getBlockSignal(level: Level, pos: BlockPos): number;
    getIncomingWireSignal(level: Level, pos: BlockPos): number;
    getWireSignal(pos: BlockPos, state: BlockState): number;
    updatePowerStrength(level: Level, pos: BlockPos, state: BlockState, orientation: Orientation, skipShapeUpdates: boolean): void;
}