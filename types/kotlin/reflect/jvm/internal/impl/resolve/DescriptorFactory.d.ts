import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CallableDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableDescriptor.d.ts'
import type { ClassDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { DescriptorVisibility } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DescriptorVisibility.d.ts'
import type { PropertyDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyDescriptor.d.ts'
import type { ReceiverParameterDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ReceiverParameterDescriptor.d.ts'
import type { SimpleFunctionDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SimpleFunctionDescriptor.d.ts'
import type { SourceElement } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { AnnotationDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { ClassConstructorDescriptorImpl } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/ClassConstructorDescriptorImpl.d.ts'
import type { PropertyGetterDescriptorImpl } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/PropertyGetterDescriptorImpl.d.ts'
import type { PropertySetterDescriptorImpl } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/PropertySetterDescriptorImpl.d.ts'
import type { Name } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export class DescriptorFactory extends Object {
    static createContextReceiverParameterForCallable(paramarg0: CallableDescriptor, paramarg1: KotlinType, paramarg2: Name, paramarg3: AnnotationDescriptor[], paramarg4: number): ReceiverParameterDescriptor;
    static createContextReceiverParameterForClass(paramarg0: ClassDescriptor, paramarg1: KotlinType, paramarg2: Name, paramarg3: AnnotationDescriptor[], paramarg4: number): ReceiverParameterDescriptor;
    static createDefaultGetter(paramarg0: PropertyDescriptor, paramarg1: AnnotationDescriptor[]): PropertyGetterDescriptorImpl;
    static createDefaultSetter(paramarg0: PropertyDescriptor, paramarg1: AnnotationDescriptor[], paramarg2: AnnotationDescriptor[]): PropertySetterDescriptorImpl;
    static createEnumEntriesProperty(paramarg0: ClassDescriptor): PropertyDescriptor;
    static createEnumValueOfMethod(paramarg0: ClassDescriptor): SimpleFunctionDescriptor;
    static createEnumValuesMethod(paramarg0: ClassDescriptor): SimpleFunctionDescriptor;
    static createExtensionReceiverParameterForCallable(paramarg0: CallableDescriptor, paramarg1: KotlinType, paramarg2: AnnotationDescriptor[]): ReceiverParameterDescriptor;
    static createGetter(paramarg0: PropertyDescriptor, paramarg1: AnnotationDescriptor[], paramarg2: boolean, paramarg3: boolean, paramarg4: boolean): PropertyGetterDescriptorImpl;
    static createGetter(paramarg0: PropertyDescriptor, paramarg1: AnnotationDescriptor[], paramarg2: boolean, paramarg3: boolean, paramarg4: boolean, paramarg5: SourceElement): PropertyGetterDescriptorImpl;
    static createPrimaryConstructorForObject(paramarg0: ClassDescriptor, paramarg1: SourceElement): ClassConstructorDescriptorImpl;
    static createSetter(paramarg0: PropertyDescriptor, paramarg1: AnnotationDescriptor[], paramarg2: AnnotationDescriptor[], paramarg3: boolean, paramarg4: boolean, paramarg5: boolean, paramarg6: DescriptorVisibility, paramarg7: SourceElement): PropertySetterDescriptorImpl;
    static createSetter(paramarg0: PropertyDescriptor, paramarg1: AnnotationDescriptor[], paramarg2: AnnotationDescriptor[], paramarg3: boolean, paramarg4: boolean, paramarg5: boolean, paramarg6: SourceElement): PropertySetterDescriptorImpl;
}