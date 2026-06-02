import type { DynamicOps } from '../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DataFix$NamedFunctionWrapper<A extends Object | number | string | boolean, B extends Object | number | string | boolean> extends Object implements Function<DynamicOps<Object>, (param0: A) => B> {
    static identity(): (param0: Object | null) => Object | null;
    constructor(arg0: string, arg1: (param0: DynamicOps<Object>) => (param0: A) => B)
    // private delegate: (param0: DynamicOps<Object>) => (param0: A) => B;
    // private name: string;
    andThen(arg0: (param0: R) => V): (param0: T) => V;
    apply(arg0: DynamicOps<Object>): (param0: A) => B;
    compose(arg0: (param0: V) => T): (param0: V) => R;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
}