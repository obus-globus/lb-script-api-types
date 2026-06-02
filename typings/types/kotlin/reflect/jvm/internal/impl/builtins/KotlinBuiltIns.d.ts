import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { KotlinBuiltIns$Primitives } from '../../../../../../kotlin/reflect/jvm/internal/impl/builtins/KotlinBuiltIns$Primitives.d.ts'
import type { PrimitiveType } from '../../../../../../kotlin/reflect/jvm/internal/impl/builtins/PrimitiveType.d.ts'
import type { ClassDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { DeclarationDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { AnnotationDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { AdditionalClassPartsProvider } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/deserialization/AdditionalClassPartsProvider.d.ts'
import type { ClassDescriptorFactory } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/deserialization/ClassDescriptorFactory.d.ts'
import type { PlatformDependentDeclarationFilter } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/deserialization/PlatformDependentDeclarationFilter.d.ts'
import type { ModuleDescriptorImpl } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/ModuleDescriptorImpl.d.ts'
import type { FqName } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { FqNameUnsafe } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/FqNameUnsafe.d.ts'
import type { Name } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { MemberScope } from '../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope.d.ts'
import type { MemoizedFunctionToNotNull } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/MemoizedFunctionToNotNull.d.ts'
import type { NotNullLazyValue } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/NotNullLazyValue.d.ts'
import type { StorageManager } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/StorageManager.d.ts'
import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { SimpleType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
import type { TypeConstructor } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeConstructor.d.ts'
import type { Variance } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/Variance.d.ts'
export abstract class KotlinBuiltIns extends Object {
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
    constructor(arg0: StorageManager)
    // private builtInClassesByName: MemoizedFunctionToNotNull<Name, ClassDescriptor>;
    // private builtInPackagesImportedByDefault: NotNullLazyValue<E[]>;
    readonly builtInsModule: ModuleDescriptorImpl;
    // private postponedBuiltInsModule: NotNullLazyValue<ModuleDescriptorImpl>;
    // private primitives: NotNullLazyValue<KotlinBuiltIns$Primitives>;
    // private storageManager: StorageManager;
    createBuiltInsModule(arg0: boolean): void;
    getAdditionalClassPartsProvider(): AdditionalClassPartsProvider;
    getAny(): ClassDescriptor;
    getAnyType(): SimpleType;
    getArray(): ClassDescriptor;
    getArrayElementType(arg0: KotlinType): KotlinType;
    getArrayElementTypeOrNull(arg0: KotlinType): KotlinType;
    getArrayType(arg0: Variance, arg1: KotlinType): SimpleType;
    getArrayType(arg0: Variance, arg1: KotlinType, arg2: AnnotationDescriptor[]): SimpleType;
    getBooleanType(): SimpleType;
    getBuiltInClassByFqName(arg0: FqName): ClassDescriptor;
    // private getBuiltInClassByName(arg0: string): ClassDescriptor;
    // private getBuiltInTypeByClassName(arg0: string): SimpleType;
    getBuiltInsModule(): ModuleDescriptorImpl;
    getBuiltInsPackageScope(): MemberScope;
    getByteType(): SimpleType;
    getCharType(): SimpleType;
    getClassDescriptorFactories(): ClassDescriptorFactory[];
    getCollection(): ClassDescriptor;
    getComparable(): ClassDescriptor;
    getDefaultBound(): SimpleType;
    getDoubleType(): SimpleType;
    getFloatType(): SimpleType;
    getFunction(arg0: number): ClassDescriptor;
    getIntType(): SimpleType;
    getKClass(): ClassDescriptor;
    getLongType(): SimpleType;
    getNothing(): ClassDescriptor;
    getNothingType(): SimpleType;
    getNullableAnyType(): SimpleType;
    getNullableNothingType(): SimpleType;
    getNumber(): ClassDescriptor;
    getNumberType(): SimpleType;
    getPlatformDependentDeclarationFilter(): PlatformDependentDeclarationFilter;
    getPrimitiveArrayKotlinType(arg0: PrimitiveType): SimpleType;
    // private getPrimitiveClassDescriptor(arg0: PrimitiveType): ClassDescriptor;
    getPrimitiveKotlinType(arg0: PrimitiveType): SimpleType;
    getShortType(): SimpleType;
    getStorageManager(): StorageManager;
    getString(): ClassDescriptor;
    getStringType(): SimpleType;
    getSuspendFunction(arg0: number): ClassDescriptor;
    getUnit(): ClassDescriptor;
    getUnitType(): SimpleType;
    setBuiltInsModule(arg0: ModuleDescriptorImpl): void;
}