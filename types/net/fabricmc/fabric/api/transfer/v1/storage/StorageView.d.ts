import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { TransactionContext } from '../../../../../../../net/fabricmc/fabric/api/transfer/v1/transaction/TransactionContext.d.ts'
export interface StorageView<T extends Object | number | string | boolean> extends Object{
    extract(arg0: T, arg1: number, arg2: TransactionContext): number;
    getAmount(): number;
    getCapacity(): number;
    getResource(): T;
    getUnderlyingView(): StorageView<T>;
    isResourceBlank(): boolean;
}