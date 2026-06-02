import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClassDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { ClassifierDescriptorWithTypeParameters } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassifierDescriptorWithTypeParameters.d.ts'
import type { SimpleType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
export interface TypeAliasDescriptor extends Object, ClassifierDescriptorWithTypeParameters{
    getClassDescriptor(): ClassDescriptor;
    getExpandedType(): SimpleType;
    getUnderlyingType(): SimpleType;
}