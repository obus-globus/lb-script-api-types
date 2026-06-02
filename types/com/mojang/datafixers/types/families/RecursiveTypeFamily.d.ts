import type { FamilyOptic } from '../../../../../com/mojang/datafixers/FamilyOptic.d.ts'
import type { RewriteResult } from '../../../../../com/mojang/datafixers/RewriteResult.d.ts'
import type { TypeRewriteRule } from '../../../../../com/mojang/datafixers/TypeRewriteRule.d.ts'
import type { TypedOptic } from '../../../../../com/mojang/datafixers/TypedOptic.d.ts'
import type { PointFreeRule } from '../../../../../com/mojang/datafixers/functions/PointFreeRule.d.ts'
import type { Type } from '../../../../../com/mojang/datafixers/types/Type.d.ts'
import type { Type$FieldNotFoundException } from '../../../../../com/mojang/datafixers/types/Type$FieldNotFoundException.d.ts'
import type { Type$TypeMatcher } from '../../../../../com/mojang/datafixers/types/Type$TypeMatcher.d.ts'
import type { Algebra } from '../../../../../com/mojang/datafixers/types/families/Algebra.d.ts'
import type { TypeFamily } from '../../../../../com/mojang/datafixers/types/families/TypeFamily.d.ts'
import type { RecursivePoint$RecursivePointType } from '../../../../../com/mojang/datafixers/types/templates/RecursivePoint$RecursivePointType.d.ts'
import type { TypeTemplate } from '../../../../../com/mojang/datafixers/types/templates/TypeTemplate.d.ts'
import type { Either } from '../../../../../com/mojang/datafixers/util/Either.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { IntFunction } from '../../../../../java/util/function/IntFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class RecursiveTypeFamily extends Object implements TypeFamily {
    static familyOptic(paramarg0: (param0: Object | null) => unknown): FamilyOptic<Object, Object>;
    constructor(arg0: string, arg1: TypeTemplate)
    // private hashCode: number;
    // private name: string;
    // private size: number;
    // private template: TypeTemplate;
    // private types: Int2ObjectMap<RecursivePoint$RecursivePointType<Object>>;
    apply(arg0: number): RecursivePoint$RecursivePointType<Object>;
    buildMuType(arg0: Type<A>, arg1: RecursiveTypeFamily): RecursivePoint$RecursivePointType<A>;
    // private cap2(arg0: RewriteResult<Object, Object>[], arg1: RecursivePoint$RecursivePointType<A>, arg2: TypeRewriteRule, arg3: PointFreeRule, arg4: boolean, arg5: RewriteResult<Object, Object>, arg6: RecursivePoint$RecursivePointType<B>): boolean;
    equals(arg0: Object | null): boolean;
    everywhere(arg0: number, arg1: TypeRewriteRule, arg2: PointFreeRule): Optional<RewriteResult<Object, Object>>;
    findType(arg0: number, arg1: Type<A>, arg2: Type<B>, arg3: Type$TypeMatcher<A, B>, arg4: boolean): Either<TypedOptic<Object, Object, A, B>, Type$FieldNotFoundException>;
    fold(arg0: Algebra, arg1: RecursiveTypeFamily): (param0: RewriteResult<Object, Object>) => unknown;
    hashCode(): number;
    // private mkSimpleOptic(arg0: RecursivePoint$RecursivePointType<S>, arg1: RecursivePoint$RecursivePointType<T>, arg2: Type<A>, arg3: Type<B>, arg4: Type$TypeMatcher<A, B>): Either<TypedOptic<Object, Object, A, B>, Type$FieldNotFoundException>;
    name(): string;
    size(): number;
    template(): TypeTemplate;
    toString(): string;
}