import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Level } from '../../../../../../../net/minecraft/world/level/Level.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { RedstoneWireEvaluator } from '../../../../../../../net/minecraft/world/level/redstone/RedstoneWireEvaluator.d.ts'
export class RedstoneWirePowerCalculations extends Object {
    static getNeighborBlockSignal(paramarg0: Block, paramarg1: RedstoneWireEvaluator, paramarg2: Level, paramarg3: BlockPos): number;
    static getNeighborSignal(paramarg0: Block, paramarg1: RedstoneWireEvaluator, paramarg2: Level, paramarg3: BlockPos, paramarg4: boolean, paramarg5: boolean): number;
    static getNeighborWireSignal(paramarg0: Block, paramarg1: RedstoneWireEvaluator, paramarg2: Level, paramarg3: BlockPos): number;
    constructor()
}