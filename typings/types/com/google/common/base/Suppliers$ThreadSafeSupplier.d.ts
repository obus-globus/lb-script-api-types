import type { Supplier } from '../../../../com/google/common/base/Supplier.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Suppliers$ThreadSafeSupplier<T extends unknown> extends Object implements Supplier<T>, Serializable {
    constructor(delegate: () => T)
    // private delegate: () => T;
    get(): T;
    toString(): string;
}