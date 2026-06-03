import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClassifierDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassifierDescriptor.d.ts'
import type { LookupLocation } from '../../../../../../../kotlin/reflect/jvm/internal/impl/incremental/components/LookupLocation.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { DescriptorKindFilter } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/DescriptorKindFilter.d.ts'
import type { MemberScope } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope.d.ts'
import type { MemberScope$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope$Companion.d.ts'
export abstract class AbstractScopeAdapter extends Object implements MemberScope {
    static Companion: MemberScope$Companion;
    constructor()
    getActualScope(): MemberScope;
    getClassifierNames(): Name[];
    getContributedClassifier(arg0: Name, arg1: LookupLocation): ClassifierDescriptor;
    getContributedDescriptors(arg0: DescriptorKindFilter, arg1: (param0: Name) => boolean): E[];
    getContributedFunctions(arg0: Name, arg1: LookupLocation): E[];
    getContributedVariables(arg0: Name, arg1: LookupLocation): E[];
    getFunctionNames(): Name[];
    getVariableNames(): Name[];
    getWorkerScope(): MemberScope;
    recordLookup(arg0: Name, arg1: LookupLocation): void;
}