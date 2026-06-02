import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { StorageView } from '../../../../../../../../net/fabricmc/fabric/api/transfer/v1/storage/StorageView.d.ts'
import type { TransferVariant } from '../../../../../../../../net/fabricmc/fabric/api/transfer/v1/storage/TransferVariant.d.ts'
import type { TransactionContext } from '../../../../../../../../net/fabricmc/fabric/api/transfer/v1/transaction/TransactionContext.d.ts'
export class BlankVariantView<T extends TransferVariant<Object>> extends Object implements StorageView<T> {
    constructor(arg0: T, arg1: number)
    // private blankVariant: T;
    readonly capacity: number;
    extract(arg0: T, arg1: number, arg2: TransactionContext): number;
    getAmount(): number;
    getCapacity(): number;
    getResource(): T;
    getUnderlyingView(): StorageView<T>;
    isResourceBlank(): boolean;
}