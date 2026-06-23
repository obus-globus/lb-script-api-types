import type { Supplier } from '../../../../com/google/common/base/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Suppliers$NonSerializableMemoizingSupplier<T extends unknown> extends Object implements Supplier<T> {
    constructor(delegate: () => T)
    // private delegate: () => T;
    // private lock: Object;
    // private value: T;
    get(): T;
    toString(): string;
}