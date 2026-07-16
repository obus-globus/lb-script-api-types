import type { TypedOptic } from '../../../../com/mojang/datafixers/TypedOptic.d.ts'
import type { Bang } from '../../../../com/mojang/datafixers/functions/Bang.d.ts'
import type { PointFree } from '../../../../com/mojang/datafixers/functions/PointFree.d.ts'
import type { Type } from '../../../../com/mojang/datafixers/types/Type.d.ts'
import type { Algebra } from '../../../../com/mojang/datafixers/types/families/Algebra.d.ts'
import type { RecursivePoint$RecursivePointType } from '../../../../com/mojang/datafixers/types/templates/RecursivePoint$RecursivePointType.d.ts'
import type { DynamicOps } from '../../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class Functions extends Object {
    static app<A extends unknown, B extends unknown>(paramarg0: PointFree<(param0: A) => B>, paramarg1: PointFree<A>): PointFree<B>;
    static bang<A extends unknown>(paramarg0: Type<A>): Bang<A>;
    static comp<A extends unknown, B extends unknown, C extends unknown>(paramarg0: PointFree<(param0: B) => C>, paramarg1: PointFree<(param0: A) => B>): PointFree<(param0: A) => C>;
    static fold<A extends unknown, B extends unknown>(paramarg0: RecursivePoint$RecursivePointType<A>, paramarg1: RecursivePoint$RecursivePointType<B>, paramarg2: Algebra, paramarg3: number): PointFree<(param0: A) => B>;
    static fun<A extends unknown, B extends unknown>(paramarg0: string, paramarg1: (param0: DynamicOps<Object>) => Function<A, B>, paramarg2: Type<A>, paramarg3: Type<B>): PointFree<(param0: A) => B>;
    static id<A extends unknown>(paramarg0: Type<A>): PointFree<(param0: A) => A>;
    static in<A extends unknown>(paramarg0: RecursivePoint$RecursivePointType<A>): PointFree<(param0: A) => A>;
    static isId(paramarg0: PointFree<Object>): boolean;
    static out<A extends unknown>(paramarg0: RecursivePoint$RecursivePointType<A>): PointFree<(param0: A) => A>;
    static profunctorTransformer<S extends unknown, T extends unknown, A extends unknown, B extends unknown>(paramarg0: TypedOptic<S, T, A, B>): PointFree<(param0: Function<A, B>) => Function<S, T>>;
    constructor()
}