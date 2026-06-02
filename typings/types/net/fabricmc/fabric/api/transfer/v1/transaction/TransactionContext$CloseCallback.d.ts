import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { TransactionContext } from '../../../../../../../net/fabricmc/fabric/api/transfer/v1/transaction/TransactionContext.d.ts'
import type { TransactionContext$Result } from '../../../../../../../net/fabricmc/fabric/api/transfer/v1/transaction/TransactionContext$Result.d.ts'
export interface TransactionContext$CloseCallback extends Object{
    onClose(arg0: TransactionContext, arg1: TransactionContext$Result): void;
}