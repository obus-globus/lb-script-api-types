import type { PointFree } from '../../../../com/mojang/datafixers/functions/PointFree.d.ts'
import type { Type } from '../../../../com/mojang/datafixers/types/Type.d.ts'
import type { RecursivePoint$RecursivePointType } from '../../../../com/mojang/datafixers/types/templates/RecursivePoint$RecursivePointType.d.ts'
import type { DynamicOps } from '../../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Out<A extends Object | number | string | boolean> extends PointFree<(param0: A) => A> {
    static indent(paramarg0: number): string;
    constructor(arg0: RecursivePoint$RecursivePointType<A>)
    // private type: RecursivePoint$RecursivePointType<A>;
    equals(arg0: Object | null): boolean;
    eval(): (param0: DynamicOps<Object>) => (param0: A) => A;
    hashCode(): number;
    toString(): string;
    toString(arg0: number): string;
    type(): Type<(param0: A) => A>;
}