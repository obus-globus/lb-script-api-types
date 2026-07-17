import type { JavaMap } from '../../../../../../../../JavaMap.d.ts'
import type { Type } from '../../../../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Gson } from '../../../../../../../../org/spongepowered/include/com/google/gson/Gson.d.ts'
import type { JsonElement } from '../../../../../../../../org/spongepowered/include/com/google/gson/JsonElement.d.ts'
import type { TypeAdapter } from '../../../../../../../../org/spongepowered/include/com/google/gson/TypeAdapter.d.ts'
import type { ObjectConstructor } from '../../../../../../../../org/spongepowered/include/com/google/gson/internal/ObjectConstructor.d.ts'
import type { MapTypeAdapterFactory } from '../../../../../../../../org/spongepowered/include/com/google/gson/internal/bind/MapTypeAdapterFactory.d.ts'
import type { JsonReader } from '../../../../../../../../org/spongepowered/include/com/google/gson/stream/JsonReader.d.ts'
import type { JsonWriter } from '../../../../../../../../org/spongepowered/include/com/google/gson/stream/JsonWriter.d.ts'
export class MapTypeAdapterFactory$Adapter<K extends unknown, V extends unknown> extends TypeAdapter<JavaMap<K, V>> {
    constructor(null_: MapTypeAdapterFactory, arg1: Gson, arg2: Type, arg3: TypeAdapter<K>, arg4: Type, arg5: TypeAdapter<V>, arg6: ObjectConstructor<JavaMap<K, V>>)
    // private constructor: ObjectConstructor<JavaMap<K, V>>;
    // private keyTypeAdapter: TypeAdapter<K>;
    // private valueTypeAdapter: TypeAdapter<V>;
    // private keyToString(arg0: JsonElement): string;
    read(arg0: JsonReader): JavaMap<K, V>;
    write(arg0: JsonWriter, arg1: JavaMap<K, V>): void;
}