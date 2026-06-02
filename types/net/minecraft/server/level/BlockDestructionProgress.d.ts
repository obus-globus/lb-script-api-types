import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
export class BlockDestructionProgress extends Object implements Comparable<BlockDestructionProgress> {
    constructor(id: number, pos: BlockPos)
    readonly id: number;
    readonly pos: BlockPos;
    readonly progress: number;
    readonly updatedRenderTick: number;
    compareTo(o: BlockDestructionProgress): number;
    equals(o: Object | null): boolean;
    getId(): number;
    getPos(): BlockPos;
    getProgress(): number;
    getUpdatedRenderTick(): number;
    hashCode(): number;
    setProgress(progress: number): void;
    updateTick(tick: number): void;
}