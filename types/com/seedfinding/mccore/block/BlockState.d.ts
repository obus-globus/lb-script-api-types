import type { Block } from '../../../../com/seedfinding/mccore/block/Block.d.ts'
import type { NBTCompound } from '../../../../com/seedfinding/mccore/nbt/tag/NBTCompound.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class BlockState extends Object {
    constructor(arg0: Block)
    constructor(arg0: Block, arg1: NBTCompound)
    readonly block: Block;
    readonly properties: NBTCompound;
    equals(arg0: Object | null): boolean;
    getBlock(): Block;
    getProperties(): NBTCompound;
    hashCode(): number;
    toString(): string;
}