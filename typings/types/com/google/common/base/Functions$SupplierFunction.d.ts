import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { Supplier } from '../../../../com/google/common/base/Supplier.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Functions$SupplierFunction<F extends unknown, T extends unknown> extends Object implements Function<F, T>, Serializable {
    private constructor(supplier: () => T)
    // private supplier: () => T;
    apply(input: F): T;
    equals(obj: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}