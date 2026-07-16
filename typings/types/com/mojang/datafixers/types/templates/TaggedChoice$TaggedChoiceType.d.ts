import type { RewriteResult } from '../../../../../com/mojang/datafixers/RewriteResult.d.ts'
import type { TypeRewriteRule } from '../../../../../com/mojang/datafixers/TypeRewriteRule.d.ts'
import type { Typed } from '../../../../../com/mojang/datafixers/Typed.d.ts'
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
import type { DataResult } from '../../../../../com/mojang/serialization/DataResult.d.ts'
import type { DynamicOps } from '../../../../../com/mojang/serialization/DynamicOps.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TaggedChoiceTypeExtension } from '../../../../../net/fabricmc/fabric/impl/dimension/TaggedChoiceTypeExtension.d.ts'
export class TaggedChoice$TaggedChoiceType<K extends unknown> extends Type<Pair<K, Object>> implements TaggedChoiceTypeExtension {
    static elementResult<K extends unknown, FT extends unknown, FR extends unknown>(paramarg0: K, paramarg1: TaggedChoice$TaggedChoiceType<K>, paramarg2: RewriteResult<FT, FR>): RewriteResult<Pair<K, Object>, Pair<K, Object>>;
    static opticView<S extends unknown, T extends unknown, A extends unknown, B extends unknown>(paramarg0: Type<S>, paramarg1: RewriteResult<A, B>, paramarg2: TypedOptic<S, T, A, B>): RewriteResult<S, T>;
    static unbox<A extends unknown>(paramarg0: App<Type$Mu, A>): Type<A>;
    constructor(arg0: string, arg1: Type<K>, arg2: Map<K, Type<Object>>)
    // private failSoft: boolean;
    // private hashCode: number;
    readonly keyType: Type<K>;
    readonly name: string;
    // private types: Map<K, Type<Object>>;
    all(arg0: TypeRewriteRule, arg1: boolean, arg2: boolean): RewriteResult<Pair<K, Object>, Object>;
    buildCodec(): Codec<Pair<K, Object>>;
    buildTemplate(): TypeTemplate;
    // private cap<FT extends unknown, FR extends unknown, S extends unknown, T extends unknown>(arg0: TaggedChoice$TaggedChoiceType<K>, arg1: K, arg2: TypedOptic<S, T, FT, FR>): TypedOptic<Pair<K, Object>, Pair<K, Object>, FT, FR>;
    equals(arg0: Object, arg1: boolean, arg2: boolean): boolean;
    equals(arg0: Object | null): boolean;
    fabric$setFailSoft(arg0: boolean): void;
    findCheckedType(arg0: number): Optional<Type<Object>>;
    findChoiceType(arg0: string, arg1: number): Optional<TaggedChoice$TaggedChoiceType<Object>>;
    findFieldTypeOpt(arg0: string): Optional<Type<Object>>;
    findTypeInChildren<FT extends unknown, FR extends unknown>(arg0: Type<FT>, arg1: Type<FR>, arg2: Type$TypeMatcher<FT, FR>, arg3: boolean): Either<TypedOptic<Pair<K, Object>, Object, FT, FR>, Type$FieldNotFoundException>;
    getKeyType(): Type<K>;
    // private getMapCodec(arg0: K): DataResult<MapCodec<Object>>;
    getName(): string;
    hasType(arg0: K): boolean;
    hashCode(): number;
    one(arg0: TypeRewriteRule): Optional<RewriteResult<Pair<K, Object>, Object>>;
    point(arg0: DynamicOps<Object>): Optional<Pair<K, Object>>;
    point(arg0: DynamicOps<Object>, arg1: K, arg2: Object): Optional<Typed<Pair<K, Object>>>;
    toString(): string;
    types(): Map<K, Type<Object>>;
    updateMu(arg0: RecursiveTypeFamily): Type<Object>;
}