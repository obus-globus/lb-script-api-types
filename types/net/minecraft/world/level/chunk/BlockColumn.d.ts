import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export interface BlockColumn extends Object{
    getBlock(blockY: number): BlockState;
    setBlock(blockY: number, state: BlockState): void;
}