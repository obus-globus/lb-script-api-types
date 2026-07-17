import type { JavaMap } from '../../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { TypeAdapter } from '../../../../../../../../org/spongepowered/include/com/google/gson/TypeAdapter.d.ts'
import type { ObjectConstructor } from '../../../../../../../../org/spongepowered/include/com/google/gson/internal/ObjectConstructor.d.ts'
import type { ReflectiveTypeAdapterFactory$BoundField } from '../../../../../../../../org/spongepowered/include/com/google/gson/internal/bind/ReflectiveTypeAdapterFactory$BoundField.d.ts'
import type { JsonReader } from '../../../../../../../../org/spongepowered/include/com/google/gson/stream/JsonReader.d.ts'
import type { JsonWriter } from '../../../../../../../../org/spongepowered/include/com/google/gson/stream/JsonWriter.d.ts'
export class ReflectiveTypeAdapterFactory$Adapter<T extends unknown> extends TypeAdapter<T> {
    private constructor(arg0: ObjectConstructor<T>, arg1: JavaMap<string, ReflectiveTypeAdapterFactory$BoundField>)
    // private boundFields: JavaMap<string, ReflectiveTypeAdapterFactory$BoundField>;
    // private constructor: ObjectConstructor<T>;
    read(arg0: JsonReader): T;
    write(arg0: JsonWriter, arg1: T): void;
}