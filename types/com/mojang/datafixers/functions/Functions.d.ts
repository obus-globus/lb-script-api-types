import type { TypedOptic } from '../../../../com/mojang/datafixers/TypedOptic.d.ts'
import type { Bang } from '../../../../com/mojang/datafixers/functions/Bang.d.ts'
import type { PointFree } from '../../../../com/mojang/datafixers/functions/PointFree.d.ts'
import type { Type } from '../../../../com/mojang/datafixers/types/Type.d.ts'
import type { Algebra } from '../../../../com/mojang/datafixers/types/families/Algebra.d.ts'
import type { RecursivePoint$RecursivePointType } from '../../../../com/mojang/datafixers/types/templates/RecursivePoint$RecursivePointType.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class Functions extends Object {
    static app(paramarg0: PointFree<Object>, paramarg1: PointFree<Object>): PointFree<Object>;
    static bang(paramarg0: Type<Object>): Bang<Object>;
    static comp(paramarg0: PointFree<Object>, paramarg1: PointFree<Object>): PointFree<Object>;
    static fold(paramarg0: RecursivePoint$RecursivePointType<Object>, paramarg1: RecursivePoint$RecursivePointType<Object>, paramarg2: Algebra, paramarg3: number): PointFree<Object>;
    static fun(paramarg0: string, paramarg1: (param0: Object | null) => Object | null, paramarg2: Type<Object>, paramarg3: Type<Object>): PointFree<Object>;
    static id(paramarg0: Type<Object>): PointFree<Object>;
    static in(paramarg0: RecursivePoint$RecursivePointType<Object>): PointFree<Object>;
    static isId(paramarg0: PointFree<Object>): boolean;
    static out(paramarg0: RecursivePoint$RecursivePointType<Object>): PointFree<Object>;
    static profunctorTransformer(paramarg0: TypedOptic<Object, Object, Object, Object>): PointFree<Object>;
    constructor()
}