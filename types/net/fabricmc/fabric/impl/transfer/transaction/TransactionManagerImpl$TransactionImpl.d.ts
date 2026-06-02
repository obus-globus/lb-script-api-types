import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Transaction } from '../../../../../../net/fabricmc/fabric/api/transfer/v1/transaction/Transaction.d.ts'
import type { Transaction$Lifecycle } from '../../../../../../net/fabricmc/fabric/api/transfer/v1/transaction/Transaction$Lifecycle.d.ts'
import type { TransactionContext } from '../../../../../../net/fabricmc/fabric/api/transfer/v1/transaction/TransactionContext.d.ts'
import type { TransactionContext$CloseCallback } from '../../../../../../net/fabricmc/fabric/api/transfer/v1/transaction/TransactionContext$CloseCallback.d.ts'
import type { TransactionContext$OuterCloseCallback } from '../../../../../../net/fabricmc/fabric/api/transfer/v1/transaction/TransactionContext$OuterCloseCallback.d.ts'
import type { TransactionContext$Result } from '../../../../../../net/fabricmc/fabric/api/transfer/v1/transaction/TransactionContext$Result.d.ts'
export class TransactionManagerImpl$TransactionImpl extends Object implements Transaction {
    static getCurrentUnsafe(): TransactionContext;
    static getLifecycle(): Transaction$Lifecycle;
    static isOpen(): boolean;
    static openNested(paramarg0: TransactionContext): Transaction;
    static openOuter(): Transaction;
    constructor(null_: TransactionManagerImpl$TransactionImpl, arg1: number)
    // private closeCallbacks: (param0: TransactionContext, param1: TransactionContext$Result) => void[];
    // private lifecycle: Transaction$Lifecycle;
    // private nestingDepth: number;
    abort(): void;
    addCloseCallback(arg0: (param0: TransactionContext, param1: TransactionContext$Result) => void): void;
    addOuterCloseCallback(arg0: (param0: TransactionContext$Result) => void): void;
    close(): void;
    // private close(arg0: TransactionContext$Result): void;
    commit(): void;
    getOpenTransaction(arg0: number): Transaction;
    nestingDepth(): number;
    openNested(): Transaction;
    toString(): string;
    validateCurrentTransaction(): void;
    // private validateOpen(): void;
}