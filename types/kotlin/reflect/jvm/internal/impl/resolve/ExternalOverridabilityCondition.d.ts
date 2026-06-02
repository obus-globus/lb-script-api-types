import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CallableDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableDescriptor.d.ts'
import type { ClassDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { ExternalOverridabilityCondition$Contract } from '../../../../../../kotlin/reflect/jvm/internal/impl/resolve/ExternalOverridabilityCondition$Contract.d.ts'
import type { ExternalOverridabilityCondition$Result } from '../../../../../../kotlin/reflect/jvm/internal/impl/resolve/ExternalOverridabilityCondition$Result.d.ts'
export interface ExternalOverridabilityCondition extends Object{
    getContract(): ExternalOverridabilityCondition$Contract;
    isOverridable(arg0: CallableDescriptor, arg1: CallableDescriptor, arg2: ClassDescriptor): ExternalOverridabilityCondition$Result;
}