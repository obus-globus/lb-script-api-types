import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CallableMemberDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableMemberDescriptor.d.ts'
export abstract class OverridingStrategy extends Object {
    constructor()
    addFakeOverride(arg0: CallableMemberDescriptor): void;
    inheritanceConflict(arg0: CallableMemberDescriptor, arg1: CallableMemberDescriptor): void;
    overrideConflict(arg0: CallableMemberDescriptor, arg1: CallableMemberDescriptor): void;
    setOverriddenDescriptors(arg0: CallableMemberDescriptor, arg1: CallableMemberDescriptor[]): void;
}