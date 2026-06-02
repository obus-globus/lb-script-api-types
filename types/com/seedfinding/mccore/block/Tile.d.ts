import type { BlockState } from '../../../../com/seedfinding/mccore/block/BlockState.d.ts'
import type { NBTCompound } from '../../../../com/seedfinding/mccore/nbt/tag/NBTCompound.d.ts'
import type { BPos } from '../../../../com/seedfinding/mccore/util/pos/BPos.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Tile extends Object {
    constructor(arg0: BPos, arg1: BlockState, arg2: NBTCompound)
    readonly blockEntity: NBTCompound;
    readonly blockState: BlockState;
    readonly pos: BPos;
    copy(): Tile;
    getBlockEntity(): NBTCompound;
    getBlockState(): BlockState;
    getPos(): BPos;
    setBlockEntity(arg0: NBTCompound): void;
    setBlockState(arg0: BlockState): void;
    setPos(arg0: BPos): void;
}