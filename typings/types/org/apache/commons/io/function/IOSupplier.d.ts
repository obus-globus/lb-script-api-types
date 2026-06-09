import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface IOSupplier<T extends Object | number | string | boolean> extends Object {
    asSupplier(): () => T;
    get(): T;
    getUnchecked(): T;
}