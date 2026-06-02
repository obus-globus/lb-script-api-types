import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClassDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { ClassifierDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassifierDescriptor.d.ts'
import type { ModuleDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleDescriptor.d.ts'
import type { NotFoundClasses } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/NotFoundClasses.d.ts'
import type { TypeAliasDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeAliasDescriptor.d.ts'
import type { ClassId } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
export class FindClassInModuleKt extends Object {
    static findClassAcrossModuleDependencies(paramarg0: ModuleDescriptor, paramarg1: ClassId): ClassDescriptor;
    static findClassifierAcrossModuleDependencies(paramarg0: ModuleDescriptor, paramarg1: ClassId): ClassifierDescriptor;
    static findNonGenericClassAcrossDependencies(paramarg0: ModuleDescriptor, paramarg1: ClassId, paramarg2: NotFoundClasses): ClassDescriptor;
    static findTypeAliasAcrossModuleDependencies(paramarg0: ModuleDescriptor, paramarg1: ClassId): TypeAliasDescriptor;
}