import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class WireFormat$JavaType extends Enum<WireFormat$JavaType> {
    static BOOLEAN: WireFormat$JavaType;
    static BYTE_STRING: WireFormat$JavaType;
    static DOUBLE: WireFormat$JavaType;
    static ENUM: WireFormat$JavaType;
    static FLOAT: WireFormat$JavaType;
    static INT: WireFormat$JavaType;
    static LONG: WireFormat$JavaType;
    static MESSAGE: WireFormat$JavaType;
    static STRING: WireFormat$JavaType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): WireFormat$JavaType;
    static values(): WireFormat$JavaType[];
    private constructor(arg2: Object)
    // private defaultDefault: Object;
    name(): "INT" | "LONG" | "FLOAT" | "DOUBLE" | "BOOLEAN" | "STRING" | "BYTE_STRING" | "ENUM" | "MESSAGE";
}