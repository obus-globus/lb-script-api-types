import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CallableDescriptor$UserDataKey } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableDescriptor$UserDataKey.d.ts'
import type { CallableMemberDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableMemberDescriptor.d.ts'
import type { CallableMemberDescriptor$Kind } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableMemberDescriptor$Kind.d.ts'
import type { DeclarationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { DescriptorVisibility } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DescriptorVisibility.d.ts'
import type { FunctionDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/FunctionDescriptor.d.ts'
import type { FunctionDescriptor$CopyBuilder } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/FunctionDescriptor$CopyBuilder.d.ts'
import type { Modality } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/Modality.d.ts'
import type { PropertyAccessorDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyAccessorDescriptor.d.ts'
import type { PropertyDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyDescriptor.d.ts'
import type { ReceiverParameterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ReceiverParameterDescriptor.d.ts'
import type { SourceElement } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { AnnotationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { DeclarationDescriptorNonRootImpl } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/DeclarationDescriptorNonRootImpl.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { KotlinType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { TypeSubstitutor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeSubstitutor.d.ts'
export abstract class PropertyAccessorDescriptorImpl extends DeclarationDescriptorNonRootImpl implements PropertyAccessorDescriptor {
    static toString(paramarg0: DeclarationDescriptor): string;
    constructor(arg0: Modality, arg1: DescriptorVisibility, arg2: PropertyDescriptor, arg3: AnnotationDescriptor[], arg4: Name, arg5: boolean, arg6: boolean, arg7: boolean, arg8: CallableMemberDescriptor$Kind, arg9: SourceElement)
    readonly correspondingProperty: PropertyDescriptor;
    readonly initialSignatureDescriptor: FunctionDescriptor;
    // private isDefault: boolean;
    // private isExternal: boolean;
    // private isInline: boolean;
    readonly kind: CallableMemberDescriptor$Kind;
    readonly modality: Modality;
    readonly visibility: DescriptorVisibility;
    copy(arg0: DeclarationDescriptor, arg1: Modality, arg2: DescriptorVisibility, arg3: CallableMemberDescriptor$Kind, arg4: boolean): PropertyAccessorDescriptor;
    getContextReceiverParameters(): ReceiverParameterDescriptor[];
    getCorrespondingProperty(): PropertyDescriptor;
    getDispatchReceiverParameter(): ReceiverParameterDescriptor;
    getExtensionReceiverParameter(): ReceiverParameterDescriptor;
    getInitialSignatureDescriptor(): FunctionDescriptor;
    getKind(): CallableMemberDescriptor$Kind;
    getModality(): Modality;
    getOriginal(): PropertyAccessorDescriptor;
    getOverriddenDescriptors(arg0: boolean): PropertyAccessorDescriptor[];
    getReturnType(): KotlinType;
    getTypeParameters(): TypeParameterDescriptor[];
    getUserData<V extends unknown>(arg0: CallableDescriptor$UserDataKey<V>): V;
    getVisibility(): DescriptorVisibility;
    hasSynthesizedParameterNames(): boolean;
    isActual(): boolean;
    isDefault(): boolean;
    isExpect(): boolean;
    isExternal(): boolean;
    isHiddenForResolutionEverywhereBesideSupercalls(): boolean;
    isHiddenToOvercomeSignatureClash(): boolean;
    isInfix(): boolean;
    isInline(): boolean;
    isOperator(): boolean;
    isSuspend(): boolean;
    isTailrec(): boolean;
    newCopyBuilder(): FunctionDescriptor$CopyBuilder<FunctionDescriptor>;
    setDefault(arg0: boolean): void;
    setInitialSignatureDescriptor(arg0: FunctionDescriptor): void;
    setOverriddenDescriptors(arg0: CallableMemberDescriptor[]): void;
    setVisibility(arg0: DescriptorVisibility): void;
    substitute(arg0: TypeSubstitutor): FunctionDescriptor;
}