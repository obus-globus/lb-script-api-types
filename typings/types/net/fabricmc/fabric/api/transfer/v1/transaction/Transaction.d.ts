import type { AutoCloseable } from '../../../../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { TransactionContext } from '../../../../../../../net/fabricmc/fabric/api/transfer/v1/transaction/TransactionContext.d.ts'
import type { TransactionContext$CloseCallback } from '../../../../../../../net/fabricmc/fabric/api/transfer/v1/transaction/TransactionContext$CloseCallback.d.ts'
import type { TransactionContext$OuterCloseCallback } from '../../../../../../../net/fabricmc/fabric/api/transfer/v1/transaction/TransactionContext$OuterCloseCallback.d.ts'
import type { TransactionContext$Result } from '../../../../../../../net/fabricmc/fabric/api/transfer/v1/transaction/TransactionContext$Result.d.ts'
export interface Transaction extends AutoCloseable, Object, TransactionContext {
    abort(): void;
    addCloseCallback(arg0: (param0: TransactionContext, param1: TransactionContext$Result) => void): void;
    addOuterCloseCallback(arg0: (param0: TransactionContext$Result) => void): void;
    close(): void;
    commit(): void;
    getOpenTransaction(arg0: number): Transaction;
    nestingDepth(): number;
    openNested(): Transaction;
}