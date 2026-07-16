import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { Internal$EnumLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/Internal$EnumLite.d.ts'
export class ProtoBuf$ReturnValueStatus extends Enum<ProtoBuf$ReturnValueStatus> implements Internal$EnumLite {
    static EXPLICITLY_IGNORABLE: ProtoBuf$ReturnValueStatus;
    static MUST_USE: ProtoBuf$ReturnValueStatus;
    static UNSPECIFIED: ProtoBuf$ReturnValueStatus;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: number): ProtoBuf$ReturnValueStatus;
    static valueOf(paramarg0: string): ProtoBuf$ReturnValueStatus;
    static values(): ProtoBuf$ReturnValueStatus[];
    private constructor(arg2: number, arg3: number)
    // private value: number;
    getNumber(): number;
    name(): "UNSPECIFIED" | "MUST_USE" | "EXPLICITLY_IGNORABLE";
}