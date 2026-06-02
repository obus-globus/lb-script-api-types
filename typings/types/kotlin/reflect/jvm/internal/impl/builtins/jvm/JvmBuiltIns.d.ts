import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Function0 } from '../../../../../../../kotlin/jvm/functions/Function0.d.ts'
import type { KotlinBuiltIns } from '../../../../../../../kotlin/reflect/jvm/internal/impl/builtins/KotlinBuiltIns.d.ts'
import type { PrimitiveType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/builtins/PrimitiveType.d.ts'
import type { JvmBuiltIns$Kind } from '../../../../../../../kotlin/reflect/jvm/internal/impl/builtins/jvm/JvmBuiltIns$Kind.d.ts'
import type { JvmBuiltIns$Settings } from '../../../../../../../kotlin/reflect/jvm/internal/impl/builtins/jvm/JvmBuiltIns$Settings.d.ts'
import type { JvmBuiltInsCustomizer } from '../../../../../../../kotlin/reflect/jvm/internal/impl/builtins/jvm/JvmBuiltInsCustomizer.d.ts'
import type { ClassDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { DeclarationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { ModuleDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleDescriptor.d.ts'
import type { AdditionalClassPartsProvider } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/deserialization/AdditionalClassPartsProvider.d.ts'
import type { ClassDescriptorFactory } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/deserialization/ClassDescriptorFactory.d.ts'
import type { PlatformDependentDeclarationFilter } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/deserialization/PlatformDependentDeclarationFilter.d.ts'
import type { FqNameUnsafe } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqNameUnsafe.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { NotNullLazyValue } from '../../../../../../../kotlin/reflect/jvm/internal/impl/storage/NotNullLazyValue.d.ts'
import type { StorageManager } from '../../../../../../../kotlin/reflect/jvm/internal/impl/storage/StorageManager.d.ts'
import type { KotlinType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { TypeConstructor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeConstructor.d.ts'
export class JvmBuiltIns extends KotlinBuiltIns {
    static BUILTINS_MODULE_NAME: Name;
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
    constructor(arg0: StorageManager, arg1: JvmBuiltIns$Kind)
    // private customizer$delegate: NotNullLazyValue<Object>;
    // private kind: JvmBuiltIns$Kind;
    // private settingsComputation: () => JvmBuiltIns$Settings;
    getAdditionalClassPartsProvider(): AdditionalClassPartsProvider;
    getClassDescriptorFactories(): ClassDescriptorFactory[];
    getCustomizer(): JvmBuiltInsCustomizer;
    getPlatformDependentDeclarationFilter(): PlatformDependentDeclarationFilter;
    initialize(arg0: ModuleDescriptor, arg1: boolean): void;
    setPostponedSettingsComputation(arg0: Function0<JvmBuiltIns$Settings>): void;
}