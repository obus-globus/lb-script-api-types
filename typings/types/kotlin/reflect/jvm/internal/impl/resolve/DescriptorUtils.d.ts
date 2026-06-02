import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClassDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { DeclarationDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { DescriptorVisibility } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DescriptorVisibility.d.ts'
import type { ModuleDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleDescriptor.d.ts'
import type { ReceiverParameterDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ReceiverParameterDescriptor.d.ts'
import type { SourceFile } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceFile.d.ts'
import type { VariableDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/VariableDescriptor.d.ts'
import type { FqName } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { FqNameUnsafe } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/FqNameUnsafe.d.ts'
import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { TypeConstructor } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeConstructor.d.ts'
export class DescriptorUtils extends Object {
    static JVM_NAME: FqName;
    static areInSameModule(paramarg0: DeclarationDescriptor, paramarg1: DeclarationDescriptor): boolean;
    static getAllOverriddenDescriptors(paramarg0: Object | null): (Object | null)[];
    static getClassDescriptorForType(paramarg0: KotlinType): ClassDescriptor;
    static getClassDescriptorForTypeConstructor(paramarg0: TypeConstructor): ClassDescriptor;
    static getContainingModule(paramarg0: DeclarationDescriptor): ModuleDescriptor;
    static getContainingModuleOrNull(paramarg0: DeclarationDescriptor): ModuleDescriptor;
    static getContainingModuleOrNull(paramarg0: KotlinType): ModuleDescriptor;
    static getContainingSourceFile(paramarg0: DeclarationDescriptor): SourceFile;
    static getDefaultConstructorVisibility(paramarg0: ClassDescriptor, paramarg1: boolean): DescriptorVisibility;
    static getDispatchReceiverParameterIfNeeded(paramarg0: DeclarationDescriptor): ReceiverParameterDescriptor;
    static getFqName(paramarg0: DeclarationDescriptor): FqNameUnsafe;
    static getFqNameSafe(paramarg0: DeclarationDescriptor): FqName;
    static getParentOfType(paramarg0: DeclarationDescriptor, paramarg1: Class<Object>): Object | null;
    static getParentOfType(paramarg0: DeclarationDescriptor, paramarg1: Class<Object>, paramarg2: boolean): Object | null;
    static getSuperClassDescriptor(paramarg0: ClassDescriptor): ClassDescriptor;
    static isAnnotationClass(paramarg0: DeclarationDescriptor): boolean;
    static isAnonymousObject(paramarg0: DeclarationDescriptor): boolean;
    static isClass(paramarg0: DeclarationDescriptor): boolean;
    static isClassOrEnumClass(paramarg0: DeclarationDescriptor): boolean;
    static isCompanionObject(paramarg0: DeclarationDescriptor): boolean;
    static isDescriptorWithLocalVisibility(paramarg0: DeclarationDescriptor): boolean;
    static isDirectSubclass(paramarg0: ClassDescriptor, paramarg1: ClassDescriptor): boolean;
    static isEnumClass(paramarg0: DeclarationDescriptor): boolean;
    static isEnumEntry(paramarg0: DeclarationDescriptor): boolean;
    static isInterface(paramarg0: DeclarationDescriptor): boolean;
    static isLocal(paramarg0: DeclarationDescriptor): boolean;
    static isSealedClass(paramarg0: DeclarationDescriptor): boolean;
    static isSubclass(paramarg0: ClassDescriptor, paramarg1: ClassDescriptor): boolean;
    static isSubtypeOfClass(paramarg0: KotlinType, paramarg1: DeclarationDescriptor): boolean;
    static isTopLevelDeclaration(paramarg0: DeclarationDescriptor): boolean;
    static shouldRecordInitializerForProperty(paramarg0: VariableDescriptor, paramarg1: KotlinType): boolean;
    static unwrapFakeOverride(paramarg0: Object | null): Object | null;
    static unwrapFakeOverrideToAnyDeclaration(paramarg0: Object | null): Object | null;
    private constructor()
}