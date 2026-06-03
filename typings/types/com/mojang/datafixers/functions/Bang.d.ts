import type { PointFree } from '../../../../com/mojang/datafixers/functions/PointFree.d.ts'
import type { Type } from '../../../../com/mojang/datafixers/types/Type.d.ts'
import type { Unit } from '../../../../com/mojang/datafixers/util/Unit.d.ts'
import type { DynamicOps } from '../../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Bang<A extends Object | number | string | boolean> extends PointFree<(param0: A) => Unit> {
    static indent(paramarg0: number): string;
    constructor(arg0: Type<A>)
    // private type: Type<A>;
    equals(arg0: Object | null): boolean;
    eval(): (param0: DynamicOps<Object>) => (param0: A) => Unit;
    hashCode(): number;
    toString(): string;
    toString(arg0: number): string;
    type(): Type<(param0: A) => Unit>;
}