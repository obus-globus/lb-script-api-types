import type { Supplier } from '../../../../com/google/common/base/Supplier.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Suppliers$SupplierOfInstance<T extends unknown> extends Object implements Supplier<T>, Serializable {
    constructor(instance: T)
    // private instance: T;
    equals(obj: Object | null): boolean;
    get(): T;
    hashCode(): number;
    toString(): string;
}