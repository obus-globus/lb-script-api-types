import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClassifierDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassifierDescriptor.d.ts'
import type { MemberDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/MemberDescriptor.d.ts'
import type { Substitutable } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/Substitutable.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
export interface ClassifierDescriptorWithTypeParameters extends Object, ClassifierDescriptor, MemberDescriptor, Substitutable<ClassifierDescriptorWithTypeParameters>{
    getDeclaredTypeParameters(): TypeParameterDescriptor[];
    isInner(): boolean;
}