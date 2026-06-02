import type { Function1 } from '../../../../../../../kotlin/jvm/functions/Function1.d.ts'
import type { LookupLocation } from '../../../../../../../kotlin/reflect/jvm/internal/impl/incremental/components/LookupLocation.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { AbstractScopeAdapter } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/AbstractScopeAdapter.d.ts'
import type { DescriptorKindFilter } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/DescriptorKindFilter.d.ts'
import type { MemberScope } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope.d.ts'
import type { MemberScope$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope$Companion.d.ts'
import type { TypeIntersectionScope$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/TypeIntersectionScope$Companion.d.ts'
export class TypeIntersectionScope extends AbstractScopeAdapter {
    static Companion: MemberScope$Companion;
    static Companion: TypeIntersectionScope$Companion;
    static create(paramarg0: string, paramarg1: E[]): MemberScope;
    private constructor(arg0: string, arg1: MemberScope)
    // private debugName: string;
    // private workerScope: MemberScope;
    getContributedDescriptors(arg0: DescriptorKindFilter, arg1: Function1<Name, boolean>): E[];
    getContributedFunctions(arg0: Name, arg1: LookupLocation): E[];
    getContributedVariables(arg0: Name, arg1: LookupLocation): E[];
    getWorkerScope(): MemberScope;
}