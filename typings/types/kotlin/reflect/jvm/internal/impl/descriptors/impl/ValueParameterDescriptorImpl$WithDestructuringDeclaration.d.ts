import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Lazy } from '../../../../../../../kotlin/Lazy.d.ts'
import type { CallableDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableDescriptor.d.ts'
import type { DeclarationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { SourceElement } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { ValueParameterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ValueParameterDescriptor.d.ts'
import type { VariableDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/VariableDescriptor.d.ts'
import type { AnnotationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { ValueParameterDescriptorImpl } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/ValueParameterDescriptorImpl.d.ts'
import type { ValueParameterDescriptorImpl$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/ValueParameterDescriptorImpl$Companion.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { KotlinType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export class ValueParameterDescriptorImpl$WithDestructuringDeclaration extends ValueParameterDescriptorImpl {
    static Companion: ValueParameterDescriptorImpl$Companion;
    static createWithDestructuringDeclarations(paramarg0: CallableDescriptor, paramarg1: ValueParameterDescriptor, paramarg2: number, paramarg3: AnnotationDescriptor[], paramarg4: Name, paramarg5: KotlinType, paramarg6: boolean, paramarg7: boolean, paramarg8: boolean, paramarg9: KotlinType, paramarg10: SourceElement, paramarg11: () => VariableDescriptor[]): ValueParameterDescriptorImpl;
    static toString(paramarg0: DeclarationDescriptor): string;
    constructor(arg0: CallableDescriptor, arg1: ValueParameterDescriptor, arg2: number, arg3: AnnotationDescriptor[], arg4: Name, arg5: KotlinType, arg6: boolean, arg7: boolean, arg8: boolean, arg9: KotlinType, arg10: SourceElement, arg11: () => VariableDescriptor[])
    // private destructuringVariables$delegate: Lazy<Object>;
    copy(arg0: CallableDescriptor, arg1: Name, arg2: number): ValueParameterDescriptor;
    getDestructuringVariables(): VariableDescriptor[];
}