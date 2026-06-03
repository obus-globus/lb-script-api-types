import type { BlockPalette } from '../../../../com/seedfinding/mccore/block/BlockPalette.d.ts'
import type { BlockState } from '../../../../com/seedfinding/mccore/block/BlockState.d.ts'
import type { Tile } from '../../../../com/seedfinding/mccore/block/Tile.d.ts'
import type { PieceInfo } from '../../../../com/seedfinding/mccore/gen/PieceInfo.d.ts'
import type { NBTCompound } from '../../../../com/seedfinding/mccore/nbt/tag/NBTCompound.d.ts'
import type { BPos } from '../../../../com/seedfinding/mccore/util/pos/BPos.d.ts'
export class PieceInfo$TileView extends Tile {
    constructor(arg0: PieceInfo, arg1: BPos)
    // private parent: PieceInfo;
    readonly pos: BPos;
    copy(): Tile;
    copy(arg0: BlockPalette): Tile;
    copy(arg0: number): Tile;
    getBlockEntity(): NBTCompound;
    getBlockState(): BlockState;
    getBlockState(arg0: BlockPalette): BlockState;
    getBlockState(arg0: number): BlockState;
    getPos(): BPos;
    getState(): number;
    setBlockEntity(arg0: NBTCompound): void;
}