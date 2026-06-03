import type { ModuleDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleDescriptor.d.ts'
import type { PackageViewDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PackageViewDescriptor.d.ts'
import type { FqName } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { DescriptorKindFilter } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/DescriptorKindFilter.d.ts'
import type { MemberScope$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope$Companion.d.ts'
import type { MemberScopeImpl } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScopeImpl.d.ts'
export class SubpackagesScope extends MemberScopeImpl {
    static Companion: MemberScope$Companion;
    constructor(arg0: ModuleDescriptor, arg1: FqName)
    // private fqName: FqName;
    // private moduleDescriptor: ModuleDescriptor;
    getClassifierNames(): Name[];
    getContributedDescriptors(arg0: DescriptorKindFilter, arg1: (param0: Name) => boolean): E[];
    getPackage(arg0: Name): PackageViewDescriptor;
    toString(): string;
}