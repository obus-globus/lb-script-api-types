import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { JsonReader } from '../../../../../../../org/spongepowered/include/com/google/gson/stream/JsonReader.d.ts'
export abstract class JsonReaderInternalAccess extends Object {
    static INSTANCE: JsonReaderInternalAccess;
    constructor()
    promoteNameToValue(arg0: JsonReader): void;
}