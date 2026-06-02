import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { RedStoneWireBlock } from '../../../../../net/minecraft/world/level/block/RedStoneWireBlock.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { Orientation } from '../../../../../net/minecraft/world/level/redstone/Orientation.d.ts'
import type { RedstoneWireEvaluator } from '../../../../../net/minecraft/world/level/redstone/RedstoneWireEvaluator.d.ts'
export class DefaultRedstoneWireEvaluator extends RedstoneWireEvaluator {
    constructor(wireBlock: RedStoneWireBlock)
    // private calculateTargetStrength(level: Level, pos: BlockPos): number;
    updatePowerStrength(level: Level, pos: BlockPos, state: BlockState, orientation: Orientation, skipShapeUpdates: boolean): void;
}