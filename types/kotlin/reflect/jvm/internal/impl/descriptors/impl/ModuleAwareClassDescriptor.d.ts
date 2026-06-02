import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClassDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { ModuleAwareClassDescriptor$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/ModuleAwareClassDescriptor$Companion.d.ts'
import type { MemberScope } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope.d.ts'
import type { TypeSubstitution } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeSubstitution.d.ts'
import type { KotlinTypeRefiner } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypeRefiner.d.ts'
export abstract class ModuleAwareClassDescriptor extends Object implements ClassDescriptor {
    static Companion: ModuleAwareClassDescriptor$Companion;
    constructor()
    getMemberScope(arg0: TypeSubstitution, arg1: KotlinTypeRefiner): MemberScope;
    getUnsubstitutedMemberScope(arg0: KotlinTypeRefiner): MemberScope;
}