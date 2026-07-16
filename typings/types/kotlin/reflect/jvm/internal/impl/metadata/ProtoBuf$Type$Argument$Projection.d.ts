import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { Internal$EnumLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/Internal$EnumLite.d.ts'
export class ProtoBuf$Type$Argument$Projection extends Enum<ProtoBuf$Type$Argument$Projection> implements Internal$EnumLite {
    static IN: ProtoBuf$Type$Argument$Projection;
    static INV: ProtoBuf$Type$Argument$Projection;
    static OUT: ProtoBuf$Type$Argument$Projection;
    static STAR: ProtoBuf$Type$Argument$Projection;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: number): ProtoBuf$Type$Argument$Projection;
    static valueOf(paramarg0: string): ProtoBuf$Type$Argument$Projection;
    static values(): ProtoBuf$Type$Argument$Projection[];
    private constructor(arg2: number, arg3: number)
    // private value: number;
    getNumber(): number;
    name(): "IN" | "OUT" | "INV" | "STAR";
}