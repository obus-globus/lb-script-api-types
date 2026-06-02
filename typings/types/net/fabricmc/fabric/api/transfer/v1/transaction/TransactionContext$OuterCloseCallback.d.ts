import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { TransactionContext$Result } from '../../../../../../../net/fabricmc/fabric/api/transfer/v1/transaction/TransactionContext$Result.d.ts'
export interface TransactionContext$OuterCloseCallback extends Object{
    afterOuterClose(arg0: TransactionContext$Result): void;
}