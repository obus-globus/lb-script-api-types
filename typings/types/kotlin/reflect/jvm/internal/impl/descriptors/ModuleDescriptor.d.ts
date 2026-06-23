import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { KotlinBuiltIns } from '../../../../../../kotlin/reflect/jvm/internal/impl/builtins/KotlinBuiltIns.d.ts'
import type { DeclarationDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { ModuleCapability } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleCapability.d.ts'
import type { PackageViewDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PackageViewDescriptor.d.ts'
import type { FqName } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { Name } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
export interface ModuleDescriptor extends Object, DeclarationDescriptor {
    getBuiltIns(): KotlinBuiltIns;
    getCapability<T extends unknown>(arg0: ModuleCapability<T>): T;
    getContainingDeclaration(): DeclarationDescriptor;
    getExpectedByModules(): ModuleDescriptor[];
    getName(): Name;
    getOriginal(): DeclarationDescriptor;
    getPackage(arg0: FqName): PackageViewDescriptor;
    getSubPackagesOf(arg0: FqName, arg1: (param0: Name) => boolean): FqName[];
    shouldSeeInternalsOf(arg0: ModuleDescriptor): boolean;
}