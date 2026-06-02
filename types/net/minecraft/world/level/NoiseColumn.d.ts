import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { BlockColumn } from '../../../../net/minecraft/world/level/chunk/BlockColumn.d.ts'
export class NoiseColumn extends Object implements BlockColumn {
    constructor(minY: number, column: BlockState[])
    // private column: BlockState[];
    // private minY: number;
    getBlock(blockY: number): BlockState;
    setBlock(blockY: number, state: BlockState): void;
}