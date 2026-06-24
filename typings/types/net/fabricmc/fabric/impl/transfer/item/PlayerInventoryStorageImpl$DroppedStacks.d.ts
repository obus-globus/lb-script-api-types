import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ItemVariant } from '../../../../../../net/fabricmc/fabric/api/transfer/v1/item/ItemVariant.d.ts'
import type { TransactionContext } from '../../../../../../net/fabricmc/fabric/api/transfer/v1/transaction/TransactionContext.d.ts'
import type { SnapshotParticipant } from '../../../../../../net/fabricmc/fabric/api/transfer/v1/transaction/base/SnapshotParticipant.d.ts'
import type { PlayerInventoryStorageImpl$DroppedStacks$Entry } from '../../../../../../net/fabricmc/fabric/impl/transfer/item/PlayerInventoryStorageImpl$DroppedStacks$Entry.d.ts'
export class PlayerInventoryStorageImpl$DroppedStacks extends SnapshotParticipant<number> {
    private constructor(null_: (Object | null)[])
    // private entries: PlayerInventoryStorageImpl$DroppedStacks$Entry[];
    addDrop(arg0: ItemVariant, arg1: number, arg2: boolean, arg3: boolean, arg4: TransactionContext): void;
    createSnapshot(): number;
    onFinalCommit(): void;
    readSnapshot(arg0: number): void;
}