import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class JsonToken extends Enum<JsonToken> {
    static END_ARRAY: JsonToken;
    static END_OBJECT: JsonToken;
    static FIELD_NAME: JsonToken;
    static NOT_AVAILABLE: JsonToken;
    static START_ARRAY: JsonToken;
    static START_OBJECT: JsonToken;
    static VALUE_EMBEDDED_OBJECT: JsonToken;
    static VALUE_FALSE: JsonToken;
    static VALUE_NULL: JsonToken;
    static VALUE_NUMBER_FLOAT: JsonToken;
    static VALUE_NUMBER_INT: JsonToken;
    static VALUE_STRING: JsonToken;
    static VALUE_TRUE: JsonToken;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): JsonToken;
    static values(): (Object | null)[];
    private constructor(arg2: string, arg3: number)
    // private _id: number;
    // private _isBoolean: boolean;
    // private _isNumber: boolean;
    // private _isScalar: boolean;
    // private _isStructEnd: boolean;
    // private _isStructStart: boolean;
    // private _serialized: string;
    // private _serializedBytes: number[];
    // private _serializedChars: string[];
    asCharArray(): string[];
    asString(): string;
    id(): number;
    isBoolean(): boolean;
    isNumeric(): boolean;
    isScalarValue(): boolean;
    isStructEnd(): boolean;
    isStructStart(): boolean;
    name(): "NOT_AVAILABLE" | "START_OBJECT" | "END_OBJECT" | "START_ARRAY" | "END_ARRAY" | "FIELD_NAME" | "VALUE_EMBEDDED_OBJECT" | "VALUE_STRING" | "VALUE_NUMBER_INT" | "VALUE_NUMBER_FLOAT" | "VALUE_TRUE" | "VALUE_FALSE" | "VALUE_NULL";
}