import type { Supplier } from '../../../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class ExtraModelKey<T extends unknown> extends Object {
    static create<T extends unknown>(): ExtraModelKey<T>;
    static create<T extends unknown>(paramarg0: () => string): ExtraModelKey<T>;
    private constructor(arg0: () => string)
    // private name: () => string;
    toString(): string;
}