import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { JsonElement } from '../../../../../com/google/gson/JsonElement.d.ts'
import type { TypeAdapter } from '../../../../../com/google/gson/TypeAdapter.d.ts'
import type { ObjectConstructor } from '../../../../../com/google/gson/internal/ObjectConstructor.d.ts'
import type { MapTypeAdapterFactory } from '../../../../../com/google/gson/internal/bind/MapTypeAdapterFactory.d.ts'
import type { JsonReader } from '../../../../../com/google/gson/stream/JsonReader.d.ts'
import type { JsonWriter } from '../../../../../com/google/gson/stream/JsonWriter.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class MapTypeAdapterFactory$Adapter<K extends unknown, V extends unknown> extends TypeAdapter<JavaMap<K, V>> {
    constructor(null_: MapTypeAdapterFactory, arg1: TypeAdapter<K>, arg2: TypeAdapter<V>, arg3: ObjectConstructor<JavaMap<K, V>>)
    // private constructor: ObjectConstructor<JavaMap<K, V>>;
    // private keyTypeAdapter: TypeAdapter<K>;
    // private valueTypeAdapter: TypeAdapter<V>;
    // private keyToString(arg0: JsonElement): string;
    read(arg0: JsonReader): JavaMap<K, V>;
    write(arg0: JsonWriter, arg1: JavaMap<K, V>): void;
}