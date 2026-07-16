import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { Internal$EnumLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/Internal$EnumLite.d.ts'
export class ProtoBuf$Effect$EffectConditionKind extends Enum<ProtoBuf$Effect$EffectConditionKind> implements Internal$EnumLite {
    static CONCLUSION_CONDITION: ProtoBuf$Effect$EffectConditionKind;
    static HOLDSIN_CONDITION: ProtoBuf$Effect$EffectConditionKind;
    static RETURNS_CONDITION: ProtoBuf$Effect$EffectConditionKind;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: number): ProtoBuf$Effect$EffectConditionKind;
    static valueOf(paramarg0: string): ProtoBuf$Effect$EffectConditionKind;
    static values(): ProtoBuf$Effect$EffectConditionKind[];
    private constructor(arg2: number, arg3: number)
    // private value: number;
    getNumber(): number;
    name(): "CONCLUSION_CONDITION" | "RETURNS_CONDITION" | "HOLDSIN_CONDITION";
}