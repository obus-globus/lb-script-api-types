import type { OpticFinder } from '../../../../com/mojang/datafixers/OpticFinder.d.ts'
import type { RewriteResult } from '../../../../com/mojang/datafixers/RewriteResult.d.ts'
import type { TypeRewriteRule } from '../../../../com/mojang/datafixers/TypeRewriteRule.d.ts'
import type { Typed } from '../../../../com/mojang/datafixers/Typed.d.ts'
import type { TypedOptic } from '../../../../com/mojang/datafixers/TypedOptic.d.ts'
import type { View } from '../../../../com/mojang/datafixers/View.d.ts'
import type { PointFreeRule } from '../../../../com/mojang/datafixers/functions/PointFreeRule.d.ts'
import type { App } from '../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { Type$FieldNotFoundException } from '../../../../com/mojang/datafixers/types/Type$FieldNotFoundException.d.ts'
import type { Type$Mu } from '../../../../com/mojang/datafixers/types/Type$Mu.d.ts'
import type { Type$TypeMatcher } from '../../../../com/mojang/datafixers/types/Type$TypeMatcher.d.ts'
import type { RecursiveTypeFamily } from '../../../../com/mojang/datafixers/types/families/RecursiveTypeFamily.d.ts'
import type { TaggedChoice$TaggedChoiceType } from '../../../../com/mojang/datafixers/types/templates/TaggedChoice$TaggedChoiceType.d.ts'
import type { TypeTemplate } from '../../../../com/mojang/datafixers/types/templates/TypeTemplate.d.ts'
import type { Either } from '../../../../com/mojang/datafixers/util/Either.d.ts'
import type { Pair } from '../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { DataResult } from '../../../../com/mojang/serialization/DataResult.d.ts'
import type { Dynamic } from '../../../../com/mojang/serialization/Dynamic.d.ts'
import type { DynamicOps } from '../../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class Type<A extends unknown> extends Object implements App<Type$Mu, A> {
    static opticView<S extends unknown, T extends unknown, A extends unknown, B extends unknown>(paramarg0: Type<S>, paramarg1: RewriteResult<A, B>, paramarg2: TypedOptic<S, T, A, B>): RewriteResult<S, T>;
    static unbox<A extends unknown>(paramarg0: App<Type$Mu, A>): Type<A>;
    constructor()
    // private codec: Codec<A>;
    // private template: TypeTemplate;
    all(arg0: TypeRewriteRule, arg1: boolean, arg2: boolean): RewriteResult<A, Object>;
    buildCodec(): Codec<A>;
    buildTemplate(): TypeTemplate;
    // private capWrite<T extends unknown, B extends unknown>(arg0: DynamicOps<T>, arg1: Type<Object>, arg2: T, arg3: A, arg4: View<A, B>): DataResult<T>;
    codec(): Codec<A>;
    equals(arg0: Object, arg1: boolean, arg2: boolean): boolean;
    equals(arg0: Object | null): boolean;
    everywhere(arg0: TypeRewriteRule, arg1: PointFreeRule, arg2: boolean, arg3: boolean): Optional<RewriteResult<A, Object>>;
    findCheckedType(arg0: number): Optional<Type<Object>>;
    findChoiceType(arg0: string, arg1: number): Optional<TaggedChoice$TaggedChoiceType<Object>>;
    findField(arg0: string): OpticFinder<Object>;
    findFieldType(arg0: string): Type<Object>;
    findFieldTypeOpt(arg0: string): Optional<Type<Object>>;
    findType<FT extends unknown, FR extends unknown>(arg0: Type<FT>, arg1: Type<FR>, arg2: Type$TypeMatcher<FT, FR>, arg3: boolean): Either<TypedOptic<A, Object, FT, FR>, Type$FieldNotFoundException>;
    findTypeCached<FT extends unknown, FR extends unknown>(arg0: Type<FT>, arg1: Type<FR>, arg2: Type$TypeMatcher<FT, FR>, arg3: boolean): Either<TypedOptic<A, Object, FT, FR>, Type$FieldNotFoundException>;
    findTypeInChildren<FT extends unknown, FR extends unknown>(arg0: Type<FT>, arg1: Type<FR>, arg2: Type$TypeMatcher<FT, FR>, arg3: boolean): Either<TypedOptic<A, Object, FT, FR>, Type$FieldNotFoundException>;
    finder(): OpticFinder<A>;
    getSetType<FT extends unknown, FR extends unknown>(arg0: OpticFinder<FT>, arg1: Type<FR>): Type<Object>;
    ifSame<B extends unknown>(arg0: Typed<B>): Optional<A>;
    ifSame<B extends unknown>(arg0: Type<B>, arg1: B): Optional<A>;
    ifSame<B extends unknown>(arg0: Type<B>, arg1: RewriteResult<B, Object>): Optional<RewriteResult<A, Object>>;
    one(arg0: TypeRewriteRule): Optional<RewriteResult<A, Object>>;
    point(arg0: DynamicOps<Object>): Optional<A>;
    pointTyped(arg0: DynamicOps<Object>): Optional<Typed<A>>;
    read<T extends unknown>(arg0: Dynamic<T>): DataResult<Pair<A, Dynamic<T>>>;
    read<T extends unknown>(arg0: DynamicOps<T>, arg1: TypeRewriteRule, arg2: PointFreeRule, arg3: T): DataResult<Pair<Optional<Object>, T>>;
    readAndWrite<T extends unknown>(arg0: DynamicOps<T>, arg1: Type<Object>, arg2: TypeRewriteRule, arg3: PointFreeRule, arg4: T): DataResult<T>;
    readTyped<T extends unknown>(arg0: Dynamic<T>): DataResult<Pair<Typed<A>, T>>;
    readTyped<T extends unknown>(arg0: DynamicOps<T>, arg1: T): DataResult<Pair<Typed<A>, T>>;
    rewrite(arg0: TypeRewriteRule, arg1: PointFreeRule): Optional<RewriteResult<A, Object>>;
    rewriteOrNop(arg0: TypeRewriteRule): RewriteResult<A, Object>;
    template(): TypeTemplate;
    updateMu(arg0: RecursiveTypeFamily): Type<Object>;
    write<T extends unknown>(arg0: DynamicOps<T>, arg1: A): DataResult<T>;
    writeDynamic<T extends unknown>(arg0: DynamicOps<T>, arg1: A): DataResult<Dynamic<T>>;
}