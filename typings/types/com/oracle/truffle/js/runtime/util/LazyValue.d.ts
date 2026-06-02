import type { AtomicReference } from '../../../../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class LazyValue<T extends Object | number | string | boolean> extends Object implements Supplier<T> {
    constructor(supplier: () => T)
    // private ref: AtomicReference<T>;
    // private supplier: () => T;
    get(): T;
    // private init(): T;
}