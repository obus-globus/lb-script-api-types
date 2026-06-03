import type { RewriteResult } from '../../../../../com/mojang/datafixers/RewriteResult.d.ts'
import type { TypeRewriteRule } from '../../../../../com/mojang/datafixers/TypeRewriteRule.d.ts'
import type { TypedOptic } from '../../../../../com/mojang/datafixers/TypedOptic.d.ts'
import type { App } from '../../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { Type } from '../../../../../com/mojang/datafixers/types/Type.d.ts'
import type { Type$FieldNotFoundException } from '../../../../../com/mojang/datafixers/types/Type$FieldNotFoundException.d.ts'
import type { Type$Mu } from '../../../../../com/mojang/datafixers/types/Type$Mu.d.ts'
import type { Type$TypeMatcher } from '../../../../../com/mojang/datafixers/types/Type$TypeMatcher.d.ts'
import type { RecursiveTypeFamily } from '../../../../../com/mojang/datafixers/types/families/RecursiveTypeFamily.d.ts'
import type { TypeTemplate } from '../../../../../com/mojang/datafixers/types/templates/TypeTemplate.d.ts'
import type { Either } from '../../../../../com/mojang/datafixers/util/Either.d.ts'
import type { Pair } from '../../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { DynamicOps } from '../../../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CompoundList$CompoundListType<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Type<Pair<K, V>[]> {
    static opticView(paramarg0: Type<Object>, paramarg1: RewriteResult<Object, Object>, paramarg2: TypedOptic<Object, Object, Object, Object>): RewriteResult<Object, Object>;
    static unbox(paramarg0: App<Type$Mu, Object>): Type<Object>;
    constructor(arg0: Type<K>, arg1: Type<V>)
    readonly element: Type<V>;
    readonly key: Type<K>;
    all(arg0: TypeRewriteRule, arg1: boolean, arg2: boolean): RewriteResult<Pair<K, V>[], Object>;
    buildCodec(): Codec<Pair<K, V>[]>;
    buildTemplate(): TypeTemplate;
    // private capLeft(arg0: TypedOptic<K, K2, FT, FR>): Either<TypedOptic<Pair<K, V>[], Object, FT, FR>, Type$FieldNotFoundException>;
    // private capRight(arg0: TypedOptic<V, V2, FT, FR>): TypedOptic<Pair<K, V>[], Object, FT, FR>;
    equals(arg0: Object, arg1: boolean, arg2: boolean): boolean;
    equals(arg0: Object | null): boolean;
    findTypeInChildren(arg0: Type<FT>, arg1: Type<FR>, arg2: Type$TypeMatcher<FT, FR>, arg3: boolean): Either<TypedOptic<Pair<K, V>[], Object, FT, FR>, Type$FieldNotFoundException>;
    getElement(): Type<V>;
    getKey(): Type<K>;
    hashCode(): number;
    mergeViews(arg0: RewriteResult<K, K2>, arg1: RewriteResult<V, V2>): RewriteResult<Pair<K, V>[], Object>;
    one(arg0: TypeRewriteRule): Optional<RewriteResult<Pair<K, V>[], Object>>;
    point(arg0: DynamicOps<Object>): Optional<Pair<K, V>[]>;
    toString(): string;
    updateMu(arg0: RecursiveTypeFamily): Type<Object>;
}