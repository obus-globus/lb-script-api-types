import type { Supplier } from '../../../../com/google/common/base/Supplier.d.ts'
import type { ObjectInputStream } from '../../../../java/io/ObjectInputStream.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Suppliers$MemoizingSupplier<T extends unknown> extends Object implements Supplier<T>, Serializable {
    constructor(delegate: () => T)
    // private delegate: () => T;
    // private initialized: boolean;
    // private lock: Object;
    // private value: T;
    get(): T;
    // private readObject(in_: ObjectInputStream): void;
    toString(): string;
}