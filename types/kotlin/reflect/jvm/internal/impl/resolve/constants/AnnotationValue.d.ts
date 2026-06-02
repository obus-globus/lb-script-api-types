import type { ModuleDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleDescriptor.d.ts'
import type { AnnotationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { ConstantValue } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/constants/ConstantValue.d.ts'
import type { KotlinType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export class AnnotationValue extends ConstantValue<AnnotationDescriptor> {
    constructor(arg0: AnnotationDescriptor)
    getType(arg0: ModuleDescriptor): KotlinType;
}