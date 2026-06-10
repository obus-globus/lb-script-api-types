import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { Supplier } from '../../../../com/google/common/base/Supplier.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Suppliers$SupplierComposition<F extends Object | number | string | boolean, T extends Object | number | string | boolean> extends Object implements Supplier<T>, Serializable {
    constructor(function_: (param0: Object) => boolean, supplier: () => F)
    // private function: (param0: Object) => boolean;
    // private supplier: () => F;
    equals(obj: Object | null): boolean;
    get(): T;
    hashCode(): number;
    toString(): string;
}