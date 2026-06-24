import type { DefaultConstructorMarker } from '../../../../../../kotlin/jvm/internal/DefaultConstructorMarker.d.ts'
import type { DefaultBuiltIns$Companion } from '../../../../../../kotlin/reflect/jvm/internal/impl/builtins/DefaultBuiltIns$Companion.d.ts'
import type { KotlinBuiltIns } from '../../../../../../kotlin/reflect/jvm/internal/impl/builtins/KotlinBuiltIns.d.ts'
import type { PrimitiveType } from '../../../../../../kotlin/reflect/jvm/internal/impl/builtins/PrimitiveType.d.ts'
import type { ClassDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { DeclarationDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { FqNameUnsafe } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/FqNameUnsafe.d.ts'
import type { Name } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { TypeConstructor } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeConstructor.d.ts'
export class DefaultBuiltIns extends KotlinBuiltIns {
    static BUILTINS_MODULE_NAME: Name;
    static Companion: DefaultBuiltIns$Companion;
    static getPrimitiveArrayElementType(paramarg0: KotlinType): PrimitiveType;
    static getPrimitiveArrayType(paramarg0: DeclarationDescriptor): PrimitiveType;
    static getPrimitiveType(paramarg0: DeclarationDescriptor): PrimitiveType;
    static isAny(paramarg0: ClassDescriptor): boolean;
    static isAnyOrNullableAny(paramarg0: KotlinType): boolean;
    static isArray(paramarg0: KotlinType): boolean;
    static isArrayOrPrimitiveArray(paramarg0: ClassDescriptor): boolean;
    static isArrayOrPrimitiveArray(paramarg0: KotlinType): boolean;
    static isBoolean(paramarg0: KotlinType): boolean;
    static isBuiltIn(paramarg0: DeclarationDescriptor): boolean;
    static isDefaultBound(paramarg0: KotlinType): boolean;
    static isDeprecated(paramarg0: DeclarationDescriptor): boolean;
    static isKClass(paramarg0: ClassDescriptor): boolean;
    static isNothing(paramarg0: KotlinType): boolean;
    static isNothingOrNullableNothing(paramarg0: KotlinType): boolean;
    static isNullableAny(paramarg0: KotlinType): boolean;
    static isPrimitiveArray(paramarg0: KotlinType): boolean;
    static isPrimitiveClass(paramarg0: ClassDescriptor): boolean;
    static isPrimitiveType(paramarg0: KotlinType): boolean;
    static isPrimitiveTypeOrNullablePrimitiveType(paramarg0: KotlinType): boolean;
    static isSpecialClassWithNoSupertypes(paramarg0: ClassDescriptor): boolean;
    static isString(paramarg0: KotlinType): boolean;
    static isTypeConstructorForGivenClass(paramarg0: TypeConstructor, paramarg1: FqNameUnsafe): boolean;
    static isUByteArray(paramarg0: KotlinType): boolean;
    static isUIntArray(paramarg0: KotlinType): boolean;
    static isULongArray(paramarg0: KotlinType): boolean;
    static isUShortArray(paramarg0: KotlinType): boolean;
    static isUnderKotlinPackage(paramarg0: DeclarationDescriptor): boolean;
    static isUnit(paramarg0: KotlinType): boolean;
    static isUnsignedArrayType(paramarg0: KotlinType): boolean;
    constructor()
    constructor(arg0: boolean)
    constructor(arg0: boolean, arg1: number, arg2: DefaultConstructorMarker)
}