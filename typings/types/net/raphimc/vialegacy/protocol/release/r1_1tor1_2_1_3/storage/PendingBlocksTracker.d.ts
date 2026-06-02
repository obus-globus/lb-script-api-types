import type { StoredObject } from '../../../../../../../com/viaversion/viaversion/api/connection/StoredObject.d.ts'
import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { BlockPosition } from '../../../../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
import type { IdAndData } from '../../../../../../../com/viaversion/viaversion/util/IdAndData.d.ts'
import type { PendingBlockEntry } from '../../../../../../../net/raphimc/vialegacy/protocol/release/r1_1tor1_2_1_3/model/PendingBlockEntry.d.ts'
export class PendingBlocksTracker extends StoredObject {
    constructor(arg0: UserConnection)
    // private pendingBlockEntries: PendingBlockEntry[];
    addPending(arg0: BlockPosition, arg1: IdAndData): void;
    clear(): void;
    markReceived(arg0: BlockPosition): void;
    markReceived(arg0: BlockPosition, arg1: BlockPosition): void;
    tick(): void;
}