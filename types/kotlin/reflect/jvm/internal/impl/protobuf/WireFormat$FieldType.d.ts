import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { WireFormat$JavaType } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/WireFormat$JavaType.d.ts'
export class WireFormat$FieldType extends Enum<WireFormat$FieldType> {
    static BOOL: WireFormat$FieldType;
    static BYTES: WireFormat$FieldType;
    static DOUBLE: WireFormat$FieldType;
    static ENUM: WireFormat$FieldType;
    static FIXED32: WireFormat$FieldType;
    static FIXED64: WireFormat$FieldType;
    static FLOAT: WireFormat$FieldType;
    static GROUP: WireFormat$FieldType;
    static INT32: WireFormat$FieldType;
    static INT64: WireFormat$FieldType;
    static MESSAGE: WireFormat$FieldType;
    static SFIXED32: WireFormat$FieldType;
    static SFIXED64: WireFormat$FieldType;
    static SINT32: WireFormat$FieldType;
    static SINT64: WireFormat$FieldType;
    static STRING: WireFormat$FieldType;
    static UINT32: WireFormat$FieldType;
    static UINT64: WireFormat$FieldType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): WireFormat$FieldType;
    static values(): (Object | null)[];
    private constructor(arg2: WireFormat$JavaType, arg3: number)
    readonly javaType: WireFormat$JavaType;
    readonly wireType: number;
    getJavaType(): WireFormat$JavaType;
    getWireType(): number;
    isPackable(): boolean;
    name(): "DOUBLE" | "FLOAT" | "INT64" | "UINT64" | "INT32" | "FIXED64" | "FIXED32" | "BOOL" | "STRING" | "GROUP" | "MESSAGE" | "BYTES" | "UINT32" | "ENUM" | "SFIXED32" | "SFIXED64" | "SINT32" | "SINT64";
}