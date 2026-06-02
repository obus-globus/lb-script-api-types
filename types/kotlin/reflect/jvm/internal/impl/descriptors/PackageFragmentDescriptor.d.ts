import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClassOrPackageFragmentDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassOrPackageFragmentDescriptor.d.ts'
import type { ModuleDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleDescriptor.d.ts'
import type { FqName } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { MemberScope } from '../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope.d.ts'
export interface PackageFragmentDescriptor extends Object, ClassOrPackageFragmentDescriptor{
    getContainingDeclaration(): ModuleDescriptor;
    getFqName(): FqName;
    getMemberScope(): MemberScope;
}