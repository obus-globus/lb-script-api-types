import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class JsonToken extends Enum<JsonToken> {
    static BOOLEAN: JsonToken;
    static END_ARRAY: JsonToken;
    static END_DOCUMENT: JsonToken;
    static END_OBJECT: JsonToken;
    static FIELD_NAME: JsonToken;
    static NULL: JsonToken;
    static NUMBER: JsonToken;
    static START_ARRAY: JsonToken;
    static START_OBJECT: JsonToken;
    static STRING: JsonToken;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): JsonToken;
    static values(): JsonToken[];
    private constructor()
    name(): "START_OBJECT" | "END_OBJECT" | "START_ARRAY" | "END_ARRAY" | "FIELD_NAME" | "BOOLEAN" | "NULL" | "NUMBER" | "STRING" | "END_DOCUMENT";
}