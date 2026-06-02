import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { IOSupplier } from '../../../../../org/apache/commons/io/function/IOSupplier.d.ts'
export abstract class AbstractSupplier<T extends Object | number | string | boolean, B extends AbstractSupplier<T, B>> extends Object implements IOSupplier<T> {
    constructor()
    asSupplier(): () => T;
    asThis(): B;
    getUnchecked(): T;
}