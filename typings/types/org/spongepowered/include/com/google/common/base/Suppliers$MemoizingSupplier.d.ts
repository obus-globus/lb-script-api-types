import type { Serializable } from '../../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Supplier } from '../../../../../../../org/spongepowered/include/com/google/common/base/Supplier.d.ts'
export class Suppliers$MemoizingSupplier<T extends unknown> extends Object implements Serializable, Supplier<T> {
    constructor(arg0: () => T)
    // private delegate: () => T;
    // private initialized: boolean;
    // private value: T;
    get(): T;
    toString(): string;
}