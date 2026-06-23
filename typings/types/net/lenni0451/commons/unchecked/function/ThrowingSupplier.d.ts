import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ThrowingSupplier<T extends unknown> extends Object {
    get(): T;
    toSupplier(): () => T;
    tryGet(): T;
}