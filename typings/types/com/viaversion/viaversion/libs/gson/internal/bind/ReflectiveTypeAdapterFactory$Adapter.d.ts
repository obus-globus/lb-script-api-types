import type { TypeAdapter } from '../../../../../../../com/viaversion/viaversion/libs/gson/TypeAdapter.d.ts'
import type { ReflectiveTypeAdapterFactory$BoundField } from '../../../../../../../com/viaversion/viaversion/libs/gson/internal/bind/ReflectiveTypeAdapterFactory$BoundField.d.ts'
import type { ReflectiveTypeAdapterFactory$FieldsData } from '../../../../../../../com/viaversion/viaversion/libs/gson/internal/bind/ReflectiveTypeAdapterFactory$FieldsData.d.ts'
import type { JsonReader } from '../../../../../../../com/viaversion/viaversion/libs/gson/stream/JsonReader.d.ts'
import type { JsonWriter } from '../../../../../../../com/viaversion/viaversion/libs/gson/stream/JsonWriter.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class ReflectiveTypeAdapterFactory$Adapter<T extends unknown, A extends unknown> extends TypeAdapter<T> {
    constructor(arg0: ReflectiveTypeAdapterFactory$FieldsData)
    // private fieldsData: ReflectiveTypeAdapterFactory$FieldsData;
    createAccumulator(): A;
    finalize(arg0: A): T;
    read(arg0: JsonReader): T;
    readField(arg0: A, arg1: JsonReader, arg2: ReflectiveTypeAdapterFactory$BoundField): void;
    write(arg0: JsonWriter, arg1: T): void;
}