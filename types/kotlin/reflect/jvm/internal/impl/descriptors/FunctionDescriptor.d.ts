import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CallableMemberDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableMemberDescriptor.d.ts'
import type { DeclarationDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { FunctionDescriptor$CopyBuilder } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/FunctionDescriptor$CopyBuilder.d.ts'
import type { TypeSubstitutor } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeSubstitutor.d.ts'
export interface FunctionDescriptor extends Object, CallableMemberDescriptor{
    getContainingDeclaration(): DeclarationDescriptor;
    getInitialSignatureDescriptor(): FunctionDescriptor;
    getOriginal(): FunctionDescriptor;
    getOverriddenDescriptors(): E[];
    isHiddenForResolutionEverywhereBesideSupercalls(): boolean;
    isHiddenToOvercomeSignatureClash(): boolean;
    isInfix(): boolean;
    isInline(): boolean;
    isOperator(): boolean;
    isSuspend(): boolean;
    isTailrec(): boolean;
    newCopyBuilder(): FunctionDescriptor$CopyBuilder<FunctionDescriptor>;
    substitute(arg0: TypeSubstitutor): FunctionDescriptor;
}