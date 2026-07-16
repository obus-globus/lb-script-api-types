import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { CallableMemberDescriptor } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableMemberDescriptor.d.ts'
export class KClassImpl$MemberBelonginess extends Enum<KClassImpl$MemberBelonginess> implements Serializable {
    static DECLARED: KClassImpl$MemberBelonginess;
    static INHERITED: KClassImpl$MemberBelonginess;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): KClassImpl$MemberBelonginess;
    static values(): KClassImpl$MemberBelonginess[];
    private constructor()
    accept(member: CallableMemberDescriptor): boolean;
    name(): "DECLARED" | "INHERITED";
}