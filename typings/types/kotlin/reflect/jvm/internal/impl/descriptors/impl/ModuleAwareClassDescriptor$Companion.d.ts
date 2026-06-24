import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DefaultConstructorMarker } from '../../../../../../../kotlin/jvm/internal/DefaultConstructorMarker.d.ts'
import type { ClassDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { MemberScope } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope.d.ts'
import type { TypeSubstitution } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeSubstitution.d.ts'
import type { KotlinTypeRefiner } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypeRefiner.d.ts'
export class ModuleAwareClassDescriptor$Companion extends Object {
    private constructor()
    constructor(arg0: DefaultConstructorMarker)
    getRefinedMemberScopeIfPossible$org_jetbrains_kotlin_descriptors(arg0: ClassDescriptor, arg1: TypeSubstitution, arg2: KotlinTypeRefiner): MemberScope;
    getRefinedUnsubstitutedMemberScopeIfPossible$org_jetbrains_kotlin_descriptors(arg0: ClassDescriptor, arg1: KotlinTypeRefiner): MemberScope;
}