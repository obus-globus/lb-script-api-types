import type { FormatFeature } from '../../../../../../../com/azure/json/implementation/jackson/core/FormatFeature.d.ts'
import type { JsonParser$Feature } from '../../../../../../../com/azure/json/implementation/jackson/core/JsonParser$Feature.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class JsonReadFeature extends Enum<JsonReadFeature> implements FormatFeature {
    static ALLOW_BACKSLASH_ESCAPING_ANY_CHARACTER: JsonReadFeature;
    static ALLOW_JAVA_COMMENTS: JsonReadFeature;
    static ALLOW_LEADING_DECIMAL_POINT_FOR_NUMBERS: JsonReadFeature;
    static ALLOW_LEADING_ZEROS_FOR_NUMBERS: JsonReadFeature;
    static ALLOW_MISSING_VALUES: JsonReadFeature;
    static ALLOW_NON_NUMERIC_NUMBERS: JsonReadFeature;
    static ALLOW_SINGLE_QUOTES: JsonReadFeature;
    static ALLOW_TRAILING_COMMA: JsonReadFeature;
    static ALLOW_UNESCAPED_CONTROL_CHARS: JsonReadFeature;
    static ALLOW_UNQUOTED_FIELD_NAMES: JsonReadFeature;
    static ALLOW_YAML_COMMENTS: JsonReadFeature;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): JsonReadFeature;
    static values(): JsonReadFeature[];
    private constructor(arg2: boolean, arg3: JsonParser$Feature)
    // private _defaultState: boolean;
    // private _mappedFeature: JsonParser$Feature;
    // private _mask: number;
    enabledByDefault(): boolean;
    enabledIn(arg0: number): boolean;
    getMask(): number;
    mappedFeature(): JsonParser$Feature;
    name(): "ALLOW_JAVA_COMMENTS" | "ALLOW_YAML_COMMENTS" | "ALLOW_SINGLE_QUOTES" | "ALLOW_UNQUOTED_FIELD_NAMES" | "ALLOW_UNESCAPED_CONTROL_CHARS" | "ALLOW_BACKSLASH_ESCAPING_ANY_CHARACTER" | "ALLOW_LEADING_ZEROS_FOR_NUMBERS" | "ALLOW_LEADING_DECIMAL_POINT_FOR_NUMBERS" | "ALLOW_NON_NUMERIC_NUMBERS" | "ALLOW_MISSING_VALUES" | "ALLOW_TRAILING_COMMA";
}