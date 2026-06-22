import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DeclarationDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { ModuleDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleDescriptor.d.ts'
import type { PackageFragmentDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PackageFragmentDescriptor.d.ts'
import type { FqName } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { Name } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { MemberScope } from '../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope.d.ts'
export interface PackageViewDescriptor extends Object, DeclarationDescriptor{
    getContainingDeclaration(): DeclarationDescriptor;
    getFqName(): FqName;
    getFragments(): PackageFragmentDescriptor[];
    getMemberScope(): MemberScope;
    getModule(): ModuleDescriptor;
    getName(): Name;
    getOriginal(): DeclarationDescriptor;
    isEmpty(): boolean;
}