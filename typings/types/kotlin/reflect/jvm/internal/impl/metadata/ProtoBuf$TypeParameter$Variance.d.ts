import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { Internal$EnumLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/Internal$EnumLite.d.ts'
export class ProtoBuf$TypeParameter$Variance extends Enum<ProtoBuf$TypeParameter$Variance> implements Internal$EnumLite {
    static IN: ProtoBuf$TypeParameter$Variance;
    static INV: ProtoBuf$TypeParameter$Variance;
    static OUT: ProtoBuf$TypeParameter$Variance;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: number): ProtoBuf$TypeParameter$Variance;
    static valueOf(paramarg0: string): ProtoBuf$TypeParameter$Variance;
    static values(): ProtoBuf$TypeParameter$Variance[];
    private constructor(arg2: number, arg3: number)
    // private value: number;
    getNumber(): number;
    name(): "IN" | "OUT" | "INV";
}