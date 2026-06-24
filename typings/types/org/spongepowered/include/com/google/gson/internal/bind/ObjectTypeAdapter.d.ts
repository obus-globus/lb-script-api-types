import type { ObjectTypeAdapter$1 } from '../../../../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Gson } from '../../../../../../../../org/spongepowered/include/com/google/gson/Gson.d.ts'
import type { TypeAdapter } from '../../../../../../../../org/spongepowered/include/com/google/gson/TypeAdapter.d.ts'
import type { TypeAdapterFactory } from '../../../../../../../../org/spongepowered/include/com/google/gson/TypeAdapterFactory.d.ts'
import type { JsonReader } from '../../../../../../../../org/spongepowered/include/com/google/gson/stream/JsonReader.d.ts'
import type { JsonWriter } from '../../../../../../../../org/spongepowered/include/com/google/gson/stream/JsonWriter.d.ts'
export class ObjectTypeAdapter extends TypeAdapter<Object> {
    static FACTORY: TypeAdapterFactory;
    private constructor(arg0: Gson)
    constructor(arg0: Gson, arg1: ObjectTypeAdapter$1)
    // private gson: Gson;
    read(arg0: JsonReader): Object;
    write(arg0: JsonWriter, arg1: Object): void;
}