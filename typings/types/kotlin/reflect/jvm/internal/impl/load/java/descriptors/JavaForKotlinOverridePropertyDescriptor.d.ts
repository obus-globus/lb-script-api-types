import type { CallableMemberDescriptor$Kind } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableMemberDescriptor$Kind.d.ts'
import type { ClassDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { DeclarationDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { DescriptorVisibility } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DescriptorVisibility.d.ts'
import type { Modality } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/Modality.d.ts'
import type { PropertyDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyDescriptor.d.ts'
import type { SimpleFunctionDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SimpleFunctionDescriptor.d.ts'
import type { SourceElement } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { AnnotationDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { PropertyDescriptorImpl } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/PropertyDescriptorImpl.d.ts'
import type { JavaPropertyDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/descriptors/JavaPropertyDescriptor.d.ts'
import type { Name } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
export class JavaForKotlinOverridePropertyDescriptor extends JavaPropertyDescriptor {
    static create(paramarg0: DeclarationDescriptor, paramarg1: AnnotationDescriptor[], paramarg2: Modality, paramarg3: DescriptorVisibility, paramarg4: boolean, paramarg5: Name, paramarg6: CallableMemberDescriptor$Kind, paramarg7: SourceElement, paramarg8: boolean, paramarg9: boolean, paramarg10: boolean, paramarg11: boolean, paramarg12: boolean, paramarg13: boolean): PropertyDescriptorImpl;
    static create(paramarg0: DeclarationDescriptor, paramarg1: AnnotationDescriptor[], paramarg2: Modality, paramarg3: DescriptorVisibility, paramarg4: boolean, paramarg5: Name, paramarg6: SourceElement, paramarg7: boolean): JavaPropertyDescriptor;
    static toString(paramarg0: DeclarationDescriptor): string;
    constructor(arg0: ClassDescriptor, arg1: SimpleFunctionDescriptor, arg2: SimpleFunctionDescriptor, arg3: PropertyDescriptor)
    // private getterMethod: SimpleFunctionDescriptor;
    // private overriddenProperty: PropertyDescriptor;
    // private setterMethod: SimpleFunctionDescriptor;
}