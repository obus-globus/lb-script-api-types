import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { StorageView } from '../../../../../../../../net/fabricmc/fabric/api/transfer/v1/storage/StorageView.d.ts'
import type { TransactionContext } from '../../../../../../../../net/fabricmc/fabric/api/transfer/v1/transaction/TransactionContext.d.ts'
export class FilteringStorage$FilteringStorageView extends Object implements StorageView<T> {
    private constructor(null_: FilteringStorage$FilteringStorageView)
    // private backingView: StorageView<T>;
    extract<T extends Object | number | string | boolean>(arg0: T, arg1: number, arg2: TransactionContext): number;
    getAmount(): number;
    getCapacity(): number;
    getResource<T extends Object | number | string | boolean>(): T;
    getUnderlyingView(): StorageView<T>;
    getUnderlyingView(): StorageView<T>;
    isResourceBlank(): boolean;
}