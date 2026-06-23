import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Supplier } from '../../../../../../../org/spongepowered/include/com/google/common/base/Supplier.d.ts'
export class Suppliers$NonSerializableMemoizingSupplier<T extends unknown> extends Object implements Supplier<T> {
    constructor(arg0: () => T)
    // private delegate: () => T;
    // private initialized: boolean;
    // private value: T;
    get(): T;
    toString(): string;
}