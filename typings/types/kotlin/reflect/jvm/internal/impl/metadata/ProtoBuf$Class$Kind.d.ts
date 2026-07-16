import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { Internal$EnumLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/Internal$EnumLite.d.ts'
export class ProtoBuf$Class$Kind extends Enum<ProtoBuf$Class$Kind> implements Internal$EnumLite {
    static ANNOTATION_CLASS: ProtoBuf$Class$Kind;
    static CLASS: ProtoBuf$Class$Kind;
    static COMPANION_OBJECT: ProtoBuf$Class$Kind;
    static ENUM_CLASS: ProtoBuf$Class$Kind;
    static ENUM_ENTRY: ProtoBuf$Class$Kind;
    static INTERFACE: ProtoBuf$Class$Kind;
    static OBJECT: ProtoBuf$Class$Kind;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: number): ProtoBuf$Class$Kind;
    static valueOf(paramarg0: string): ProtoBuf$Class$Kind;
    static values(): ProtoBuf$Class$Kind[];
    private constructor(arg2: number, arg3: number)
    // private value: number;
    getNumber(): number;
    name(): "CLASS" | "INTERFACE" | "ENUM_CLASS" | "ENUM_ENTRY" | "ANNOTATION_CLASS" | "OBJECT" | "COMPANION_OBJECT";
}