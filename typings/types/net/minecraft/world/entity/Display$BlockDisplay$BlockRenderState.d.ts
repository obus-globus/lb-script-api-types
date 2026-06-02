import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class Display$BlockDisplay$BlockRenderState extends Record {
    constructor(blockState: BlockState)
    // private blockState: BlockState;
    blockState(): BlockState;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}