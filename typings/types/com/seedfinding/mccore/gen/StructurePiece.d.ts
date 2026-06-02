import type { Tile } from '../../../../com/seedfinding/mccore/block/Tile.d.ts'
import type { PieceInfo } from '../../../../com/seedfinding/mccore/gen/PieceInfo.d.ts'
import type { StructurePlacement } from '../../../../com/seedfinding/mccore/gen/StructurePlacement.d.ts'
import type { BPos } from '../../../../com/seedfinding/mccore/util/pos/BPos.d.ts'
import type { JRand } from '../../../../com/seedfinding/mcseed/rand/JRand.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class StructurePiece extends Object {
    constructor(arg0: PieceInfo)
    readonly info: PieceInfo;
    // private placement: StructurePlacement;
    // private position: BPos;
    generate(arg0: JRand): void;
    getInfo(): PieceInfo;
    getJigsaws(arg0: JRand): Tile[];
}