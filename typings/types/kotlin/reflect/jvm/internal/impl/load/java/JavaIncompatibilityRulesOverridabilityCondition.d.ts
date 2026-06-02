import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CallableDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableDescriptor.d.ts'
import type { ClassDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { JavaIncompatibilityRulesOverridabilityCondition$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/JavaIncompatibilityRulesOverridabilityCondition$Companion.d.ts'
import type { ExternalOverridabilityCondition } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/ExternalOverridabilityCondition.d.ts'
import type { ExternalOverridabilityCondition$Contract } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/ExternalOverridabilityCondition$Contract.d.ts'
import type { ExternalOverridabilityCondition$Result } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/ExternalOverridabilityCondition$Result.d.ts'
export class JavaIncompatibilityRulesOverridabilityCondition extends Object implements ExternalOverridabilityCondition {
    static Companion: JavaIncompatibilityRulesOverridabilityCondition$Companion;
    constructor()
    getContract(): ExternalOverridabilityCondition$Contract;
    // private isIncompatibleInAccordanceWithBuiltInOverridabilityRules(arg0: CallableDescriptor, arg1: CallableDescriptor, arg2: ClassDescriptor): boolean;
    isOverridable(arg0: CallableDescriptor, arg1: CallableDescriptor, arg2: ClassDescriptor): ExternalOverridabilityCondition$Result;
}