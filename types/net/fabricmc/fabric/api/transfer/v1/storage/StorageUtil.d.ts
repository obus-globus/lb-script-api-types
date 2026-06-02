import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { StorageView } from '../../../../../../../net/fabricmc/fabric/api/transfer/v1/storage/StorageView.d.ts'
import type { ResourceAmount } from '../../../../../../../net/fabricmc/fabric/api/transfer/v1/storage/base/ResourceAmount.d.ts'
import type { TransactionContext } from '../../../../../../../net/fabricmc/fabric/api/transfer/v1/transaction/TransactionContext.d.ts'
export class StorageUtil extends Object {
    static extractAny(paramarg0: StorageView<T>[], paramarg1: number, paramarg2: TransactionContext): ResourceAmount<Object>;
    static findExtractableContent(paramarg0: StorageView<T>[], paramarg1: (param0: Object | null) => kotlin.Boolean, paramarg2: TransactionContext): ResourceAmount<Object>;
    static findExtractableContent(paramarg0: StorageView<T>[], paramarg1: TransactionContext): ResourceAmount<Object>;
    static findExtractableResource(paramarg0: StorageView<T>[], paramarg1: (param0: Object | null) => kotlin.Boolean, paramarg2: TransactionContext): Object | null;
    static findExtractableResource(paramarg0: StorageView<T>[], paramarg1: TransactionContext): Object | null;
    static findStoredResource(paramarg0: StorageView<T>[]): Object | null;
    static findStoredResource(paramarg0: StorageView<T>[], paramarg1: (param0: Object | null) => kotlin.Boolean): Object | null;
    static getRedstoneSignal(paramarg0: StorageView<T>[]): number;
    static insertStacking(paramarg0: (Object | null)[], paramarg1: Object | null, paramarg2: number, paramarg3: TransactionContext): number;
    static move(paramarg0: StorageView<T>[], paramarg1: StorageView<T>[], paramarg2: (param0: Object | null) => kotlin.Boolean, paramarg3: number, paramarg4: TransactionContext): number;
    static simulateExtract(paramarg0: Object | null, paramarg1: Object | null, paramarg2: number, paramarg3: TransactionContext): number;
    static simulateExtract(paramarg0: StorageView<T>[], paramarg1: Object | null, paramarg2: number, paramarg3: TransactionContext): number;
    static simulateExtract(paramarg0: StorageView<Object>, paramarg1: Object | null, paramarg2: number, paramarg3: TransactionContext): number;
    static simulateInsert(paramarg0: StorageView<T>[], paramarg1: Object | null, paramarg2: number, paramarg3: TransactionContext): number;
    static tryInsertStacking(paramarg0: StorageView<T>[], paramarg1: Object | null, paramarg2: number, paramarg3: TransactionContext): number;
    private constructor()
}