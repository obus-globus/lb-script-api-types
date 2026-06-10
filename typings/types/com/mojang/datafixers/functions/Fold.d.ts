import type { RewriteResult } from '../../../../com/mojang/datafixers/RewriteResult.d.ts'
import type { PointFree } from '../../../../com/mojang/datafixers/functions/PointFree.d.ts'
import type { PointFreeRule } from '../../../../com/mojang/datafixers/functions/PointFreeRule.d.ts'
import type { Type } from '../../../../com/mojang/datafixers/types/Type.d.ts'
import type { Algebra } from '../../../../com/mojang/datafixers/types/families/Algebra.d.ts'
import type { RecursivePoint$RecursivePointType } from '../../../../com/mojang/datafixers/types/templates/RecursivePoint$RecursivePointType.d.ts'
import type { DynamicOps } from '../../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Fold<A extends Object | number | string | boolean, B extends Object | number | string | boolean> extends PointFree<(param0: A) => B> {
    static indent(paramarg0: number): string;
    constructor(arg0: RecursivePoint$RecursivePointType<A>, arg1: RecursivePoint$RecursivePointType<B>, arg2: Algebra, arg3: number)
    // private aType: RecursivePoint$RecursivePointType<A>;
    // private algebra: Algebra;
    // private bType: RecursivePoint$RecursivePointType<B>;
    // private index: number;
    all(arg0: PointFreeRule): Optional<PointFree<(param0: A) => B>>;
    // private cap<FB extends Object | number | string | boolean>(arg0: RewriteResult<Object, FB>): PointFree<(param0: A) => B>;
    equals(arg0: Object | null): boolean;
    eval(): (param0: DynamicOps<Object>) => Function<A, B>;
    hashCode(): number;
    toString(): string;
    toString(arg0: number): string;
    type(): Type<(param0: A) => B>;
}