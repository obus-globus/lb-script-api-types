import type { Supplier } from '../../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class RenderStateDataKey<T extends Object | number | string | boolean> extends Object {
    static create(): RenderStateDataKey<Object>;
    static create(paramarg0: () => string): RenderStateDataKey<Object>;
    private constructor(arg0: () => string)
    // private name: () => string;
    toString(): string;
}