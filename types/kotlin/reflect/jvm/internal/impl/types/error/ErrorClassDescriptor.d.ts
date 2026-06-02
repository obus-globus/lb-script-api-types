import type { ClassDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { ClassDescriptorImpl } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/ClassDescriptorImpl.d.ts'
import type { ModuleAwareClassDescriptor$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/ModuleAwareClassDescriptor$Companion.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { MemberScope } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope.d.ts'
import type { TypeSubstitution } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeSubstitution.d.ts'
import type { TypeSubstitutor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeSubstitutor.d.ts'
import type { KotlinTypeRefiner } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypeRefiner.d.ts'
export class ErrorClassDescriptor extends ClassDescriptorImpl {
    static Companion: ModuleAwareClassDescriptor$Companion;
    constructor(arg0: Name)
    getMemberScope(arg0: TypeSubstitution, arg1: KotlinTypeRefiner): MemberScope;
    substitute(arg0: TypeSubstitutor): ClassDescriptor;
    toString(): string;
}