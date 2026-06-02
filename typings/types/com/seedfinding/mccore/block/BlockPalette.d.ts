import type { Block } from '../../../../com/seedfinding/mccore/block/Block.d.ts'
import type { BlockState } from '../../../../com/seedfinding/mccore/block/BlockState.d.ts'
import type { NBTList } from '../../../../com/seedfinding/mccore/nbt/tag/NBTList.d.ts'
import type { MCVersion } from '../../../../com/seedfinding/mccore/version/MCVersion.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class BlockPalette extends Object {
    constructor()
    constructor(arg0: BlockState[])
    // private palette: BlockState[];
    fromTag(arg0: MCVersion, arg1: NBTList): BlockPalette;
    get(arg0: number): BlockState;
    indexOf(arg0: Block): number;
    indexOf(arg0: BlockState): number;
    replace(arg0: Block, arg1: Block): boolean;
    replace(arg0: Block, arg1: BlockState): boolean;
    replace(arg0: BlockState, arg1: Block): boolean;
    replace(arg0: BlockState, arg1: BlockState): boolean;
    toString(): string;
    toTag(): NBTList;
}