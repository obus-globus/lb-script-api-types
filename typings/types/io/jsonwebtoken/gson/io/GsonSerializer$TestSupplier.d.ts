import type { Supplier } from '../../../../io/jsonwebtoken/lang/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class GsonSerializer$TestSupplier<T extends unknown> extends Object implements Supplier<T> {
    private constructor(arg0: T)
    // private value: T;
    get(): T;
}