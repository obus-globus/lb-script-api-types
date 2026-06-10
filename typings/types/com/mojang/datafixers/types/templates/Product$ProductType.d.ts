import type { RewriteResult } from '../../../../../com/mojang/datafixers/RewriteResult.d.ts'
import type { TypeRewriteRule } from '../../../../../com/mojang/datafixers/TypeRewriteRule.d.ts'
import type { TypedOptic } from '../../../../../com/mojang/datafixers/TypedOptic.d.ts'
import type { App } from '../../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { Type } from '../../../../../com/mojang/datafixers/types/Type.d.ts'
import type { Type$FieldNotFoundException } from '../../../../../com/mojang/datafixers/types/Type$FieldNotFoundException.d.ts'
import type { Type$Mu } from '../../../../../com/mojang/datafixers/types/Type$Mu.d.ts'
import type { Type$TypeMatcher } from '../../../../../com/mojang/datafixers/types/Type$TypeMatcher.d.ts'
import type { RecursiveTypeFamily } from '../../../../../com/mojang/datafixers/types/families/RecursiveTypeFamily.d.ts'
import type { TaggedChoice$TaggedChoiceType } from '../../../../../com/mojang/datafixers/types/templates/TaggedChoice$TaggedChoiceType.d.ts'
import type { TypeTemplate } from '../../../../../com/mojang/datafixers/types/templates/TypeTemplate.d.ts'
import type { Either } from '../../../../../com/mojang/datafixers/util/Either.d.ts'
import type { Pair } from '../../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { DynamicOps } from '../../../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Product$ProductType<F extends Object | number | string | boolean, G extends Object | number | string | boolean> extends Type<Pair<F, G>> {
    static opticView(paramarg0: Type<Object>, paramarg1: RewriteResult<Object, Object>, paramarg2: TypedOptic<Object, Object, Object, Object>): RewriteResult<Object, Object>;
    static unbox(paramarg0: App<Type$Mu, Object>): Type<Object>;
    constructor(arg0: Type<F>, arg1: Type<G>)
    // private first: Type<F>;
    // private hashCode: number;
    // private second: Type<G>;
    all(arg0: TypeRewriteRule, arg1: boolean, arg2: boolean): RewriteResult<Pair<F, G>, Object>;
    buildCodec(): Codec<Pair<F, G>>;
    buildTemplate(): TypeTemplate;
    // private capLeft<FT extends Object | number | string | boolean, FR extends Object | number | string | boolean, F2 extends Object | number | string | boolean>(arg0: TypedOptic<F, F2, FT, FR>): Either<TypedOptic<Pair<F, G>, Object, FT, FR>, Type$FieldNotFoundException>;
    // private capRight<FT extends Object | number | string | boolean, FR extends Object | number | string | boolean, G2 extends Object | number | string | boolean>(arg0: TypedOptic<G, G2, FT, FR>): TypedOptic<Pair<F, G>, Object, FT, FR>;
    equals(arg0: Object, arg1: boolean, arg2: boolean): boolean;
    equals(arg0: Object | null): boolean;
    findCheckedType(arg0: number): Optional<Type<Object>>;
    findChoiceType(arg0: string, arg1: number): Optional<TaggedChoice$TaggedChoiceType<Object>>;
    findFieldTypeOpt(arg0: string): Optional<Type<Object>>;
    findTypeInChildren<FT extends Object | number | string | boolean, FR extends Object | number | string | boolean>(arg0: Type<FT>, arg1: Type<FR>, arg2: Type$TypeMatcher<FT, FR>, arg3: boolean): Either<TypedOptic<Pair<F, G>, Object, FT, FR>, Type$FieldNotFoundException>;
    first(): Type<F>;
    hashCode(): number;
    mergeViews<F2 extends Object | number | string | boolean, G2 extends Object | number | string | boolean>(arg0: RewriteResult<F, F2>, arg1: RewriteResult<G, G2>): RewriteResult<Pair<F, G>, Object>;
    one(arg0: TypeRewriteRule): Optional<RewriteResult<Pair<F, G>, Object>>;
    point(arg0: DynamicOps<Object>): Optional<Pair<F, G>>;
    second(): Type<G>;
    toString(): string;
    updateMu(arg0: RecursiveTypeFamily): Type<Object>;
}