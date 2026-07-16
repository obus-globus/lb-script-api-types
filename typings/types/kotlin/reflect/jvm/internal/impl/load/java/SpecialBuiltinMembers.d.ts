import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CallableDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableDescriptor.d.ts'
import type { CallableMemberDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableMemberDescriptor.d.ts'
import type { ClassDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
export class SpecialBuiltinMembers extends Object {
    static doesOverrideBuiltinWithDifferentJvmName(paramarg0: CallableMemberDescriptor): boolean;
    static getJvmMethodNameIfSpecial(paramarg0: CallableMemberDescriptor): string;
    static getOverriddenBuiltinWithDifferentJvmName<T extends CallableMemberDescriptor>(paramarg0: T): T;
    static getOverriddenSpecialBuiltin<T extends CallableMemberDescriptor>(paramarg0: T): T;
    static hasRealKotlinSuperClassWithOverrideOf(paramarg0: ClassDescriptor, paramarg1: CallableDescriptor): boolean;
    static isFromJava(paramarg0: CallableMemberDescriptor): boolean;
    static isFromJavaOrBuiltins(paramarg0: CallableMemberDescriptor): boolean;
}