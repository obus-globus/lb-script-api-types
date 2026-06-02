import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Block } from '../../../../net/minecraft/world/level/block/Block.d.ts'
export class BlockEventData extends Record {
    // private block: Block;
    // private paramA: number;
    // private paramB: number;
    // private pos: BlockPos;
    block(): Block;
    equals(o: Object | null): boolean;
    hashCode(): number;
    paramA(): number;
    paramB(): number;
    pos(): BlockPos;
    toString(): string;
}