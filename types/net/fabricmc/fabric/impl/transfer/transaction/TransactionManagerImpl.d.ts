import type { Thread } from '../../../../../../java/lang/Thread.d.ts'
import type { ThreadLocal } from '../../../../../../java/lang/ThreadLocal.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Transaction } from '../../../../../../net/fabricmc/fabric/api/transfer/v1/transaction/Transaction.d.ts'
import type { Transaction$Lifecycle } from '../../../../../../net/fabricmc/fabric/api/transfer/v1/transaction/Transaction$Lifecycle.d.ts'
import type { TransactionContext } from '../../../../../../net/fabricmc/fabric/api/transfer/v1/transaction/TransactionContext.d.ts'
import type { TransactionContext$OuterCloseCallback } from '../../../../../../net/fabricmc/fabric/api/transfer/v1/transaction/TransactionContext$OuterCloseCallback.d.ts'
import type { TransactionContext$Result } from '../../../../../../net/fabricmc/fabric/api/transfer/v1/transaction/TransactionContext$Result.d.ts'
import type { TransactionManagerImpl$TransactionImpl } from '../../../../../../net/fabricmc/fabric/impl/transfer/transaction/TransactionManagerImpl$TransactionImpl.d.ts'
export class TransactionManagerImpl extends Object {
    static MANAGERS: ThreadLocal<TransactionManagerImpl>;
    constructor()
    // private currentDepth: number;
    // private outerCloseCallbacks: (param0: TransactionContext$Result) => void[];
    // private stack: TransactionManagerImpl$TransactionImpl[];
    // private thread: Thread;
    getCurrentUnsafe(): TransactionContext;
    getLifecycle(): Transaction$Lifecycle;
    isOpen(): boolean;
    open(): Transaction;
    openOuter(): Transaction;
    validateCurrentThread(): void;
}