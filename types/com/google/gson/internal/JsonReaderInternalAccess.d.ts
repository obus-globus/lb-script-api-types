import type { JsonReader } from '../../../../com/google/gson/stream/JsonReader.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class JsonReaderInternalAccess extends Object {
    static INSTANCE: JsonReaderInternalAccess;
    constructor()
    promoteNameToValue(arg0: JsonReader): void;
}