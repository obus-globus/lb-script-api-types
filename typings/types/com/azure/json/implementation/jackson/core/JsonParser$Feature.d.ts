import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class JsonParser$Feature extends Enum<JsonParser$Feature> {
    static ALLOW_BACKSLASH_ESCAPING_ANY_CHARACTER: JsonParser$Feature;
    static ALLOW_COMMENTS: JsonParser$Feature;
    static ALLOW_LEADING_DECIMAL_POINT_FOR_NUMBERS: JsonParser$Feature;
    static ALLOW_MISSING_VALUES: JsonParser$Feature;
    static ALLOW_NON_NUMERIC_NUMBERS: JsonParser$Feature;
    static ALLOW_NUMERIC_LEADING_ZEROS: JsonParser$Feature;
    static ALLOW_SINGLE_QUOTES: JsonParser$Feature;
    static ALLOW_TRAILING_COMMA: JsonParser$Feature;
    static ALLOW_UNQUOTED_CONTROL_CHARS: JsonParser$Feature;
    static ALLOW_UNQUOTED_FIELD_NAMES: JsonParser$Feature;
    static ALLOW_YAML_COMMENTS: JsonParser$Feature;
    static AUTO_CLOSE_SOURCE: JsonParser$Feature;
    static IGNORE_UNDEFINED: JsonParser$Feature;
    static INCLUDE_SOURCE_IN_LOCATION: JsonParser$Feature;
    static STRICT_DUPLICATE_DETECTION: JsonParser$Feature;
    static collectDefaults(): number;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): JsonParser$Feature;
    static values(): JsonParser$Feature[];
    private constructor(arg2: boolean)
    // private _defaultState: boolean;
    // private _mask: number;
    enabledByDefault(): boolean;
    enabledIn(arg0: number): boolean;
    getMask(): number;
    name(): "AUTO_CLOSE_SOURCE" | "ALLOW_COMMENTS" | "ALLOW_YAML_COMMENTS" | "ALLOW_UNQUOTED_FIELD_NAMES" | "ALLOW_SINGLE_QUOTES" | "ALLOW_UNQUOTED_CONTROL_CHARS" | "ALLOW_BACKSLASH_ESCAPING_ANY_CHARACTER" | "ALLOW_NUMERIC_LEADING_ZEROS" | "ALLOW_LEADING_DECIMAL_POINT_FOR_NUMBERS" | "ALLOW_NON_NUMERIC_NUMBERS" | "ALLOW_MISSING_VALUES" | "ALLOW_TRAILING_COMMA" | "STRICT_DUPLICATE_DETECTION" | "IGNORE_UNDEFINED" | "INCLUDE_SOURCE_IN_LOCATION";
}