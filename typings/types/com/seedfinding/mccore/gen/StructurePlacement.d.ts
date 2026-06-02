import type { Tile } from '../../../../com/seedfinding/mccore/block/Tile.d.ts'
import type { BlockBox } from '../../../../com/seedfinding/mccore/util/block/BlockBox.d.ts'
import type { BlockMirror } from '../../../../com/seedfinding/mccore/util/block/BlockMirror.d.ts'
import type { BlockRotation } from '../../../../com/seedfinding/mccore/util/block/BlockRotation.d.ts'
import type { BPos } from '../../../../com/seedfinding/mccore/util/pos/BPos.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class StructurePlacement extends Object {
    constructor()
    box: BlockBox;
    mirror: BlockMirror;
    pivot: BPos;
    rotation: BlockRotation;
    transform(arg0: Tile): Tile;
    transformAndSet(arg0: Tile): Tile;
}