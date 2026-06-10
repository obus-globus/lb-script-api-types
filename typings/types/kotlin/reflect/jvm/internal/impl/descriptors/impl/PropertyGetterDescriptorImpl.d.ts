import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CallableMemberDescriptor$Kind } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableMemberDescriptor$Kind.d.ts'
import type { DeclarationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { DeclarationDescriptorVisitor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptorVisitor.d.ts'
import type { DescriptorVisibility } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DescriptorVisibility.d.ts'
import type { Modality } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/Modality.d.ts'
import type { PropertyAccessorDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyAccessorDescriptor.d.ts'
import type { PropertyDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyDescriptor.d.ts'
import type { PropertyGetterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyGetterDescriptor.d.ts'
import type { SourceElement } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { ValueParameterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ValueParameterDescriptor.d.ts'
import type { AnnotationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { PropertyAccessorDescriptorImpl } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/PropertyAccessorDescriptorImpl.d.ts'
import type { KotlinType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export class PropertyGetterDescriptorImpl extends PropertyAccessorDescriptorImpl implements PropertyGetterDescriptor {
    static toString(paramarg0: DeclarationDescriptor): string;
    constructor(arg0: PropertyDescriptor, arg1: AnnotationDescriptor[], arg2: Modality, arg3: DescriptorVisibility, arg4: boolean, arg5: boolean, arg6: boolean, arg7: CallableMemberDescriptor$Kind, arg8: PropertyGetterDescriptor, arg9: SourceElement)
    readonly original: PropertyGetterDescriptor;
    readonly returnType: KotlinType;
    accept<R extends Object | number | string | boolean, D extends Object | number | string | boolean>(arg0: DeclarationDescriptorVisitor<R, D>, arg1: D): R;
    getOriginal(): PropertyGetterDescriptor;
    getOverriddenDescriptors(): PropertyGetterDescriptor[];
    getOverriddenDescriptors(arg0: boolean): PropertyAccessorDescriptor[];
    getReturnType(): KotlinType;
    getValueParameters(): ValueParameterDescriptor[];
    initialize(arg0: KotlinType): void;
}