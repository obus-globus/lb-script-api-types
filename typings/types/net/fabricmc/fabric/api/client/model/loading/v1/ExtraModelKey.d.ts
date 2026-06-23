import type { Supplier } from '../../../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class ExtraModelKey<T extends unknown> extends Object {
    static create(): ExtraModelKey<Object>;
    static create(paramarg0: () => string): ExtraModelKey<Object>;
    private constructor(arg0: () => string)
    // private name: () => string;
    toString(): string;
}