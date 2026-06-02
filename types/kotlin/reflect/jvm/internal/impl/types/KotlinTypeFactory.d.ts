import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../../../../kotlin/jvm/functions/Function1.d.ts'
import type { ClassDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { TypeAliasDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeAliasDescriptor.d.ts'
import type { IntegerLiteralTypeConstructor } from '../../../../../../kotlin/reflect/jvm/internal/impl/resolve/constants/IntegerLiteralTypeConstructor.d.ts'
import type { MemberScope } from '../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope.d.ts'
import type { KotlinTypeFactory$ExpandedTypeOrRefinedConstructor } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinTypeFactory$ExpandedTypeOrRefinedConstructor.d.ts'
import type { SimpleType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
import type { TypeAttribute } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeAttribute.d.ts'
import type { TypeConstructor } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeConstructor.d.ts'
import type { TypeProjection } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeProjection.d.ts'
import type { UnwrappedType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/UnwrappedType.d.ts'
import type { KotlinTypeRefiner } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypeRefiner.d.ts'
export class KotlinTypeFactory extends Object {
    static INSTANCE: KotlinTypeFactory;
    static computeExpandedType(paramarg0: TypeAliasDescriptor, paramarg1: (Object | null)[]): SimpleType;
    static flexibleType(paramarg0: SimpleType, paramarg1: SimpleType): UnwrappedType;
    static integerLiteralType(paramarg0: TypeAttribute<Object>[], paramarg1: IntegerLiteralTypeConstructor, paramarg2: boolean): SimpleType;
    static simpleNotNullType(paramarg0: TypeAttribute<Object>[], paramarg1: ClassDescriptor, paramarg2: (Object | null)[]): SimpleType;
    static simpleType(paramarg0: SimpleType, paramarg1: TypeAttribute<Object>[], paramarg2: TypeConstructor, paramarg3: (Object | null)[], paramarg4: boolean): SimpleType;
    static simpleType(paramarg0: TypeAttribute<Object>[], paramarg1: TypeConstructor, paramarg2: (Object | null)[], paramarg3: boolean): SimpleType;
    static simpleType(paramarg0: TypeAttribute<Object>[], paramarg1: TypeConstructor, paramarg2: (Object | null)[], paramarg3: boolean, paramarg4: KotlinTypeRefiner): SimpleType;
    static simpleTypeWithNonTrivialMemberScope(paramarg0: TypeAttribute<Object>[], paramarg1: TypeConstructor, paramarg2: (Object | null)[], paramarg3: boolean, paramarg4: MemberScope): SimpleType;
    static simpleTypeWithNonTrivialMemberScope(paramarg0: TypeAttribute<Object>[], paramarg1: TypeConstructor, paramarg2: (Object | null)[], paramarg3: boolean, paramarg4: MemberScope, paramarg5: Function1<Object, Object>): SimpleType;
    private constructor()
    // private computeMemberScope(arg0: TypeConstructor, arg1: TypeProjection[], arg2: KotlinTypeRefiner): MemberScope;
    // private refineConstructor(arg0: TypeConstructor, arg1: KotlinTypeRefiner, arg2: TypeProjection[]): KotlinTypeFactory$ExpandedTypeOrRefinedConstructor;
}