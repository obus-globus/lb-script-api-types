import type { DeclarationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { ModuleDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleDescriptor.d.ts'
import type { PackageFragmentDescriptorImpl } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/PackageFragmentDescriptorImpl.d.ts'
import type { FqName } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { MemberScope$Empty } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope$Empty.d.ts'
export class EmptyPackageFragmentDescriptor extends PackageFragmentDescriptorImpl {
    static toString(paramarg0: DeclarationDescriptor): string;
    constructor(arg0: ModuleDescriptor, arg1: FqName)
    getMemberScope(): MemberScope$Empty;
}