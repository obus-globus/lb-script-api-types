import type { Type } from '../../../../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { JsonElement } from '../../../../../../../../org/spongepowered/include/com/google/gson/JsonElement.d.ts'
import type { TypeAdapter } from '../../../../../../../../org/spongepowered/include/com/google/gson/TypeAdapter.d.ts'
import type { ObjectConstructor } from '../../../../../../../../org/spongepowered/include/com/google/gson/internal/ObjectConstructor.d.ts'
import type { JsonReader } from '../../../../../../../../org/spongepowered/include/com/google/gson/stream/JsonReader.d.ts'
import type { JsonWriter } from '../../../../../../../../org/spongepowered/include/com/google/gson/stream/JsonWriter.d.ts'
export class MapTypeAdapterFactory$Adapter<K extends unknown, V extends unknown> extends TypeAdapter<Map<K, V>> {
    constructor(null_: MapTypeAdapterFactory$Adapter<K, V>, arg2: Type, arg3: TypeAdapter<K>, arg4: Type, arg5: TypeAdapter<V>, arg6: ObjectConstructor<Map<K, V>>)
    // private constructor: ObjectConstructor<Map<K, V>>;
    // private keyTypeAdapter: TypeAdapter<K>;
    // private valueTypeAdapter: TypeAdapter<V>;
    // private keyToString(arg0: JsonElement): string;
    read(arg0: JsonReader): Map<K, V>;
    write(arg0: JsonWriter, arg1: Map<K, V>): void;
}