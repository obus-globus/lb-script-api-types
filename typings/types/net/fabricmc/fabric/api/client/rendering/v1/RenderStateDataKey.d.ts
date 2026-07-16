import type { Supplier } from '../../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class RenderStateDataKey<T extends unknown> extends Object {
    static create<T extends unknown>(): RenderStateDataKey<T>;
    static create<T extends unknown>(paramarg0: () => string): RenderStateDataKey<T>;
    private constructor(arg0: () => string)
    // private name: () => string;
    toString(): string;
}