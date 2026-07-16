import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Internal$EnumLite } from '../../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/Internal$EnumLite.d.ts'
export class JvmProtoBuf$StringTableTypes$Record$Operation extends Enum<JvmProtoBuf$StringTableTypes$Record$Operation> implements Internal$EnumLite {
    static DESC_TO_CLASS_ID: JvmProtoBuf$StringTableTypes$Record$Operation;
    static INTERNAL_TO_CLASS_ID: JvmProtoBuf$StringTableTypes$Record$Operation;
    static NONE: JvmProtoBuf$StringTableTypes$Record$Operation;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: number): JvmProtoBuf$StringTableTypes$Record$Operation;
    static valueOf(paramarg0: string): JvmProtoBuf$StringTableTypes$Record$Operation;
    static values(): JvmProtoBuf$StringTableTypes$Record$Operation[];
    private constructor(arg2: number, arg3: number)
    // private value: number;
    getNumber(): number;
    name(): "NONE" | "INTERNAL_TO_CLASS_ID" | "DESC_TO_CLASS_ID";
}