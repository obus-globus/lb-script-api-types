import type { FormatFeature } from '../../../../../../../com/azure/json/implementation/jackson/core/FormatFeature.d.ts'
import type { JsonGenerator$Feature } from '../../../../../../../com/azure/json/implementation/jackson/core/JsonGenerator$Feature.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class JsonWriteFeature extends Enum<JsonWriteFeature> implements FormatFeature {
    static ESCAPE_NON_ASCII: JsonWriteFeature;
    static QUOTE_FIELD_NAMES: JsonWriteFeature;
    static WRITE_NAN_AS_STRINGS: JsonWriteFeature;
    static WRITE_NUMBERS_AS_STRINGS: JsonWriteFeature;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): JsonWriteFeature;
    static values(): (Object | null)[];
    private constructor(arg2: boolean, arg3: JsonGenerator$Feature)
    // private _defaultState: boolean;
    // private _mappedFeature: JsonGenerator$Feature;
    // private _mask: number;
    enabledByDefault(): boolean;
    enabledIn(arg0: number): boolean;
    getMask(): number;
    mappedFeature(): JsonGenerator$Feature;
    name(): "QUOTE_FIELD_NAMES" | "WRITE_NAN_AS_STRINGS" | "WRITE_NUMBERS_AS_STRINGS" | "ESCAPE_NON_ASCII";
}