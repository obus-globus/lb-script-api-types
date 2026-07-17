import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { ReflectiveTypeAdapterFactory$Adapter } from '../../../../../com/google/gson/internal/bind/ReflectiveTypeAdapterFactory$Adapter.d.ts'
import type { ReflectiveTypeAdapterFactory$BoundField } from '../../../../../com/google/gson/internal/bind/ReflectiveTypeAdapterFactory$BoundField.d.ts'
import type { ReflectiveTypeAdapterFactory$FieldsData } from '../../../../../com/google/gson/internal/bind/ReflectiveTypeAdapterFactory$FieldsData.d.ts'
import type { JsonReader } from '../../../../../com/google/gson/stream/JsonReader.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Constructor } from '../../../../../java/lang/reflect/Constructor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ReflectiveTypeAdapterFactory$RecordAdapter<T extends unknown> extends ReflectiveTypeAdapterFactory$Adapter<T, Object[]> {
    constructor(arg0: Class<T>, arg1: ReflectiveTypeAdapterFactory$FieldsData, arg2: boolean)
    // private componentIndices: JavaMap<string, number>;
    // private constructor: Constructor<T>;
    // private constructorArgsDefaults: Object[];
    createAccumulator(): Object[];
    finalize(arg0: Object[]): T;
    readField(arg0: Object[], arg1: JsonReader, arg2: ReflectiveTypeAdapterFactory$BoundField): void;
}