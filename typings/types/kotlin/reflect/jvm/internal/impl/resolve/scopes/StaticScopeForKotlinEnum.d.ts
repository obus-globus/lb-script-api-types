import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../../../../../kotlin/jvm/functions/Function1.d.ts'
import type { CallableMemberDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableMemberDescriptor.d.ts'
import type { ClassDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { PropertyDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyDescriptor.d.ts'
import type { SimpleFunctionDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SimpleFunctionDescriptor.d.ts'
import type { LookupLocation } from '../../../../../../../kotlin/reflect/jvm/internal/impl/incremental/components/LookupLocation.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { DescriptorKindFilter } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/DescriptorKindFilter.d.ts'
import type { MemberScope$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope$Companion.d.ts'
import type { MemberScopeImpl } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScopeImpl.d.ts'
import type { NotNullLazyValue } from '../../../../../../../kotlin/reflect/jvm/internal/impl/storage/NotNullLazyValue.d.ts'
import type { StorageManager } from '../../../../../../../kotlin/reflect/jvm/internal/impl/storage/StorageManager.d.ts'
export class StaticScopeForKotlinEnum extends MemberScopeImpl {
    static Companion: MemberScope$Companion;
    constructor(arg0: StorageManager, arg1: ClassDescriptor, arg2: boolean)
    // private containingClass: ClassDescriptor;
    // private enumEntriesCanBeUsed: boolean;
    // private functions$delegate: NotNullLazyValue<Object>;
    // private properties$delegate: NotNullLazyValue<Object>;
    getContributedClassifier(arg0: Name, arg1: LookupLocation): void;
    getContributedDescriptors(arg0: DescriptorKindFilter, arg1: Function1<Name, boolean>): CallableMemberDescriptor[];
    getContributedFunctions(arg0: Name, arg1: LookupLocation): SimpleFunctionDescriptor[];
    getContributedVariables(arg0: Name, arg1: LookupLocation): E[];
    // private getFunctions(): SimpleFunctionDescriptor[];
    // private getProperties(): PropertyDescriptor[];
}