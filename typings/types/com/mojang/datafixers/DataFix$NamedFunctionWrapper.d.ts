import type { DynamicOps } from '../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DataFix$NamedFunctionWrapper<A extends unknown, B extends unknown> extends Object implements Function<DynamicOps<Object>, (param0: A) => B> {
    static identity(): (param0: Object | null) => Object | null;
    constructor(arg0: string, arg1: (param0: DynamicOps<Object>) => Function<A, B>)
    // private delegate: (param0: DynamicOps<Object>) => Function<A, B>;
    // private name: string;
    andThen<V extends unknown>(arg0: (param0: Function<A, B>) => V): (param0: DynamicOps<Object>) => V;
    apply(arg0: DynamicOps<Object>): (param0: A) => B;
    compose<V extends unknown>(arg0: (param0: V) => DynamicOps<Object>): (param0: V) => Function<A, B>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
}