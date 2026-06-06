import type { StoredObject } from '../../../../../../../com/viaversion/viaversion/api/connection/StoredObject.d.ts'
import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { BlockPosition } from '../../../../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
export class BlockDigStorage extends StoredObject {
    constructor(arg0: UserConnection, arg1: BlockPosition, arg2: number)
    // private facing: number;
    // private position: BlockPosition;
    tick: number;
}