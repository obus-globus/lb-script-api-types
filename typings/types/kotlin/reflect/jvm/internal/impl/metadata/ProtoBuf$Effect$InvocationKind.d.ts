import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { Internal$EnumLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/Internal$EnumLite.d.ts'
export class ProtoBuf$Effect$InvocationKind extends Enum<ProtoBuf$Effect$InvocationKind> implements Internal$EnumLite {
    static AT_LEAST_ONCE: ProtoBuf$Effect$InvocationKind;
    static AT_MOST_ONCE: ProtoBuf$Effect$InvocationKind;
    static EXACTLY_ONCE: ProtoBuf$Effect$InvocationKind;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: number): ProtoBuf$Effect$InvocationKind;
    static valueOf(paramarg0: string): ProtoBuf$Effect$InvocationKind;
    static values(): ProtoBuf$Effect$InvocationKind[];
    private constructor(arg2: number, arg3: number)
    // private value: number;
    getNumber(): number;
    name(): "AT_MOST_ONCE" | "EXACTLY_ONCE" | "AT_LEAST_ONCE";
}