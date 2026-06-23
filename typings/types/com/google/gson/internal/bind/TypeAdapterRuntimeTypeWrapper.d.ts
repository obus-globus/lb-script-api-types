import type { Gson } from '../../../../../com/google/gson/Gson.d.ts'
import type { TypeAdapter } from '../../../../../com/google/gson/TypeAdapter.d.ts'
import type { JsonReader } from '../../../../../com/google/gson/stream/JsonReader.d.ts'
import type { JsonWriter } from '../../../../../com/google/gson/stream/JsonWriter.d.ts'
import type { Type } from '../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TypeAdapterRuntimeTypeWrapper<T extends unknown> extends TypeAdapter<T> {
    constructor(arg0: Gson, arg1: TypeAdapter<T>, arg2: Type)
    // private context: Gson;
    // private delegate: TypeAdapter<T>;
    // private type: Type;
    read(arg0: JsonReader): T;
    write(arg0: JsonWriter, arg1: T): void;
}