import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class JsonGenerator$Feature extends Enum<JsonGenerator$Feature> {
    static AUTO_CLOSE_JSON_CONTENT: JsonGenerator$Feature;
    static AUTO_CLOSE_TARGET: JsonGenerator$Feature;
    static ESCAPE_NON_ASCII: JsonGenerator$Feature;
    static FLUSH_PASSED_TO_STREAM: JsonGenerator$Feature;
    static IGNORE_UNKNOWN: JsonGenerator$Feature;
    static QUOTE_FIELD_NAMES: JsonGenerator$Feature;
    static QUOTE_NON_NUMERIC_NUMBERS: JsonGenerator$Feature;
    static STRICT_DUPLICATE_DETECTION: JsonGenerator$Feature;
    static WRITE_BIGDECIMAL_AS_PLAIN: JsonGenerator$Feature;
    static WRITE_NUMBERS_AS_STRINGS: JsonGenerator$Feature;
    static collectDefaults(): number;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): JsonGenerator$Feature;
    static values(): JsonGenerator$Feature[];
    private constructor(arg2: boolean)
    // private _defaultState: boolean;
    // private _mask: number;
    enabledByDefault(): boolean;
    enabledIn(arg0: number): boolean;
    getMask(): number;
    name(): "AUTO_CLOSE_TARGET" | "AUTO_CLOSE_JSON_CONTENT" | "FLUSH_PASSED_TO_STREAM" | "QUOTE_FIELD_NAMES" | "QUOTE_NON_NUMERIC_NUMBERS" | "ESCAPE_NON_ASCII" | "WRITE_NUMBERS_AS_STRINGS" | "WRITE_BIGDECIMAL_AS_PLAIN" | "STRICT_DUPLICATE_DETECTION" | "IGNORE_UNKNOWN";
}