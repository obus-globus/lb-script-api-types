import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClassDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { DeclarationDescriptorVisitor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptorVisitor.d.ts'
import type { ReceiverParameterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ReceiverParameterDescriptor.d.ts'
import type { ModuleAwareClassDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/ModuleAwareClassDescriptor.d.ts'
import type { ModuleAwareClassDescriptor$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/ModuleAwareClassDescriptor$Companion.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { MemberScope } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope.d.ts'
import type { NotNullLazyValue } from '../../../../../../../kotlin/reflect/jvm/internal/impl/storage/NotNullLazyValue.d.ts'
import type { StorageManager } from '../../../../../../../kotlin/reflect/jvm/internal/impl/storage/StorageManager.d.ts'
import type { SimpleType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
import type { TypeSubstitution } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeSubstitution.d.ts'
import type { TypeSubstitutor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeSubstitutor.d.ts'
import type { KotlinTypeRefiner } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypeRefiner.d.ts'
export abstract class AbstractClassDescriptor extends ModuleAwareClassDescriptor {
    static Companion: ModuleAwareClassDescriptor$Companion;
    constructor(arg0: StorageManager, arg1: Name)
    readonly defaultType: NotNullLazyValue<SimpleType>;
    readonly name: Name;
    readonly thisAsReceiverParameter: NotNullLazyValue<ReceiverParameterDescriptor>;
    readonly unsubstitutedInnerClassesScope: NotNullLazyValue<MemberScope>;
    accept<R extends Object | number | string | boolean, D extends Object | number | string | boolean>(arg0: DeclarationDescriptorVisitor<R, D>, arg1: D): R;
    getContextReceivers(): ReceiverParameterDescriptor[];
    getDefaultType(): SimpleType;
    getMemberScope(arg0: TypeSubstitution): MemberScope;
    getMemberScope(arg0: TypeSubstitution, arg1: KotlinTypeRefiner): MemberScope;
    getName(): Name;
    getOriginal(): ClassDescriptor;
    getThisAsReceiverParameter(): ReceiverParameterDescriptor;
    getUnsubstitutedInnerClassesScope(): MemberScope;
    getUnsubstitutedMemberScope(): MemberScope;
    substitute(arg0: TypeSubstitutor): ClassDescriptor;
}