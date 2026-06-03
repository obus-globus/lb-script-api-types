import type { Supplier as Supplier_2 } from '../../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface Supplier<T extends Object | number | string | boolean> extends Supplier_2<T>, Object{
    get(): T;
}