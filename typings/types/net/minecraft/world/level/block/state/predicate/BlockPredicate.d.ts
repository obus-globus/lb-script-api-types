import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class BlockPredicate extends Object implements Predicate<BlockState> {
    static forBlock(paramblock: Block): BlockPredicate;
    constructor(block: Block)
    // private block: Block;
    and(arg0: (param0: BlockState) => boolean): (param0: BlockState) => boolean;
    negate(): (param0: BlockState) => boolean;
    or(arg0: (param0: BlockState) => boolean): (param0: BlockState) => boolean;
    test(input: BlockState): boolean;
}