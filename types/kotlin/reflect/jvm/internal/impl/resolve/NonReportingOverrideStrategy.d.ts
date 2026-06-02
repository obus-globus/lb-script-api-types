import type { CallableMemberDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableMemberDescriptor.d.ts'
import type { OverridingStrategy } from '../../../../../../kotlin/reflect/jvm/internal/impl/resolve/OverridingStrategy.d.ts'
export abstract class NonReportingOverrideStrategy extends OverridingStrategy {
    constructor()
    conflict(arg0: CallableMemberDescriptor, arg1: CallableMemberDescriptor): void;
    inheritanceConflict(arg0: CallableMemberDescriptor, arg1: CallableMemberDescriptor): void;
    overrideConflict(arg0: CallableMemberDescriptor, arg1: CallableMemberDescriptor): void;
}