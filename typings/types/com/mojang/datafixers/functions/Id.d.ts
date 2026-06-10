import type { PointFree } from '../../../../com/mojang/datafixers/functions/PointFree.d.ts'
import type { Type } from '../../../../com/mojang/datafixers/types/Type.d.ts'
import type { DynamicOps } from '../../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Id<A extends Object | number | string | boolean> extends PointFree<(param0: A) => A> {
    static indent(paramarg0: number): string;
    constructor(arg0: Type<(param0: A) => A>)
    // private type: Type<(param0: A) => A>;
    equals(arg0: Object | null): boolean;
    eval(): (param0: DynamicOps<Object>) => Function<A, A>;
    hashCode(): number;
    toString(): string;
    toString(arg0: number): string;
    type(): Type<(param0: A) => A>;
}