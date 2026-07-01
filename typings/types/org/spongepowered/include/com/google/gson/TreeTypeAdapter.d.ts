import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Gson } from '../../../../../../org/spongepowered/include/com/google/gson/Gson.d.ts'
import type { JsonDeserializer } from '../../../../../../org/spongepowered/include/com/google/gson/JsonDeserializer.d.ts'
import type { JsonSerializer } from '../../../../../../org/spongepowered/include/com/google/gson/JsonSerializer.d.ts'
import type { TypeAdapter } from '../../../../../../org/spongepowered/include/com/google/gson/TypeAdapter.d.ts'
import type { TypeAdapterFactory } from '../../../../../../org/spongepowered/include/com/google/gson/TypeAdapterFactory.d.ts'
import type { TypeToken } from '../../../../../../org/spongepowered/include/com/google/gson/reflect/TypeToken.d.ts'
import type { JsonReader } from '../../../../../../org/spongepowered/include/com/google/gson/stream/JsonReader.d.ts'
import type { JsonWriter } from '../../../../../../org/spongepowered/include/com/google/gson/stream/JsonWriter.d.ts'
export class TreeTypeAdapter<T extends unknown> extends TypeAdapter<T> {
    static newFactory(paramarg0: TypeToken<Object>, paramarg1: Object): TypeAdapterFactory;
    constructor(arg0: JsonSerializer<Object>, arg1: JsonDeserializer<Object>, arg2: Gson, arg3: TypeToken<Object>, arg4: TypeAdapterFactory, arg5: any)
    // private delegate: TypeAdapter<T>;
    // private deserializer: JsonDeserializer<T>;
    // private gson: Gson;
    // private serializer: JsonSerializer<T>;
    // private skipPast: TypeAdapterFactory;
    // private typeToken: TypeToken<T>;
    // private delegate(): TypeAdapter<T>;
    read(arg0: JsonReader): T;
    write(arg0: JsonWriter, arg1: T): void;
}