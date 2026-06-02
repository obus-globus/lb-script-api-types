import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CallableDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableDescriptor.d.ts'
import type { ParameterDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ParameterDescriptor.d.ts'
import type { VariableDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/VariableDescriptor.d.ts'
import type { Name } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export interface ValueParameterDescriptor extends Object, ParameterDescriptor, VariableDescriptor{
    copy(arg0: CallableDescriptor, arg1: Name, arg2: number): ValueParameterDescriptor;
    declaresDefaultValue(): boolean;
    getContainingDeclaration(): CallableDescriptor;
    getIndex(): number;
    getOriginal(): ValueParameterDescriptor;
    getOverriddenDescriptors(): E[];
    getVarargElementType(): KotlinType;
    isCrossinline(): boolean;
    isNoinline(): boolean;
}