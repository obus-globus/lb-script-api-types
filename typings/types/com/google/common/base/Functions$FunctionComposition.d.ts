import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Functions$FunctionComposition<A extends Object | number | string | boolean, B extends Object | number | string | boolean, C extends Object | number | string | boolean> extends Object implements Function<A, C>, Serializable {
    constructor(g: (param0: Object) => boolean, f: (param0: Object) => boolean)
    // private f: (param0: Object) => boolean;
    // private g: (param0: Object) => boolean;
    apply(a: A): C;
    equals(obj: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}