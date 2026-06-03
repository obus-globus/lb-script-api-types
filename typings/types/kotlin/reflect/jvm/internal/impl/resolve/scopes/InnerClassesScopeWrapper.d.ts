import type { ClassifierDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassifierDescriptor.d.ts'
import type { LookupLocation } from '../../../../../../../kotlin/reflect/jvm/internal/impl/incremental/components/LookupLocation.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { DescriptorKindFilter } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/DescriptorKindFilter.d.ts'
import type { MemberScope } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope.d.ts'
import type { MemberScope$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope$Companion.d.ts'
import type { MemberScopeImpl } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScopeImpl.d.ts'
export class InnerClassesScopeWrapper extends MemberScopeImpl {
    static Companion: MemberScope$Companion;
    constructor(arg0: MemberScope)
    // private workerScope: MemberScope;
    getClassifierNames(): Name[];
    getContributedClassifier(arg0: Name, arg1: LookupLocation): ClassifierDescriptor;
    getContributedDescriptors(arg0: DescriptorKindFilter, arg1: (param0: Name) => boolean): ClassifierDescriptor[];
    getFunctionNames(): Name[];
    getVariableNames(): Name[];
    recordLookup(arg0: Name, arg1: LookupLocation): void;
    toString(): string;
}