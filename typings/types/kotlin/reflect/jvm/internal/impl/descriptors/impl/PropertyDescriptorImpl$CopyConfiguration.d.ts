import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CallableMemberDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableMemberDescriptor.d.ts'
import type { CallableMemberDescriptor$Kind } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableMemberDescriptor$Kind.d.ts'
import type { DeclarationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { DescriptorVisibility } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DescriptorVisibility.d.ts'
import type { Modality } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/Modality.d.ts'
import type { PropertyDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyDescriptor.d.ts'
import type { PropertyGetterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyGetterDescriptor.d.ts'
import type { PropertySetterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertySetterDescriptor.d.ts'
import type { ReceiverParameterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ReceiverParameterDescriptor.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { PropertyDescriptorImpl } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/PropertyDescriptorImpl.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { KotlinType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { TypeSubstitution } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeSubstitution.d.ts'
export class PropertyDescriptorImpl$CopyConfiguration extends Object {
    constructor(null_: PropertyDescriptorImpl)
    // private copyOverrides: boolean;
    // private dispatchReceiverParameter: ReceiverParameterDescriptor;
    // private kind: CallableMemberDescriptor$Kind;
    // private modality: Modality;
    // private name: Name;
    // private newTypeParameters: TypeParameterDescriptor[];
    // private original: PropertyDescriptor;
    // private owner: DeclarationDescriptor;
    // private preserveSourceElement: boolean;
    // private returnType: KotlinType;
    // private substitution: TypeSubstitution;
    // private visibility: DescriptorVisibility;
    build(): PropertyDescriptor;
    getOriginalGetter(): PropertyGetterDescriptor;
    getOriginalSetter(): PropertySetterDescriptor;
    setCopyOverrides(arg0: boolean): PropertyDescriptorImpl$CopyConfiguration;
    setKind(arg0: CallableMemberDescriptor$Kind): PropertyDescriptorImpl$CopyConfiguration;
    setModality(arg0: Modality): PropertyDescriptorImpl$CopyConfiguration;
    setOriginal(arg0: CallableMemberDescriptor): PropertyDescriptorImpl$CopyConfiguration;
    setOwner(arg0: DeclarationDescriptor): PropertyDescriptorImpl$CopyConfiguration;
    setSubstitution(arg0: TypeSubstitution): PropertyDescriptorImpl$CopyConfiguration;
    setVisibility(arg0: DescriptorVisibility): PropertyDescriptorImpl$CopyConfiguration;
}