import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { JsonReader } from '../../../../../../../../org/spongepowered/include/com/google/gson/stream/JsonReader.d.ts'
import type { JsonWriter } from '../../../../../../../../org/spongepowered/include/com/google/gson/stream/JsonWriter.d.ts'
export abstract class ReflectiveTypeAdapterFactory$BoundField extends Object {
    constructor(arg0: string, arg1: boolean, arg2: boolean)
    // private deserialized: boolean;
    // private name: string;
    // private serialized: boolean;
    read(arg0: JsonReader, arg1: Object): void;
    write(arg0: JsonWriter, arg1: Object): void;
}