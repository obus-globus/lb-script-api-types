import type { BlockPosition } from '../../../../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
import type { IdAndData } from '../../../../../../../com/viaversion/viaversion/util/IdAndData.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class PendingBlockEntry extends Object {
    constructor(arg0: BlockPosition, arg1: IdAndData)
    readonly block: IdAndData;
    // private countdown: number;
    readonly position: BlockPosition;
    decrementAndCheckIsExpired(): boolean;
    getBlock(): IdAndData;
    getPosition(): BlockPosition;
}