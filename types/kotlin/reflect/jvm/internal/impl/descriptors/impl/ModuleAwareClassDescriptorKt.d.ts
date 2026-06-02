import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClassDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { MemberScope } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope.d.ts'
import type { TypeSubstitution } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeSubstitution.d.ts'
import type { KotlinTypeRefiner } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypeRefiner.d.ts'
export class ModuleAwareClassDescriptorKt extends Object {
    static getRefinedMemberScopeIfPossible(paramarg0: ClassDescriptor, paramarg1: TypeSubstitution, paramarg2: KotlinTypeRefiner): MemberScope;
    static getRefinedUnsubstitutedMemberScopeIfPossible(paramarg0: ClassDescriptor, paramarg1: KotlinTypeRefiner): MemberScope;
}