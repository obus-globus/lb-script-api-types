import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CallableDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableDescriptor.d.ts'
import type { CallableDescriptor$UserDataKey } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableDescriptor$UserDataKey.d.ts'
import type { DeclarationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { DeclarationDescriptorVisitor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptorVisitor.d.ts'
import type { DescriptorVisibility } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DescriptorVisibility.d.ts'
import type { ParameterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ParameterDescriptor.d.ts'
import type { ReceiverParameterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ReceiverParameterDescriptor.d.ts'
import type { SourceElement } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { ValueParameterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ValueParameterDescriptor.d.ts'
import type { AnnotationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { DeclarationDescriptorImpl } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/DeclarationDescriptorImpl.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { ReceiverValue } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/receivers/ReceiverValue.d.ts'
import type { KotlinType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { TypeSubstitutor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeSubstitutor.d.ts'
export abstract class AbstractReceiverParameterDescriptor extends DeclarationDescriptorImpl implements ReceiverParameterDescriptor {
    static toString(paramarg0: DeclarationDescriptor): string;
    constructor(arg0: AnnotationDescriptor[])
    constructor(arg0: AnnotationDescriptor[], arg1: Name)
    accept<R extends unknown, D extends unknown>(arg0: DeclarationDescriptorVisitor<R, D>, arg1: D): R;
    getContainingDeclaration(): DeclarationDescriptor;
    getContextReceiverParameters(): ReceiverParameterDescriptor[];
    getDispatchReceiverParameter(): ReceiverParameterDescriptor;
    getExtensionReceiverParameter(): ReceiverParameterDescriptor;
    getOriginal(): ParameterDescriptor;
    getOverriddenDescriptors(): CallableDescriptor[];
    getReturnType(): KotlinType;
    getSource(): SourceElement;
    getType(): KotlinType;
    getTypeParameters(): TypeParameterDescriptor[];
    getUserData<V extends unknown>(arg0: CallableDescriptor$UserDataKey<V>): V;
    getValue(): ReceiverValue;
    getValueParameters(): ValueParameterDescriptor[];
    getVisibility(): DescriptorVisibility;
    hasSynthesizedParameterNames(): boolean;
    substitute(arg0: TypeSubstitutor): ReceiverParameterDescriptor;
}