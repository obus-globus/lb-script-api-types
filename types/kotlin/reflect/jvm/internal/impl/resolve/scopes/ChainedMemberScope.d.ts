import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../../../../../kotlin/jvm/functions/Function1.d.ts'
import type { ClassifierDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassifierDescriptor.d.ts'
import type { LookupLocation } from '../../../../../../../kotlin/reflect/jvm/internal/impl/incremental/components/LookupLocation.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { ChainedMemberScope$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/ChainedMemberScope$Companion.d.ts'
import type { DescriptorKindFilter } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/DescriptorKindFilter.d.ts'
import type { MemberScope } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope.d.ts'
import type { MemberScope$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope$Companion.d.ts'
export class ChainedMemberScope extends Object implements MemberScope {
    static Companion: ChainedMemberScope$Companion;
    static Companion: MemberScope$Companion;
    private constructor(arg0: string, arg1: MemberScope[])
    // private debugName: string;
    // private scopes: MemberScope[];
    getClassifierNames(): Name[];
    getContributedClassifier(arg0: Name, arg1: LookupLocation): ClassifierDescriptor;
    getContributedDescriptors(arg0: DescriptorKindFilter, arg1: Function1<Name, boolean>): E[];
    getContributedFunctions(arg0: Name, arg1: LookupLocation): E[];
    getContributedVariables(arg0: Name, arg1: LookupLocation): E[];
    getFunctionNames(): Name[];
    getVariableNames(): Name[];
    recordLookup(arg0: Name, arg1: LookupLocation): void;
    toString(): string;
}