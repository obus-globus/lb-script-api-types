import type { Supplier } from '../../../../io/jsonwebtoken/lang/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RedactedSupplier<T extends Object | number | string | boolean> extends Object implements Supplier<T> {
    static REDACTED_VALUE: string;
    constructor(arg0: T)
    // private value: T;
    equals(arg0: Object | null): boolean;
    get(): T;
    hashCode(): number;
    toString(): string;
}