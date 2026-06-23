import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CallableDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableDescriptor.d.ts'
import type { DeclarationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { DeclarationDescriptorVisitor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptorVisitor.d.ts'
import type { DescriptorVisibility } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DescriptorVisibility.d.ts'
import type { SourceElement } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { ValueParameterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ValueParameterDescriptor.d.ts'
import type { VariableDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/VariableDescriptor.d.ts'
import type { AnnotationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { ValueParameterDescriptorImpl$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/ValueParameterDescriptorImpl$Companion.d.ts'
import type { VariableDescriptorImpl } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/VariableDescriptorImpl.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { KotlinType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { TypeSubstitutor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeSubstitutor.d.ts'
export class ValueParameterDescriptorImpl extends VariableDescriptorImpl implements ValueParameterDescriptor {
    static Companion: ValueParameterDescriptorImpl$Companion;
    static createWithDestructuringDeclarations(paramarg0: CallableDescriptor, paramarg1: ValueParameterDescriptor, paramarg2: number, paramarg3: AnnotationDescriptor[], paramarg4: Name, paramarg5: KotlinType, paramarg6: boolean, paramarg7: boolean, paramarg8: boolean, paramarg9: KotlinType, paramarg10: SourceElement, paramarg11: () => VariableDescriptor[]): ValueParameterDescriptorImpl;
    static toString(paramarg0: DeclarationDescriptor): string;
    constructor(arg0: CallableDescriptor, arg1: ValueParameterDescriptor, arg2: number, arg3: AnnotationDescriptor[], arg4: Name, arg5: KotlinType, arg6: boolean, arg7: boolean, arg8: boolean, arg9: KotlinType, arg10: SourceElement)
    // private declaresDefaultValue: boolean;
    readonly index: number;
    // private isCrossinline: boolean;
    // private isNoinline: boolean;
    readonly original: ValueParameterDescriptor;
    readonly varargElementType: KotlinType;
    accept<R extends unknown, D extends unknown>(arg0: DeclarationDescriptorVisitor<R, D>, arg1: D): R;
    copy(arg0: CallableDescriptor, arg1: Name, arg2: number): ValueParameterDescriptor;
    declaresDefaultValue(): boolean;
    getCompileTimeInitializer(): void;
    getContainingDeclaration(): CallableDescriptor;
    getIndex(): number;
    getOriginal(): ValueParameterDescriptor;
    getOverriddenDescriptors(): ValueParameterDescriptor[];
    getVarargElementType(): KotlinType;
    getVisibility(): DescriptorVisibility;
    isCrossinline(): boolean;
    isLateInit(): boolean;
    isNoinline(): boolean;
    isVar(): boolean;
    substitute(arg0: TypeSubstitutor): ValueParameterDescriptor;
}