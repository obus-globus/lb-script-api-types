import type { PointFree } from '../../../../com/mojang/datafixers/functions/PointFree.d.ts'
import type { Type } from '../../../../com/mojang/datafixers/types/Type.d.ts'
import type { DynamicOps } from '../../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class FunctionWrapper<A extends unknown, B extends unknown> extends PointFree<(param0: A) => B> {
    static indent(paramarg0: number): string;
    constructor(arg0: string, arg1: (param0: DynamicOps<Object>) => Function<A, B>, arg2: Type<A>, arg3: Type<B>)
    // private fun: (param0: DynamicOps<Object>) => Function<A, B>;
    // private name: string;
    // private type: Type<(param0: A) => B>;
    equals(arg0: Object | null): boolean;
    eval(): (param0: DynamicOps<Object>) => Function<A, B>;
    hashCode(): number;
    toString(): string;
    toString(arg0: number): string;
    type(): Type<(param0: A) => B>;
}