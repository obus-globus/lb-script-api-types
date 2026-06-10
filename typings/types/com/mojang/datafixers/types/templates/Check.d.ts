import type { FamilyOptic } from '../../../../../com/mojang/datafixers/FamilyOptic.d.ts'
import type { RewriteResult } from '../../../../../com/mojang/datafixers/RewriteResult.d.ts'
import type { Type } from '../../../../../com/mojang/datafixers/types/Type.d.ts'
import type { Type$FieldNotFoundException } from '../../../../../com/mojang/datafixers/types/Type$FieldNotFoundException.d.ts'
import type { TypeFamily } from '../../../../../com/mojang/datafixers/types/families/TypeFamily.d.ts'
import type { TypeTemplate } from '../../../../../com/mojang/datafixers/types/templates/TypeTemplate.d.ts'
import type { Either } from '../../../../../com/mojang/datafixers/util/Either.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { IntFunction } from '../../../../../java/util/function/IntFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Check extends Record implements TypeTemplate {
    // private element: TypeTemplate;
    // private index: number;
    // private name: string;
    apply(arg0: TypeFamily): TypeFamily;
    applyO<A extends Object | number | string | boolean, B extends Object | number | string | boolean>(arg0: FamilyOptic<A, B>, arg1: Type<A>, arg2: Type<B>): FamilyOptic<A, B>;
    // private cap<A extends Object | number | string | boolean>(arg0: TypeFamily, arg1: number, arg2: RewriteResult<A, Object>): RewriteResult<Object, Object>;
    element(): TypeTemplate;
    equals(arg0: Object | null): boolean;
    findFieldOrType<FT extends Object | number | string | boolean, FR extends Object | number | string | boolean>(arg0: number, arg1: string, arg2: Type<FT>, arg3: Type<FR>): Either<TypeTemplate, Type$FieldNotFoundException>;
    hashCode(): number;
    hmap(arg0: TypeFamily, arg1: (param0: number) => RewriteResult<Object, Object>): (param0: number) => RewriteResult<Object, Object>;
    index(): number;
    name(): string;
    size(): number;
    toSimpleType(): Type<Object>;
    toString(): string;
}