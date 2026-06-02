import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CallableDescriptor$UserDataKey } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableDescriptor$UserDataKey.d.ts'
import type { CallableMemberDescriptor$Kind } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableMemberDescriptor$Kind.d.ts'
import type { DeclarationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { DeclarationDescriptorVisitor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptorVisitor.d.ts'
import type { DescriptorVisibility } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DescriptorVisibility.d.ts'
import type { FieldDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/FieldDescriptor.d.ts'
import type { Modality } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/Modality.d.ts'
import type { PropertyAccessorDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyAccessorDescriptor.d.ts'
import type { PropertyDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyDescriptor.d.ts'
import type { PropertySetterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertySetterDescriptor.d.ts'
import type { ReceiverParameterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ReceiverParameterDescriptor.d.ts'
import type { SourceElement } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { AnnotationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { PropertyDescriptorImpl$CopyConfiguration } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/PropertyDescriptorImpl$CopyConfiguration.d.ts'
import type { PropertyGetterDescriptorImpl } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/PropertyGetterDescriptorImpl.d.ts'
import type { VariableDescriptorWithInitializerImpl } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/VariableDescriptorWithInitializerImpl.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { KotlinType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { TypeSubstitutor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeSubstitutor.d.ts'
export class PropertyDescriptorImpl extends VariableDescriptorWithInitializerImpl implements PropertyDescriptor {
    static create(paramarg0: DeclarationDescriptor, paramarg1: AnnotationDescriptor[], paramarg2: Modality, paramarg3: DescriptorVisibility, paramarg4: boolean, paramarg5: Name, paramarg6: CallableMemberDescriptor$Kind, paramarg7: SourceElement, paramarg8: boolean, paramarg9: boolean, paramarg10: boolean, paramarg11: boolean, paramarg12: boolean, paramarg13: boolean): PropertyDescriptorImpl;
    static toString(paramarg0: DeclarationDescriptor): string;
    constructor(arg0: DeclarationDescriptor, arg1: PropertyDescriptor, arg2: AnnotationDescriptor[], arg3: Modality, arg4: DescriptorVisibility, arg5: boolean, arg6: Name, arg7: CallableMemberDescriptor$Kind, arg8: SourceElement, arg9: boolean, arg10: boolean, arg11: boolean, arg12: boolean, arg13: boolean, arg14: boolean)
    readonly backingField: FieldDescriptor;
    readonly contextReceiverParameters: ReceiverParameterDescriptor[];
    readonly delegateField: FieldDescriptor;
    readonly dispatchReceiverParameter: ReceiverParameterDescriptor;
    readonly extensionReceiverParameter: ReceiverParameterDescriptor;
    readonly getter: PropertyGetterDescriptorImpl;
    // private isActual: boolean;
    // private isConst: boolean;
    // private isDelegated: boolean;
    // private isExpect: boolean;
    // private isExternal: boolean;
    readonly kind: CallableMemberDescriptor$Kind;
    readonly lateInit: boolean;
    readonly modality: Modality;
    readonly original: PropertyDescriptor;
    // private overriddenProperties: E[];
    readonly setter: PropertySetterDescriptor;
    readonly setterProjectedOut: boolean;
    readonly typeParameters: TypeParameterDescriptor[];
    readonly visibility: DescriptorVisibility;
    accept<R extends Object | number | string | boolean, D extends Object | number | string | boolean>(arg0: DeclarationDescriptorVisitor<R, D>, arg1: D): R;
    copy(arg0: DeclarationDescriptor, arg1: Modality, arg2: DescriptorVisibility, arg3: CallableMemberDescriptor$Kind, arg4: boolean): PropertyDescriptor;
    createSubstitutedCopy(arg0: DeclarationDescriptor, arg1: Modality, arg2: DescriptorVisibility, arg3: PropertyDescriptor, arg4: CallableMemberDescriptor$Kind, arg5: Name, arg6: SourceElement): PropertyDescriptorImpl;
    doSubstitute(arg0: PropertyDescriptorImpl$CopyConfiguration): PropertyDescriptor;
    getAccessors(): PropertyAccessorDescriptor[];
    getBackingField(): FieldDescriptor;
    getContextReceiverParameters(): ReceiverParameterDescriptor[];
    getDelegateField(): FieldDescriptor;
    getDispatchReceiverParameter(): ReceiverParameterDescriptor;
    getExtensionReceiverParameter(): ReceiverParameterDescriptor;
    getGetter(): PropertyGetterDescriptorImpl;
    getKind(): CallableMemberDescriptor$Kind;
    getModality(): Modality;
    getOriginal(): PropertyDescriptor;
    getOverriddenDescriptors(): E[];
    getReturnType(): KotlinType;
    getSetter(): PropertySetterDescriptor;
    // private getSourceToUseForCopy(arg0: boolean, arg1: PropertyDescriptor): SourceElement;
    getTypeParameters(): TypeParameterDescriptor[];
    getUserData<V extends Object | number | string | boolean>(arg0: CallableDescriptor$UserDataKey<V>): V;
    getVisibility(): DescriptorVisibility;
    initialize(arg0: PropertyGetterDescriptorImpl, arg1: PropertySetterDescriptor): void;
    initialize(arg0: PropertyGetterDescriptorImpl, arg1: PropertySetterDescriptor, arg2: FieldDescriptor, arg3: FieldDescriptor): void;
    isActual(): boolean;
    isConst(): boolean;
    isDelegated(): boolean;
    isExpect(): boolean;
    isExternal(): boolean;
    isLateInit(): boolean;
    isSetterProjectedOut(): boolean;
    newCopyBuilder(): PropertyDescriptorImpl$CopyConfiguration;
    setInType(arg0: KotlinType): void;
    setOverriddenDescriptors(arg0: E[]): void;
    setSetterProjectedOut(arg0: boolean): void;
    setType(arg0: KotlinType, arg1: TypeParameterDescriptor[], arg2: ReceiverParameterDescriptor, arg3: ReceiverParameterDescriptor, arg4: ReceiverParameterDescriptor[]): void;
    setVisibility(arg0: DescriptorVisibility): void;
    substitute(arg0: TypeSubstitutor): PropertyDescriptor;
}