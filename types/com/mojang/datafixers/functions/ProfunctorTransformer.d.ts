import type { TypedOptic } from '../../../../com/mojang/datafixers/TypedOptic.d.ts'
import type { PointFree } from '../../../../com/mojang/datafixers/functions/PointFree.d.ts'
import type { Type } from '../../../../com/mojang/datafixers/types/Type.d.ts'
import type { DynamicOps } from '../../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ProfunctorTransformer<S extends Object | number | string | boolean, T extends Object | number | string | boolean, A extends Object | number | string | boolean, B extends Object | number | string | boolean> extends PointFree<(param0: (param0: A) => B) => (param0: S) => T> {
    static indent(paramarg0: number): string;
    constructor(arg0: TypedOptic<S, T, A, B>)
    // private optic: TypedOptic<S, T, A, B>;
    castOuterUnchecked(arg0: Type<S2>, arg1: Type<T2>): ProfunctorTransformer<S2, T2, A, B>;
    equals(arg0: Object | null): boolean;
    eval(): (param0: DynamicOps<Object>) => (param0: (param0: A) => B) => (param0: S) => T;
    hashCode(): number;
    toString(arg0: number): string;
    type(): Type<(param0: (param0: A) => B) => (param0: S) => T>;
}