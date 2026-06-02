import type { AutoCloseable } from '../../../../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { TransactionContext } from '../../../../../../../net/fabricmc/fabric/api/transfer/v1/transaction/TransactionContext.d.ts'
export interface Transaction extends AutoCloseable, Object, TransactionContext{
    abort(): void;
    close(): void;
    commit(): void;
}