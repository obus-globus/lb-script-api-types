import type { JsonElement } from '../../../com/google/gson/JsonElement.d.ts'
import type { JsonReader } from '../../../com/google/gson/stream/JsonReader.d.ts'
import type { Reader } from '../../../java/io/Reader.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class JsonParser extends Object {
    static parseReader(paramarg0: JsonReader): JsonElement;
    static parseReader(paramarg0: Reader): JsonElement;
    static parseString(paramarg0: string): JsonElement;
    constructor()
    parse(arg0: JsonReader): JsonElement;
    parse(arg0: Reader): JsonElement;
    parse(arg0: string): JsonElement;
}