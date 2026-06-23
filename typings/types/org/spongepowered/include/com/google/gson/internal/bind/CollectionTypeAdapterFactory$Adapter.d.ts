import type { Type } from '../../../../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Gson } from '../../../../../../../../org/spongepowered/include/com/google/gson/Gson.d.ts'
import type { TypeAdapter } from '../../../../../../../../org/spongepowered/include/com/google/gson/TypeAdapter.d.ts'
import type { ObjectConstructor } from '../../../../../../../../org/spongepowered/include/com/google/gson/internal/ObjectConstructor.d.ts'
import type { JsonReader } from '../../../../../../../../org/spongepowered/include/com/google/gson/stream/JsonReader.d.ts'
import type { JsonWriter } from '../../../../../../../../org/spongepowered/include/com/google/gson/stream/JsonWriter.d.ts'
export class CollectionTypeAdapterFactory$Adapter<E extends unknown> extends TypeAdapter<E[]> {
    constructor(arg0: Gson, arg1: Type, arg2: TypeAdapter<E>, arg3: ObjectConstructor<E[]>)
    // private constructor: ObjectConstructor<E[]>;
    // private elementTypeAdapter: TypeAdapter<E>;
    read(arg0: JsonReader): E[];
    write(arg0: JsonWriter, arg1: E[]): void;
}