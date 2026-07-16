import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { StorageView } from '../../../../../../../net/fabricmc/fabric/api/transfer/v1/storage/StorageView.d.ts'
import type { ResourceAmount } from '../../../../../../../net/fabricmc/fabric/api/transfer/v1/storage/base/ResourceAmount.d.ts'
import type { TransactionContext } from '../../../../../../../net/fabricmc/fabric/api/transfer/v1/transaction/TransactionContext.d.ts'
export class StorageUtil extends Object {
    static extractAny<T extends unknown>(paramarg0: StorageView<T>[], paramarg1: number, paramarg2: TransactionContext): ResourceAmount<T>;
    static findExtractableContent<T extends unknown>(paramarg0: StorageView<T>[], paramarg1: (param0: T) => boolean, paramarg2: TransactionContext): ResourceAmount<T>;
    static findExtractableContent<T extends unknown>(paramarg0: StorageView<T>[], paramarg1: TransactionContext): ResourceAmount<T>;
    static findExtractableResource<T extends unknown>(paramarg0: StorageView<T>[], paramarg1: (param0: T) => boolean, paramarg2: TransactionContext): T;
    static findExtractableResource<T extends unknown>(paramarg0: StorageView<T>[], paramarg1: TransactionContext): T;
    static findStoredResource<T extends unknown>(paramarg0: StorageView<T>[]): T;
    static findStoredResource<T extends unknown>(paramarg0: StorageView<T>[], paramarg1: (param0: T) => boolean): T;
    static getRedstoneSignal<T extends unknown>(paramarg0: StorageView<T>[]): number;
    static insertStacking<T extends unknown>(paramarg0: T[][], paramarg1: T, paramarg2: number, paramarg3: TransactionContext): number;
    static move<T extends unknown>(paramarg0: StorageView<T>[], paramarg1: StorageView<T>[], paramarg2: (param0: T) => boolean, paramarg3: number, paramarg4: TransactionContext): number;
    static simulateExtract<T extends unknown, S extends unknown & StorageView<T>[] & StorageView<T>>(paramarg0: S, paramarg1: T, paramarg2: number, paramarg3: TransactionContext): number;
    static simulateExtract<T extends unknown>(paramarg0: StorageView<T>[], paramarg1: T, paramarg2: number, paramarg3: TransactionContext): number;
    static simulateExtract<T extends unknown>(paramarg0: StorageView<T>, paramarg1: T, paramarg2: number, paramarg3: TransactionContext): number;
    static simulateInsert<T extends unknown>(paramarg0: StorageView<T>[], paramarg1: T, paramarg2: number, paramarg3: TransactionContext): number;
    static tryInsertStacking<T extends unknown>(paramarg0: StorageView<T>[], paramarg1: T, paramarg2: number, paramarg3: TransactionContext): number;
    private constructor()
}