import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../../../../../kotlin/jvm/functions/Function1.d.ts'
import type { Lazy } from '../../../../../../../kotlin/Lazy.d.ts'
import type { ClassifierDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassifierDescriptor.d.ts'
import type { DeclarationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { LookupLocation } from '../../../../../../../kotlin/reflect/jvm/internal/impl/incremental/components/LookupLocation.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { DescriptorKindFilter } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/DescriptorKindFilter.d.ts'
import type { MemberScope } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope.d.ts'
import type { MemberScope$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope$Companion.d.ts'
import type { TypeSubstitutor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeSubstitutor.d.ts'
export class SubstitutingScope extends Object implements MemberScope {
    static Companion: MemberScope$Companion;
    constructor(arg0: MemberScope, arg1: TypeSubstitutor)
    // private _allDescriptors$delegate: Lazy<Object>;
    // private capturingSubstitutor: TypeSubstitutor;
    // private substitutedDescriptors: Map<DeclarationDescriptor, DeclarationDescriptor>;
    // private substitutor$delegate: Lazy<Object>;
    // private workerScope: MemberScope;
    getClassifierNames(): Name[];
    getContributedClassifier(arg0: Name, arg1: LookupLocation): ClassifierDescriptor;
    getContributedDescriptors(arg0: DescriptorKindFilter, arg1: Function1<Name, boolean>): E[];
    getContributedFunctions(arg0: Name, arg1: LookupLocation): E[];
    getContributedVariables(arg0: Name, arg1: LookupLocation): E[];
    getFunctionNames(): Name[];
    getVariableNames(): Name[];
    // private get_allDescriptors(): E[];
    recordLookup(arg0: Name, arg1: LookupLocation): void;
    // private substitute(arg0: E[]): E[];
    // private substitute<D extends DeclarationDescriptor>(arg0: D): D;
}