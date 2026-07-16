import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { Internal$EnumLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/Internal$EnumLite.d.ts'
export class ProtoBuf$Effect$EffectType extends Enum<ProtoBuf$Effect$EffectType> implements Internal$EnumLite {
    static CALLS: ProtoBuf$Effect$EffectType;
    static RETURNS_CONSTANT: ProtoBuf$Effect$EffectType;
    static RETURNS_NOT_NULL: ProtoBuf$Effect$EffectType;
    static RETURNS_RESULT_OF: ProtoBuf$Effect$EffectType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: number): ProtoBuf$Effect$EffectType;
    static valueOf(paramarg0: string): ProtoBuf$Effect$EffectType;
    static values(): ProtoBuf$Effect$EffectType[];
    private constructor(arg2: number, arg3: number)
    // private value: number;
    getNumber(): number;
    name(): "RETURNS_CONSTANT" | "CALLS" | "RETURNS_NOT_NULL" | "RETURNS_RESULT_OF";
}