import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Supplier<T extends Object | number | string | boolean> extends Supplier<T>, Object{
    get(): T;
}