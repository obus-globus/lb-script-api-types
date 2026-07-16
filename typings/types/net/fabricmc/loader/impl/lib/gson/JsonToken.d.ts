import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class JsonToken extends Enum<JsonToken> {
    static BEGIN_ARRAY: JsonToken;
    static BEGIN_OBJECT: JsonToken;
    static BOOLEAN: JsonToken;
    static END_ARRAY: JsonToken;
    static END_DOCUMENT: JsonToken;
    static END_OBJECT: JsonToken;
    static NAME: JsonToken;
    static NULL: JsonToken;
    static NUMBER: JsonToken;
    static STRING: JsonToken;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): JsonToken;
    static values(): JsonToken[];
    private constructor()
    name(): "BEGIN_ARRAY" | "END_ARRAY" | "BEGIN_OBJECT" | "END_OBJECT" | "NAME" | "STRING" | "NUMBER" | "BOOLEAN" | "NULL" | "END_DOCUMENT";
}