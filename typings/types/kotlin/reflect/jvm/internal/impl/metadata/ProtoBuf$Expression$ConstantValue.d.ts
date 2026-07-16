import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { Internal$EnumLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/Internal$EnumLite.d.ts'
export class ProtoBuf$Expression$ConstantValue extends Enum<ProtoBuf$Expression$ConstantValue> implements Internal$EnumLite {
    static FALSE: ProtoBuf$Expression$ConstantValue;
    static NULL: ProtoBuf$Expression$ConstantValue;
    static TRUE: ProtoBuf$Expression$ConstantValue;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: number): ProtoBuf$Expression$ConstantValue;
    static valueOf(paramarg0: string): ProtoBuf$Expression$ConstantValue;
    static values(): ProtoBuf$Expression$ConstantValue[];
    private constructor(arg2: number, arg3: number)
    // private value: number;
    getNumber(): number;
    name(): "TRUE" | "FALSE" | "NULL";
}