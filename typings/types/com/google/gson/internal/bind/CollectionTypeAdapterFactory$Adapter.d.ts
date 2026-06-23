import type { TypeAdapter } from '../../../../../com/google/gson/TypeAdapter.d.ts'
import type { ObjectConstructor } from '../../../../../com/google/gson/internal/ObjectConstructor.d.ts'
import type { JsonReader } from '../../../../../com/google/gson/stream/JsonReader.d.ts'
import type { JsonWriter } from '../../../../../com/google/gson/stream/JsonWriter.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CollectionTypeAdapterFactory$Adapter<E extends unknown> extends TypeAdapter<E[]> {
    constructor(arg0: TypeAdapter<E>, arg1: ObjectConstructor<E[]>)
    // private constructor: ObjectConstructor<E[]>;
    // private elementTypeAdapter: TypeAdapter<E>;
    read(arg0: JsonReader): E[];
    write(arg0: JsonWriter, arg1: E[]): void;
}