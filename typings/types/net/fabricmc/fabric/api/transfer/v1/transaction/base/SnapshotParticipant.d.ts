import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { TransactionContext } from '../../../../../../../../net/fabricmc/fabric/api/transfer/v1/transaction/TransactionContext.d.ts'
import type { TransactionContext$CloseCallback } from '../../../../../../../../net/fabricmc/fabric/api/transfer/v1/transaction/TransactionContext$CloseCallback.d.ts'
import type { TransactionContext$OuterCloseCallback } from '../../../../../../../../net/fabricmc/fabric/api/transfer/v1/transaction/TransactionContext$OuterCloseCallback.d.ts'
import type { TransactionContext$Result } from '../../../../../../../../net/fabricmc/fabric/api/transfer/v1/transaction/TransactionContext$Result.d.ts'
export abstract class SnapshotParticipant<T extends unknown> extends Object implements TransactionContext$CloseCallback, TransactionContext$OuterCloseCallback {
    constructor()
    // private snapshots: T[];
    afterOuterClose(arg0: TransactionContext$Result): void;
    createSnapshot(): T;
    onClose(arg0: TransactionContext, arg1: TransactionContext$Result): void;
    onFinalCommit(): void;
    readSnapshot(arg0: T): void;
    releaseSnapshot(arg0: T): void;
    updateSnapshots(arg0: TransactionContext): void;
}