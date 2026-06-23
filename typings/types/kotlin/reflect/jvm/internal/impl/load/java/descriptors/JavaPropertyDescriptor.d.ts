import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../../../../../kotlin/Pair.d.ts'
import type { CallableDescriptor$UserDataKey } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableDescriptor$UserDataKey.d.ts'
import type { CallableMemberDescriptor$Kind } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableMemberDescriptor$Kind.d.ts'
import type { DeclarationDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { DescriptorVisibility } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DescriptorVisibility.d.ts'
import type { Modality } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/Modality.d.ts'
import type { PropertyDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyDescriptor.d.ts'
import type { SourceElement } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { AnnotationDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { PropertyDescriptorImpl } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/PropertyDescriptorImpl.d.ts'
import type { JavaCallableMemberDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/descriptors/JavaCallableMemberDescriptor.d.ts'
import type { Name } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { KotlinType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export class JavaPropertyDescriptor extends PropertyDescriptorImpl implements JavaCallableMemberDescriptor {
    static create(paramarg0: DeclarationDescriptor, paramarg1: AnnotationDescriptor[], paramarg2: Modality, paramarg3: DescriptorVisibility, paramarg4: boolean, paramarg5: Name, paramarg6: CallableMemberDescriptor$Kind, paramarg7: SourceElement, paramarg8: boolean, paramarg9: boolean, paramarg10: boolean, paramarg11: boolean, paramarg12: boolean, paramarg13: boolean): PropertyDescriptorImpl;
    static create(paramarg0: DeclarationDescriptor, paramarg1: AnnotationDescriptor[], paramarg2: Modality, paramarg3: DescriptorVisibility, paramarg4: boolean, paramarg5: Name, paramarg6: SourceElement, paramarg7: boolean): JavaPropertyDescriptor;
    static toString(paramarg0: DeclarationDescriptor): string;
    constructor(arg0: DeclarationDescriptor, arg1: AnnotationDescriptor[], arg2: Modality, arg3: DescriptorVisibility, arg4: boolean, arg5: Name, arg6: SourceElement, arg7: PropertyDescriptor, arg8: CallableMemberDescriptor$Kind, arg9: boolean, arg10: Pair<CallableDescriptor$UserDataKey<Object>, Object>)
    readonly inType: KotlinType;
    // private isStaticFinal: boolean;
    // private singleUserData: Pair<CallableDescriptor$UserDataKey<Object>, Object>;
    createSubstitutedCopy(arg0: DeclarationDescriptor, arg1: Modality, arg2: DescriptorVisibility, arg3: PropertyDescriptor, arg4: CallableMemberDescriptor$Kind, arg5: Name, arg6: SourceElement): PropertyDescriptorImpl;
    enhance(arg0: KotlinType, arg1: KotlinType[], arg2: KotlinType, arg3: Pair<CallableDescriptor$UserDataKey<Object>, Object>): JavaCallableMemberDescriptor;
    getUserData<V extends unknown>(arg0: CallableDescriptor$UserDataKey<V>): V;
    hasSynthesizedParameterNames(): boolean;
    isConst(): boolean;
    setInType(arg0: KotlinType): void;
}