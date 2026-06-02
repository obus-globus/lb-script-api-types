import type { BlockState } from '../../../../com/seedfinding/mccore/block/BlockState.d.ts'
import type { BlockDirection } from '../../../../com/seedfinding/mccore/util/block/BlockDirection.d.ts'
import type { BlockRotation } from '../../../../com/seedfinding/mccore/util/block/BlockRotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class JigsawHelper extends Object {
    static getFacing(paramarg0: BlockState): BlockDirection;
    static getRotation(paramarg0: BlockState): BlockDirection;
    static rotate(paramarg0: BlockState, paramarg1: BlockRotation): void;
    constructor()
}