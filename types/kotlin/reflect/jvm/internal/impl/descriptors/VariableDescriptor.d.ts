import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ValueDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ValueDescriptor.d.ts'
import type { ConstantValue } from '../../../../../../kotlin/reflect/jvm/internal/impl/resolve/constants/ConstantValue.d.ts'
import type { TypeSubstitutor } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeSubstitutor.d.ts'
export interface VariableDescriptor extends Object, ValueDescriptor{
    getCompileTimeInitializer(): ConstantValue<Object>;
    isConst(): boolean;
    isLateInit(): boolean;
    isVar(): boolean;
    substitute(arg0: TypeSubstitutor): VariableDescriptor;
}