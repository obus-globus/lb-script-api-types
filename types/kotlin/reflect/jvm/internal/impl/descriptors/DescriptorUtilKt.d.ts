import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClassDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { ClassifierDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassifierDescriptor.d.ts'
import type { DeclarationDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { FunctionDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/FunctionDescriptor.d.ts'
import type { ModuleDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleDescriptor.d.ts'
import type { LookupLocation } from '../../../../../../kotlin/reflect/jvm/internal/impl/incremental/components/LookupLocation.d.ts'
import type { FqName } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
export class DescriptorUtilKt extends Object {
    static getTopLevelContainingClassifier(paramarg0: DeclarationDescriptor): ClassifierDescriptor;
    static isTopLevelInPackage(paramarg0: DeclarationDescriptor): boolean;
    static isTypedEqualsInValueClass(paramarg0: FunctionDescriptor): boolean;
    static resolveClassByFqName(paramarg0: ModuleDescriptor, paramarg1: FqName, paramarg2: LookupLocation): ClassDescriptor;
}