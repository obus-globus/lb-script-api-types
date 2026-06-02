import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { Internal$EnumLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/Internal$EnumLite.d.ts'
export class ProtoBuf$Annotation$Argument$Value$Type extends Enum<ProtoBuf$Annotation$Argument$Value$Type> implements Internal$EnumLite {
    static ANNOTATION: ProtoBuf$Annotation$Argument$Value$Type;
    static ARRAY: ProtoBuf$Annotation$Argument$Value$Type;
    static BOOLEAN: ProtoBuf$Annotation$Argument$Value$Type;
    static BYTE: ProtoBuf$Annotation$Argument$Value$Type;
    static CHAR: ProtoBuf$Annotation$Argument$Value$Type;
    static CLASS: ProtoBuf$Annotation$Argument$Value$Type;
    static DOUBLE: ProtoBuf$Annotation$Argument$Value$Type;
    static ENUM: ProtoBuf$Annotation$Argument$Value$Type;
    static FLOAT: ProtoBuf$Annotation$Argument$Value$Type;
    static INT: ProtoBuf$Annotation$Argument$Value$Type;
    static LONG: ProtoBuf$Annotation$Argument$Value$Type;
    static SHORT: ProtoBuf$Annotation$Argument$Value$Type;
    static STRING: ProtoBuf$Annotation$Argument$Value$Type;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: number): ProtoBuf$Annotation$Argument$Value$Type;
    static valueOf(paramarg0: string): ProtoBuf$Annotation$Argument$Value$Type;
    static values(): (Object | null)[];
    private constructor(arg2: number, arg3: number)
    // private value: number;
    getNumber(): number;
    name(): "BYTE" | "CHAR" | "SHORT" | "INT" | "LONG" | "FLOAT" | "DOUBLE" | "BOOLEAN" | "STRING" | "CLASS" | "ENUM" | "ANNOTATION" | "ARRAY";
}