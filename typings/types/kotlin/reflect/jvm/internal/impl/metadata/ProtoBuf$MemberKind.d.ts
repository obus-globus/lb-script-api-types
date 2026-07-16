import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { Internal$EnumLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/Internal$EnumLite.d.ts'
export class ProtoBuf$MemberKind extends Enum<ProtoBuf$MemberKind> implements Internal$EnumLite {
    static DECLARATION: ProtoBuf$MemberKind;
    static DELEGATION: ProtoBuf$MemberKind;
    static FAKE_OVERRIDE: ProtoBuf$MemberKind;
    static SYNTHESIZED: ProtoBuf$MemberKind;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: number): ProtoBuf$MemberKind;
    static valueOf(paramarg0: string): ProtoBuf$MemberKind;
    static values(): ProtoBuf$MemberKind[];
    private constructor(arg2: number, arg3: number)
    // private value: number;
    getNumber(): number;
    name(): "DECLARATION" | "FAKE_OVERRIDE" | "DELEGATION" | "SYNTHESIZED";
}