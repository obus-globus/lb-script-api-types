import type { FunctionDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/FunctionDescriptor.d.ts'
import type { ReceiverParameterDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ReceiverParameterDescriptor.d.ts'
import type { AbstractModifierChecks } from '../../../../../../kotlin/reflect/jvm/internal/impl/util/AbstractModifierChecks.d.ts'
import type { Checks } from '../../../../../../kotlin/reflect/jvm/internal/impl/util/Checks.d.ts'
export class OperatorChecks extends AbstractModifierChecks {
    static INSTANCE: OperatorChecks;
    private constructor()
    getChecks$org_jetbrains_kotlin_descriptors(): Checks[];
    // private incDecCheckForExpectClass(arg0: FunctionDescriptor, arg1: ReceiverParameterDescriptor): boolean;
}