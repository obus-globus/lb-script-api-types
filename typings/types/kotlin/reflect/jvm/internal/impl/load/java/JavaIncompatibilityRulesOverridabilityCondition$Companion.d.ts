import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DefaultConstructorMarker } from '../../../../../../../kotlin/jvm/internal/DefaultConstructorMarker.d.ts'
import type { CallableDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableDescriptor.d.ts'
import type { FunctionDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/FunctionDescriptor.d.ts'
import type { ValueParameterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ValueParameterDescriptor.d.ts'
import type { JvmType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/JvmType.d.ts'
export class JavaIncompatibilityRulesOverridabilityCondition$Companion extends Object {
    private constructor()
    constructor(arg0: DefaultConstructorMarker)
    doesJavaOverrideHaveIncompatibleValueParameterKinds(arg0: CallableDescriptor, arg1: CallableDescriptor): boolean;
    // private isPrimitiveCompareTo(arg0: FunctionDescriptor): boolean;
    // private mapValueParameterType(arg0: FunctionDescriptor, arg1: ValueParameterDescriptor): JvmType;
}