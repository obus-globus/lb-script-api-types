import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { StorageView } from '../../../../../../../../net/fabricmc/fabric/api/transfer/v1/storage/StorageView.d.ts'
export class FilteringStorage<T extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static extractOnlyOf<T extends unknown>(paramarg0: StorageView<T>[]): StorageView<T>[];
    static insertOnlyOf<T extends unknown>(paramarg0: StorageView<T>[]): StorageView<T>[];
    static of<T extends unknown>(paramarg0: StorageView<T>[], paramarg1: boolean, paramarg2: boolean): StorageView<T>[];
    static readOnlyOf<T extends unknown>(paramarg0: StorageView<T>[]): StorageView<T>[];
}