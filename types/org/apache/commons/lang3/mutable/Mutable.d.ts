import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Mutable<T extends Object | number | string | boolean> extends Supplier<T>, Object{
    get(): T;
    getValue(): T;
    setValue(arg0: T): void;
}