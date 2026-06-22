import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClassOrPackageFragmentDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassOrPackageFragmentDescriptor.d.ts'
import type { DeclarationDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { ModuleDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleDescriptor.d.ts'
import type { SourceElement } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { FqName } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { Name } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { MemberScope } from '../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope.d.ts'
export interface PackageFragmentDescriptor extends Object, ClassOrPackageFragmentDescriptor{
    getContainingDeclaration(): ModuleDescriptor;
    getFqName(): FqName;
    getMemberScope(): MemberScope;
    getName(): Name;
    getOriginal(): DeclarationDescriptor;
    getSource(): SourceElement;
}