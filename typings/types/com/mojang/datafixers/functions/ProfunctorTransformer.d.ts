import type { TypedOptic } from '../../../../com/mojang/datafixers/TypedOptic.d.ts'
import type { PointFree } from '../../../../com/mojang/datafixers/functions/PointFree.d.ts'
import type { Type } from '../../../../com/mojang/datafixers/types/Type.d.ts'
import type { DynamicOps } from '../../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ProfunctorTransformer<S extends unknown, T extends unknown, A extends unknown, B extends unknown> extends PointFree<(param0: Function<A, B>) => Function<S, T>> {
    static indent(paramarg0: number): string;
    constructor(arg0: TypedOptic<S, T, A, B>)
    // private optic: TypedOptic<S, T, A, B>;
    castOuterUnchecked<S2 extends unknown, T2 extends unknown>(arg0: Type<S2>, arg1: Type<T2>): ProfunctorTransformer<S2, T2, A, B>;
    equals(arg0: Object | null): boolean;
    eval(): (param0: DynamicOps<Object>) => Function<Function<A, B>, Function<S, T>>;
    hashCode(): number;
    toString(): string;
    toString(arg0: number): string;
    type(): Type<(param0: Function<A, B>) => Function<S, T>>;
}