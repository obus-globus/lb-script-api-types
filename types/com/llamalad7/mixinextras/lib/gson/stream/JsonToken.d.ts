import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
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
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    private constructor()
}