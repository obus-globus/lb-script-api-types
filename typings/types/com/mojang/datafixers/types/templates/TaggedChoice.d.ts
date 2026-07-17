import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { FamilyOptic } from '../../../../../com/mojang/datafixers/FamilyOptic.d.ts'
import type { RewriteResult } from '../../../../../com/mojang/datafixers/RewriteResult.d.ts'
import type { Type } from '../../../../../com/mojang/datafixers/types/Type.d.ts'
import type { Type$FieldNotFoundException } from '../../../../../com/mojang/datafixers/types/Type$FieldNotFoundException.d.ts'
import type { TypeFamily } from '../../../../../com/mojang/datafixers/types/families/TypeFamily.d.ts'
import type { TypeTemplate } from '../../../../../com/mojang/datafixers/types/templates/TypeTemplate.d.ts'
import type { Either } from '../../../../../com/mojang/datafixers/util/Either.d.ts'
import type { Pair } from '../../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { IntFunction } from '../../../../../java/util/function/IntFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TaggedChoiceExtension } from '../../../../../net/fabricmc/fabric/impl/dimension/TaggedChoiceExtension.d.ts'
export class TaggedChoice<K extends unknown> extends Object implements TypeTemplate, TaggedChoiceExtension {
    constructor(arg0: string, arg1: Type<K>, arg2: JavaMap<K, TypeTemplate>)
    // private failSoft: boolean;
    // private keyType: Type<K>;
    // private name: string;
    // private size: number;
    // private templates: JavaMap<K, TypeTemplate>;
    // private types: JavaMap<Pair<TypeFamily, number>, Type<Object>>;
    apply(arg0: TypeFamily): TypeFamily;
    applyO<A extends unknown, B extends unknown>(arg0: FamilyOptic<A, B>, arg1: Type<A>, arg2: Type<B>): FamilyOptic<A, B>;
    equals(arg0: Object | null): boolean;
    fabric$setFailSoft(arg0: boolean): void;
    findFieldOrType<A extends unknown, B extends unknown>(arg0: number, arg1: string, arg2: Type<A>, arg3: Type<B>): Either<TypeTemplate, Type$FieldNotFoundException>;
    hashCode(): number;
    hmap(arg0: TypeFamily, arg1: (param0: number) => RewriteResult<Object, Object>): (param0: number) => RewriteResult<Object, Object>;
    size(): number;
    toSimpleType(): Type<Object>;
    toString(): string;
}