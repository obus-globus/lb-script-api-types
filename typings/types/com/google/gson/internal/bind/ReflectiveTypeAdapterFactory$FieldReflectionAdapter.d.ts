import type { ObjectConstructor } from '../../../../../com/google/gson/internal/ObjectConstructor.d.ts'
import type { ReflectiveTypeAdapterFactory$Adapter } from '../../../../../com/google/gson/internal/bind/ReflectiveTypeAdapterFactory$Adapter.d.ts'
import type { ReflectiveTypeAdapterFactory$BoundField } from '../../../../../com/google/gson/internal/bind/ReflectiveTypeAdapterFactory$BoundField.d.ts'
import type { ReflectiveTypeAdapterFactory$FieldsData } from '../../../../../com/google/gson/internal/bind/ReflectiveTypeAdapterFactory$FieldsData.d.ts'
import type { JsonReader } from '../../../../../com/google/gson/stream/JsonReader.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ReflectiveTypeAdapterFactory$FieldReflectionAdapter<T extends unknown> extends ReflectiveTypeAdapterFactory$Adapter<T, T> {
    constructor(arg0: ObjectConstructor<T>, arg1: ReflectiveTypeAdapterFactory$FieldsData)
    // private constructor: ObjectConstructor<T>;
    createAccumulator(): T;
    finalize(arg0: T): T;
    readField(arg0: T, arg1: JsonReader, arg2: ReflectiveTypeAdapterFactory$BoundField): void;
}