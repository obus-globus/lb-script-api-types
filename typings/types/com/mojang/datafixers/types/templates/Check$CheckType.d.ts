import type { RewriteResult } from '../../../../../com/mojang/datafixers/RewriteResult.d.ts'
import type { TypeRewriteRule } from '../../../../../com/mojang/datafixers/TypeRewriteRule.d.ts'
import type { TypedOptic } from '../../../../../com/mojang/datafixers/TypedOptic.d.ts'
import type { PointFreeRule } from '../../../../../com/mojang/datafixers/functions/PointFreeRule.d.ts'
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
import type { DataResult } from '../../../../../com/mojang/serialization/DataResult.d.ts'
import type { Dynamic } from '../../../../../com/mojang/serialization/Dynamic.d.ts'
import type { DynamicOps } from '../../../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Check$CheckType<A extends unknown> extends Type<A> {
    static fix<A extends unknown, B extends unknown>(paramarg0: Check$CheckType<A>, paramarg1: RewriteResult<A, B>): RewriteResult<A, Object>;
    static opticView<S extends unknown, T extends unknown, A extends unknown, B extends unknown>(paramarg0: Type<S>, paramarg1: RewriteResult<A, B>, paramarg2: TypedOptic<S, T, A, B>): RewriteResult<S, T>;
    static unbox<A extends unknown>(paramarg0: App<Type$Mu, A>): Type<A>;
    constructor(arg0: string, arg1: number, arg2: number, arg3: Type<A>)
    // private delegate: Type<A>;
    // private expectedIndex: number;
    // private index: number;
    // private name: string;
    all(arg0: TypeRewriteRule, arg1: boolean, arg2: boolean): RewriteResult<A, Object>;
    buildCodec(): Codec<A>;
    buildTemplate(): TypeTemplate;
    equals(arg0: Object, arg1: boolean, arg2: boolean): boolean;
    equals(arg0: Object | null): boolean;
    everywhere(arg0: TypeRewriteRule, arg1: PointFreeRule, arg2: boolean, arg3: boolean): Optional<RewriteResult<A, Object>>;
    findCheckedType(arg0: number): Optional<Type<Object>>;
    findChoiceType(arg0: string, arg1: number): Optional<TaggedChoice$TaggedChoiceType<Object>>;
    findFieldTypeOpt(arg0: string): Optional<Type<Object>>;
    findTypeInChildren<FT extends unknown, FR extends unknown>(arg0: Type<FT>, arg1: Type<FR>, arg2: Type$TypeMatcher<FT, FR>, arg3: boolean): Either<TypedOptic<A, Object, FT, FR>, Type$FieldNotFoundException>;
    hashCode(): number;
    one(arg0: TypeRewriteRule): Optional<RewriteResult<A, Object>>;
    point(arg0: DynamicOps<Object>): Optional<A>;
    read<T extends unknown>(arg0: Dynamic<T>): DataResult<Pair<A, Dynamic<T>>>;
    // private read<T extends unknown>(arg0: DynamicOps<T>, arg1: T): DataResult<Pair<A, T>>;
    read<T extends unknown>(arg0: DynamicOps<T>, arg1: TypeRewriteRule, arg2: PointFreeRule, arg3: T): DataResult<Pair<Optional<Object>, T>>;
    toString(): string;
    updateMu(arg0: RecursiveTypeFamily): Type<Object>;
}