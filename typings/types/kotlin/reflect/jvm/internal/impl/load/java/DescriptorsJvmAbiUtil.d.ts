import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CallableMemberDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableMemberDescriptor.d.ts'
import type { ClassDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { DeclarationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { PropertyDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyDescriptor.d.ts'
export class DescriptorsJvmAbiUtil extends Object {
    static hasJvmFieldAnnotation(paramarg0: CallableMemberDescriptor): boolean;
    static isClassCompanionObjectWithBackingFieldsInOuter(paramarg0: DeclarationDescriptor): boolean;
    static isMappedIntrinsicCompanionObject(paramarg0: ClassDescriptor): boolean;
    static isPropertyWithBackingFieldInOuterClass(paramarg0: PropertyDescriptor): boolean;
}