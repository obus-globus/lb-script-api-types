import type { PointFree } from '../../../../com/mojang/datafixers/functions/PointFree.d.ts'
import type { PointFreeRule } from '../../../../com/mojang/datafixers/functions/PointFreeRule.d.ts'
import type { Type } from '../../../../com/mojang/datafixers/types/Type.d.ts'
import type { DynamicOps } from '../../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Apply<A extends unknown, B extends unknown> extends PointFree<B> {
    static indent(paramarg0: number): string;
    constructor(arg0: PointFree<(param0: A) => B>, arg1: PointFree<A>)
    constructor(arg0: PointFree<(param0: A) => B>, arg1: PointFree<A>, arg2: Type<B>)
    // private arg: PointFree<A>;
    // private func: PointFree<(param0: A) => B>;
    // private type: Type<B>;
    all(arg0: PointFreeRule): Optional<PointFree<B>>;
    equals(arg0: Object | null): boolean;
    eval(): (param0: DynamicOps<Object>) => B;
    hashCode(): number;
    one(arg0: PointFreeRule): Optional<PointFree<B>>;
    toString(): string;
    toString(arg0: number): string;
    type(): Type<B>;
}